# CDK Infrastructure Lab

This CDK app is a starter scaffold for the MVP platform. It is intentionally conservative and should be reviewed before production use.

## Stacks

- `AgentBlackboxMvpStack`: Cognito, API Gateway, Lambda, DynamoDB, S3, SQS, EventBridge, Step Functions placeholder resources.
- `EnterpriseFoundationStack`: optional production-readiness controls such as budget placeholder and central audit bucket pattern.

## Commands

```bash
npm install
npm run build
npx cdk synth
```

## Deployment warning

Do not deploy into a production AWS account without reviewing:

- Region.
- Account ID.
- Removal policies.
- IAM permissions.
- Budget settings.
- WAF configuration.
- Data retention requirements.
