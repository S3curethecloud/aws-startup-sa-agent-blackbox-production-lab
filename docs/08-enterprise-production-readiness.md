# Enterprise Production Readiness

## Enterprise buyer expectations

Enterprise customers will ask for:

- Architecture diagram.
- Data flow diagram.
- Security controls.
- Subprocessor and model provider list.
- Incident response process.
- Access control model.
- Encryption details.
- Logging and auditability.
- Backup and restore process.
- Tenant isolation evidence.
- Compliance roadmap.
- AI safety controls.

## Enterprise production gates

| Gate | Evidence required |
|---|---|
| Account structure | AWS Organizations diagram, account list, SCP strategy. |
| IAM | Least-privilege review, privileged access path, break-glass process. |
| Network | Public/private boundary, WAF, VPC endpoints, egress controls. |
| Data | Data classification, encryption, retention, backup, deletion. |
| Tenant isolation | Partition keys, IAM policy boundaries, test evidence. |
| Observability | Dashboards, alarms, traces, incident runbooks. |
| Cost | Budgets, showback model, anomaly response. |
| AI safety | Guardrails, prompt tests, citations, model evaluation pack. |
| Release | CI/CD, approvals, rollback, change log. |
| Legal/compliance | Claims review, DPA readiness, SOC 2 roadmap. |

## Production account layout

- Management account.
- Security tooling account.
- Log archive account.
- Shared services account.
- Dev account.
- Staging account.
- Prod account.
- Optional per-enterprise-customer account for high-isolation customers.

## When to add private connectivity

Add AWS PrivateLink or VPN/Direct Connect patterns when customers require private ingestion, regulated data transfer, or strong network isolation.

## Customer onboarding workflow

1. Security questionnaire.
2. Data classification confirmation.
3. Tenant provisioning.
4. Identity federation configuration.
5. Evidence source registration.
6. Guardrail and policy selection.
7. Pilot package generation.
8. Production authorization.
