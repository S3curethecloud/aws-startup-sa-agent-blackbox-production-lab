# Amazon Virtual Loop Interview: Startup Solutions Architect Scenario

## Scenario prompt

You were offered the AWS Startup Solutions Architect role. Your boss calls and says a Southern California founder has a complex GenAI governance and evidence platform. The founder needs to get the MVP production-ready without burning runway or creating unsafe enterprise claims. Walk the interviewers through how you consult, choose AWS services, manage cost, and scale the platform.

## Loop roles

1. Hiring manager: founder consultation and SA operating model.
2. Technical interviewer: AWS architecture depth.
3. GenAI interviewer: Bedrock, RAG, model cost, latency, accuracy, safety.
4. Security interviewer: tenant isolation, IAM, compliance, audit evidence.
5. Bar raiser: leadership principles and tradeoff judgment.

## Interview question bank

### Hiring manager

**Question:** How would you start with the founder?

**Answer outline:** Work backwards from first customer and first paid workflow. Clarify demo versus production claims. Identify data sources, sensitive data, budget ceiling, and one two-week proof point. Produce service selection, cost guardrails, and security gates.

### Technical architecture

**Question:** Why serverless first?

**Answer outline:** It optimizes for speed, low idle cost, and small-team operations. API Gateway, Lambda, DynamoDB on-demand, S3, EventBridge, and SQS let the founder validate demand. Move to Fargate when runtime dependencies, latency, or long-running services justify containers. Avoid EKS until Kubernetes-native enforcement is required.

### GenAI

**Question:** How do you manage model cost, latency, accuracy, and safety?

**Answer outline:** Use model routing, token caps, caching, async evaluation, prompt versioning, retrieval citations, Guardrails, automated and human evaluation, and per-tenant metrics. Treat GenAI as advisory until deterministic checks and human approval support action.

### Security

**Question:** How do you prevent tenant leakage?

**Answer outline:** Backend-enforced tenant authorization, tenant-aware partition keys, isolated S3 prefixes or buckets, KMS strategy, no frontend-only trust, isolation tests, and careful vector index filtering.

### Bar raiser

**Question:** Tell me about a time you pushed back on a risky shortcut.

**Answer outline:** Use this scenario as a STAR: founder wants enforcement in MVP; SA disagrees and commits to evidence-first advisory launch with a governed enforcement roadmap.

## Debrief rubric

| Competency | Strong signal |
|---|---|
| Customer Obsession | Starts with customer workflow and trust. |
| Frugality | Controls idle cost and model spend. |
| Dive Deep | Details data flow, auth, logs, tenant isolation. |
| Are Right, A Lot | Explains tradeoffs and when decisions change. |
| Bias for Action | Ships safe MVP quickly. |
| Earn Trust | Clearly separates demo, advisory, and enforcement. |
| Deliver Results | Creates lab, repo, roadmap, and production gates. |
