# AWS Service Selection

## Decision summary

Use AWS managed services to give the founder speed now and a credible enterprise path later.

| Layer | MVP service | Enterprise path | Decision rationale |
|---|---|---|---|
| Frontend | S3 + CloudFront or Amplify Hosting | CloudFront, WAF, private admin routes | Low operations and fast deployment. |
| Auth | Cognito User Pools | Federation to enterprise IdPs, IAM Identity Center for workforce | Avoid building auth in-house. |
| API | API Gateway HTTP API + Lambda | ECS Fargate for long-running APIs; private ALB for enterprise | Pay per request at MVP; containers when runtime grows. |
| Events | EventBridge + SQS | Multi-account event bus, archive/replay, schema registry | Decoupled evidence pipeline. |
| Workflows | Step Functions | Step Functions plus ECS/SageMaker jobs | Clear state machines for evidence packages and model evals. |
| Evidence | S3 + KMS + object versioning | S3 Object Lock where required, S3 Inventory, Macie classification | Durable audit packages. |
| Metadata | DynamoDB on-demand | DynamoDB global tables or Aurora for relational tenant analytics | No capacity planning during MVP. |
| Search | OpenSearch Serverless later | OpenSearch domain/serverless with tenant-aware indexing | Add only once search usage is real. |
| GenAI | Bedrock | Bedrock, Knowledge Bases, Guardrails, Model Evaluation, SageMaker for custom model pipeline | Enterprise model access without managing model infrastructure. |
| Security | IAM, KMS, Secrets Manager, WAF, CloudTrail, GuardDuty, Security Hub | AWS Organizations, Control Tower, Firewall Manager | Baseline security and procurement readiness. |
| Observability | CloudWatch, X-Ray | CloudWatch dashboards, alarms, SLOs, OpenTelemetry collector | Start with basic operational visibility. |
| Cost | Budgets, Cost Explorer, tags | CUR, Athena, per-tenant showback | Control founder runway. |

## Why not EKS first?

EKS is powerful, but it adds operational overhead. For this founder, it should wait until Kubernetes-native customer integrations or admission-control enforcement become a paid requirement. ECS Fargate gives container portability without cluster management and is usually the better first step after Lambda.

## Why Bedrock first?

Bedrock gives the founder managed access to foundation models, guardrails, and knowledge base options without operating model endpoints. That directly supports the product's Trust Intelligence Copilot, RAG, policy explanation, and evaluation surfaces.

## Why not build auth from scratch?

The platform needs enterprise trust. Auth is a differentiator only if it is done wrong. Cognito gives an immediate auth server, user directory, OAuth/OIDC token path, MFA options, and federation route.

## Founder advice

1. Spend engineering time on the product's evidence model, not undifferentiated infrastructure.
2. Keep enforcement out of the MVP unless it is clearly scoped and reversible.
3. Make every GenAI output cite evidence or be labeled advisory.
4. Tag all resources by `Tenant`, `Environment`, `Workload`, and `CostCenter` from day one.
5. Put a hard budget alarm before the first demo.
