# Cost Optimization Plan

## Cost posture

The founder needs runway protection. The first architecture principle is **pay for validated customer demand, not imagined enterprise scale**.

## MVP cost controls

| Control | Implementation |
|---|---|
| Budget guardrail | AWS Budgets for monthly cost ceiling and forecast alerts. |
| Usage analysis | Cost Explorer reports by tag and service. |
| On-demand capacity | DynamoDB on-demand and Lambda avoid idle capacity. |
| Static hosting | S3 + CloudFront or Amplify avoids always-on frontend servers. |
| Async buffering | SQS smooths spikes and prevents over-scaling downstream processing. |
| Token budgets | Per-request Bedrock max tokens, model routing, prompt caching where available, and result caching. |
| No premature EKS | ECS Fargate or Lambda until Kubernetes is a hard requirement. |
| Environment schedule | Non-prod environments can be turned down or scaled to zero. |

## GenAI cost controls

1. Route simple classification tasks to lower-cost models.
2. Reserve high-reasoning models for synthesis, policy explanation, and executive summaries.
3. Cache repeated policy explanations and evidence summaries.
4. Cap tokens per request.
5. Log prompt size, completion size, latency, model ID, and tenant ID.
6. Alert on per-tenant token anomalies.
7. Run batch model evaluation offline, not synchronously in the user request path.

## Scale checkpoints

Move from Lambda to ECS Fargate when:

- Execution time regularly approaches Lambda limits.
- APIs need long-lived connections or heavier runtime dependencies.
- Predictable steady load makes provisioned containers cheaper.
- Background workers require custom process control.

Move from managed Knowledge Bases to self-managed vector infrastructure when:

- Tenant-aware index control becomes mandatory.
- Retrieval latency and ranking need deeper tuning.
- Custom embeddings and index lifecycle controls are required.

Move to EKS only when:

- Kubernetes admission or customer cluster integration is a core product requirement.
- The team has operational capacity for Kubernetes lifecycle management.
- The revenue supports the additional complexity.
