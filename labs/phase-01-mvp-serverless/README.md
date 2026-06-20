# Lab Phase 01: MVP Serverless

## Objective

Build the minimum secure platform skeleton.

## AWS resources

- Cognito User Pool.
- API Gateway HTTP API.
- Lambda API handler.
- DynamoDB evidence metadata table.
- S3 evidence bucket.
- SQS queue.
- EventBridge event bus.
- KMS key.

## Tasks

1. Run unit tests for the API handler.
2. Synthesize CDK.
3. Review IAM permissions.
4. Configure budget guardrails before deployment.
5. Deploy to dev account only.
6. Test `GET /health` and `POST /evidence`.

## Production warning

This phase is not a full production release. It lacks WAF, custom domain, full JWT authorizer configuration, and enterprise tenant isolation tests.
