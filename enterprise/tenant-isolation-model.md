# Tenant Isolation Model

## MVP tenant model

- `tenant_id` required on every API request after auth.
- Cognito group or custom claim maps user to allowed tenants.
- Backend validates tenant access server-side.
- DynamoDB partition key includes tenant ID.
- S3 object prefix includes tenant ID.
- Bedrock requests include tenant and workflow metadata in logs, not in prompt unless required.

## Production tenant model

- Tenant authorization service or policy engine.
- Per-tenant KMS keys for high-isolation customers.
- Optional per-tenant S3 bucket or account for regulated customers.
- Formal isolation tests.
- Tenant offboarding and deletion workflow.

## Anti-patterns

- Trusting frontend tenant claims without backend validation.
- Sharing vector indexes without tenant filters.
- Logging raw tenant data into shared logs.
- Using human-readable tenant names in S3 object keys when confidentiality matters.
