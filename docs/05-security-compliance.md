# Security and Compliance Plan

## Security design principles

1. Default to read-only evidence collection during MVP.
2. Make enforcement an explicit, separately approved product phase.
3. Encrypt evidence and metadata at rest with KMS.
4. Do not log prompts, secrets, credentials, or raw customer payloads unless explicitly classified and approved.
5. Keep tenant data partitioned by design, not by convention.
6. Use least-privilege IAM and short-lived credentials.
7. Use human approval for policy changes and enforcement actions.
8. Treat GenAI output as advisory unless backed by deterministic rules and cited evidence.

## AWS controls

| Domain | Control |
|---|---|
| Identity | Cognito, MFA, enterprise federation path, IAM least privilege. |
| Network | Private subnets for backends, WAF on public endpoints, VPC endpoints for private AWS service access. |
| Data | KMS encryption, S3 bucket policies, object versioning, DynamoDB PITR. |
| Audit | CloudTrail, CloudWatch logs, S3 access logs where appropriate. |
| Detection | GuardDuty, Security Hub, Config, WAF metrics. |
| Secrets | Secrets Manager, no secrets in environment variables unless encrypted and scoped. |
| AI safety | Bedrock Guardrails, prompt templates, citations, content filters, PII handling. |
| Compliance evidence | Release notes, architecture decisions, risk register, audit package exports. |

## Compliance narrative

For enterprise buyers, the MVP should be described as **SOC 2 readiness oriented**, not SOC 2 certified. The production roadmap should show how access control, change management, incident response, vendor risk, logging, backup, and evidence retention will mature.

## Data classification

| Class | Examples | Storage rule |
|---|---|---|
| Public | Marketing copy, sample docs | Public repo allowed. |
| Internal | Architecture plans, roadmaps | Private repo, least access. |
| Confidential | Customer evidence, audit logs, prompts | Encrypted storage, no public logs, restricted IAM. |
| Restricted | Secrets, keys, tokens, PHI, regulated data | Dedicated controls, legal review, strict access, avoid in MVP unless required. |

## Production security gates

- Threat model reviewed.
- IAM access analyzer findings resolved or accepted.
- WAF rules deployed in count mode before block mode.
- CloudTrail and GuardDuty enabled.
- Incident runbook exercised.
- Secrets rotation plan complete.
- Backup and restore tested.
- Tenant isolation test complete.
- Customer-facing claims reviewed.
