import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AgentBlackboxMvpStackProps extends cdk.StackProps {
  projectName: string;
  environmentName: string;
}

export class AgentBlackboxMvpStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AgentBlackboxMvpStackProps) {
    super(scope, id, props);

    const name = `${props.projectName}-${props.environmentName}`;

    const key = new kms.Key(this, 'EvidenceKey', {
      alias: `${name}-evidence-key`,
      enableKeyRotation: true,
      description: 'KMS key for Agent Blackbox MVP evidence and metadata.',
    });

    const evidenceBucket = new s3.Bucket(this, 'EvidenceBucket', {
      bucketName: undefined,
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: key,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      lifecycleRules: [
        {
          id: 'expire-demo-noncurrent-versions',
          noncurrentVersionExpiration: cdk.Duration.days(30),
        },
      ],
    });

    const evidenceTable = new dynamodb.Table(this, 'EvidenceMetadataTable', {
      partitionKey: { name: 'tenant_id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'evidence_id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: key,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    evidenceTable.addGlobalSecondaryIndex({
      indexName: 'status-created-index',
      partitionKey: { name: 'status', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'created_at', type: dynamodb.AttributeType.STRING },
    });

    const agentRegistryTable = new dynamodb.Table(this, 'AgentRegistryTable', {
      partitionKey: { name: 'tenant_id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'agent_id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: key,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const eventBus = new events.EventBus(this, 'EvidenceEventBus', {
      eventBusName: `${name}-evidence-bus`,
    });

    const evidenceQueue = new sqs.Queue(this, 'EvidenceQueue', {
      queueName: `${name}-evidence-queue`,
      encryption: sqs.QueueEncryption.KMS,
      encryptionMasterKey: key,
      visibilityTimeout: cdk.Duration.seconds(120),
      retentionPeriod: cdk.Duration.days(4),
    });

    const userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: `${name}-users`,
      selfSignUpEnabled: false,
      signInAliases: { email: true },
      mfa: cognito.Mfa.OPTIONAL,
      mfaSecondFactor: { sms: false, otp: true },
      passwordPolicy: {
        minLength: 14,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const appClient = userPool.addClient('WebAppClient', {
      userPoolClientName: `${name}-web`,
      generateSecret: false,
      authFlows: {
        userSrp: true,
      },
    });

    const apiFn = new lambda.Function(this, 'ApiFunction', {
      functionName: `${name}-api`,
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../services/api')),
      timeout: cdk.Duration.seconds(20),
      memorySize: 512,
      environment: {
        EVIDENCE_BUCKET: evidenceBucket.bucketName,
        EVIDENCE_TABLE: evidenceTable.tableName,
        AGENT_REGISTRY_TABLE: agentRegistryTable.tableName,
        EVENT_BUS_NAME: eventBus.eventBusName,
        EVIDENCE_QUEUE_URL: evidenceQueue.queueUrl,
        POWERTOOLS_SERVICE_NAME: 'agent-blackbox-api',
      },
      logRetention: logs.RetentionDays.ONE_MONTH,
      tracing: lambda.Tracing.ACTIVE,
    });

    evidenceBucket.grantReadWrite(apiFn);
    evidenceTable.grantReadWriteData(apiFn);
    agentRegistryTable.grantReadWriteData(apiFn);
    eventBus.grantPutEventsTo(apiFn);
    evidenceQueue.grantSendMessages(apiFn);
    key.grantEncryptDecrypt(apiFn);

    apiFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['bedrock:InvokeModel', 'bedrock:InvokeModelWithResponseStream', 'bedrock:ApplyGuardrail'],
      resources: ['*'],
    }));

    const httpApi = new apigwv2.HttpApi(this, 'HttpApi', {
      apiName: `${name}-api`,
      corsPreflight: {
        allowHeaders: ['authorization', 'content-type', 'x-tenant-id'],
        allowMethods: [apigwv2.CorsHttpMethod.GET, apigwv2.CorsHttpMethod.POST, apigwv2.CorsHttpMethod.OPTIONS],
        allowOrigins: ['http://localhost:3000'],
        maxAge: cdk.Duration.days(1),
      },
    });

    const integration = new integrations.HttpLambdaIntegration('ApiIntegration', apiFn);
    httpApi.addRoutes({
      path: '/{proxy+}',
      methods: [apigwv2.HttpMethod.ANY],
      integration,
    });

    new cdk.CfnOutput(this, 'ApiUrl', { value: httpApi.apiEndpoint });
    new cdk.CfnOutput(this, 'EvidenceBucketName', { value: evidenceBucket.bucketName });
    new cdk.CfnOutput(this, 'EvidenceTableName', { value: evidenceTable.tableName });
    new cdk.CfnOutput(this, 'UserPoolId', { value: userPool.userPoolId });
    new cdk.CfnOutput(this, 'UserPoolClientId', { value: appClient.userPoolClientId });
  }
}
