# Operational Readiness

## Minimum production telemetry

| Signal | Metric |
|---|---|
| Availability | API 2xx/4xx/5xx rate, frontend health check. |
| Latency | p50, p95, p99 API latency; Bedrock request latency. |
| Cost | Daily spend, forecast, token usage by tenant. |
| Security | WAF blocked requests, GuardDuty findings, auth failures. |
| Evidence pipeline | Events ingested, events failed, SQS age, Step Functions failures. |
| Data | DynamoDB throttles, S3 errors, object count growth. |

## SLO draft

- Public dashboard availability: 99.5 percent during MVP, 99.9 percent production target.
- Evidence ingestion API p95 latency: under 750 ms for synchronous validation path.
- Async evidence package generation: under 5 minutes for standard package.
- Incident acknowledgement: under 30 minutes during business hours for MVP.

## Release process

1. Issue or change request opened.
2. Architecture decision updated if service boundary changes.
3. Pull request with IaC diff and test evidence.
4. Security review for IAM, network, auth, data, and logging changes.
5. Cost estimate updated.
6. Staging deployment.
7. Smoke tests.
8. Production deployment with rollback plan.
9. Post-deploy evidence recorded.

## Game days

- SQS backlog spike.
- Bedrock throttle or model unavailability.
- Cognito login failure.
- Bad release rollback.
- Cost anomaly.
- Evidence package corruption.
- WAF false positive.
