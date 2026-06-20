import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as budgets from 'aws-cdk-lib/aws-budgets';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface EnterpriseFoundationStackProps extends cdk.StackProps {
  projectName: string;
  environmentName: string;
}

export class EnterpriseFoundationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EnterpriseFoundationStackProps) {
    super(scope, id, props);

    const name = `${props.projectName}-${props.environmentName}`;

    const auditBucket = new s3.Bucket(this, 'AuditReadinessBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    new budgets.CfnBudget(this, 'FounderBudgetGuardrail', {
      budget: {
        budgetName: `${name}-monthly-guardrail`,
        budgetType: 'COST',
        timeUnit: 'MONTHLY',
        budgetLimit: {
          amount: 500,
          unit: 'USD',
        },
      },
      notificationsWithSubscribers: [],
    });

    new cdk.CfnOutput(this, 'AuditReadinessBucketName', { value: auditBucket.bucketName });
  }
}
