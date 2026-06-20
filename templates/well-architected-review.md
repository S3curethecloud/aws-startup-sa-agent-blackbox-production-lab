# Well-Architected Review Worksheet

## Operational Excellence

- Are runbooks documented?
- Are deployments repeatable through IaC?
- Are alarms actionable?
- Is the incident process tested?

## Security

- Is tenant access validated server-side?
- Are secrets stored in Secrets Manager?
- Is evidence encrypted with KMS?
- Is CloudTrail enabled?
- Are IAM policies least privilege?

## Reliability

- Are async workflows retried safely?
- Are DLQs configured?
- Are backups tested?
- Is rollback documented?

## Performance Efficiency

- Are latency targets defined?
- Is model routing used?
- Are DynamoDB keys designed for access patterns?

## Cost Optimization

- Are budgets enabled?
- Are resources tagged?
- Are tokens capped?
- Are non-prod resources cleaned up?

## Sustainability

- Are idle resources minimized?
- Are data retention policies set?
- Is unnecessary compute avoided?
