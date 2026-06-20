# MVP to Enterprise Production Roadmap

## Phase 1: Two-week MVP demo

Goal: prove the product narrative with minimal AWS spend.

Deliverables:

- Static web dashboard.
- Cognito login.
- API endpoint for evidence ingestion.
- S3 evidence bucket.
- DynamoDB evidence metadata table.
- Bedrock-based read-only explanation workflow.
- Guardrails configured for PII and unsafe content.
- Demo audit package export.
- Budget alarm and cost tags.

Exit criteria:

- Founder can demo: ingest event -> risk score -> evidence package -> AI explanation -> human approval.
- No enforcement claims.
- No customer secrets in logs.
- All resources deployed through IaC.

## Phase 2: Six-week production candidate

Deliverables:

- Multi-environment CDK pipeline.
- Least-privilege IAM review.
- WAF on public endpoints.
- CloudTrail, GuardDuty, Security Hub enabled.
- Structured logs, metrics, alarms, traces.
- Incident runbook.
- SLOs and error budgets.
- Tenant model documented and tested.
- Integration API versioning.
- Backups and restore test.

Exit criteria:

- Security review passed.
- Cost model approved.
- Demo data separated from production data.
- Enterprise claims reviewed by legal/compliance.

## Phase 3: Enterprise production

Deliverables:

- AWS Organizations multi-account structure.
- Separate dev, staging, prod, security, log archive accounts.
- Tenant-aware data partitioning.
- Private connectivity option.
- Evidence immutability controls.
- Compliance evidence package.
- DR plan and game day.
- Customer onboarding workflow.
- Pen test remediation backlog.
- Formal release process.

Exit criteria:

- Production readiness review complete.
- Rollback tested.
- Incident response tested.
- Customer support path defined.
- Compliance evidence package ready for procurement.

## Phase 4: Enforcement expansion

Only after customer approval and risk review:

- Inline Sentinel control point.
- Runtime airbag challenge-response.
- Agent identity enforcement.
- Kubernetes admission path if required.
- Automated quarantine only where rollback and manual override exist.
