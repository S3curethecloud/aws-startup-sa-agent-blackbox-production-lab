# High-Level Runbook

## Normal operation

- Verify API health dashboard.
- Check evidence ingestion failures.
- Check SQS age and DLQ count.
- Check Bedrock latency and error rate.
- Check cost dashboard.
- Review security findings daily during MVP.

## Incident response summary

1. Identify severity.
2. Assign incident commander.
3. Preserve evidence.
4. Stop or throttle affected workflows.
5. Communicate status to stakeholders.
6. Remediate.
7. Validate recovery.
8. Write post-incident review.

## Common failures

| Failure | First action |
|---|---|
| API 5xx spike | Check Lambda logs, recent deployment, throttles. |
| Evidence generation failure | Check Step Functions execution and DLQ. |
| Bedrock throttle | Switch model route, reduce concurrency, retry with backoff. |
| Cost spike | Disable non-prod workloads, inspect Cost Explorer, review token usage. |
| Auth failure | Check Cognito configuration, app client, JWKS validation. |
