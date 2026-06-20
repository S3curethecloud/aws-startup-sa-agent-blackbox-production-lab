# Cost Anomaly Response Runbook

## Trigger

- Budget forecast exceeds threshold.
- Bedrock token usage spikes.
- Lambda concurrency spikes.
- SQS retry loop detected.
- Unexpected NAT/data transfer cost.

## Response

1. Confirm anomaly in Cost Explorer.
2. Identify service, region, environment, and tags.
3. Check recent releases and demo activity.
4. Throttle or disable non-critical workloads.
5. Reduce Bedrock max tokens or route to lower-cost models.
6. Stop non-prod resources.
7. Open corrective action issue.
8. Update cost guardrails.
