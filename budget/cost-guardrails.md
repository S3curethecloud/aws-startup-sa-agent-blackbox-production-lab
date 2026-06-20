# Cost Guardrails

## Required before first public demo

- Monthly AWS Budget.
- Forecast alert at 50, 80, and 100 percent.
- Daily spend check during active demo week.
- Mandatory resource tags: `Application`, `Environment`, `Tenant`, `Owner`, `CostCenter`.
- Bedrock token telemetry by tenant and workflow.
- Non-prod cleanup policy.
- S3 lifecycle policy for demo evidence.

## Founder cost review dashboard

- Month-to-date spend.
- Forecast month-end spend.
- Spend by service.
- Spend by environment.
- Bedrock requests, tokens, latency, and errors.
- Cost anomalies and action items.

## Frugal default settings

- DynamoDB on-demand for MVP.
- Lambda reserved concurrency for runaway protection.
- SQS DLQ max receive count to prevent infinite retry spend.
- Log retention set explicitly.
- No NAT Gateway in MVP unless private subnet egress requires it; prefer VPC endpoints or public Lambda without VPC where secure and acceptable.
- No EKS until customer value and revenue justify it.
