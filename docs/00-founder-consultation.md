# Phase 0: Founder Consultation

## Consultation frame

You are the AWS Startup Solutions Architect assigned to help the founder turn the SecureTheCloud Agent Blackbox roadmap into a production path.

The founder is not asking for a generic cloud diagram. They need a pragmatic plan that gets the MVP live, preserves founder runway, reduces security risk, and keeps a credible path to enterprise procurement.

## Discovery agenda

1. What is the first paid customer workflow?
2. What evidence must the platform produce on day one?
3. Which parts are demo-only, advisory-only, or enforcement-capable?
4. What data enters the platform: prompts, logs, identity records, policies, cloud account metadata, Kubernetes events, model evaluation traces?
5. What is the trust boundary for each data type?
6. What is the acceptable demo latency?
7. What is the founder's monthly cloud budget ceiling?
8. What compliance narratives must be supported: SOC 2 readiness, HIPAA readiness, SaaS security review, AI governance, audit package export?
9. What cannot be built yet without creating unacceptable risk?
10. What is the one mechanism that proves customer value in two weeks?

## Founder constraints

| Constraint | Architecture implication |
|---|---|
| Small team | Prefer managed services and serverless. |
| MVP must demo quickly | Avoid premature Kubernetes and custom control planes. |
| Enterprise customers need trust | Store immutable evidence, audit events, and architecture decisions from day one. |
| GenAI output must be safe | Use Bedrock Guardrails and application-level policy checks. |
| Costs must be bounded | Budgets, tags, alarms, on-demand capacity, async workloads, token controls. |
| Future production must scale | Use event-driven boundaries and replaceable service modules. |

## First 90-minute founder call

### First 15 minutes: customer and demo narrative

- Who is the first buyer?
- What pain is urgent enough to pay for?
- Which dashboard proves value without deep integration?

### Next 30 minutes: architecture truth

- Current app stack and repo status.
- Data sources.
- Auth model.
- Deployment target.
- Current AWS account structure.
- Current cost posture.

### Next 30 minutes: risk and production path

- What is read-only versus enforcement?
- What data is sensitive?
- What customer promises are forbidden until production controls exist?
- How should audit evidence be retained?

### Final 15 minutes: decision and next actions

- MVP target architecture.
- Cost ceiling.
- Two-week demo deliverables.
- Six-week production readiness plan.
- Enterprise hardening backlog.

## Consultation deliverables

- Service selection matrix.
- MVP architecture diagram.
- Cost guardrails.
- Security baseline.
- Well-Architected review worksheet.
- STAR consultation narrative for Amazon interview loop.
