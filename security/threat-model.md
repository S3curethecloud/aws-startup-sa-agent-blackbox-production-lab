# Threat Model

## Assets

- Customer evidence packages.
- Prompt and model response logs.
- Agent identity records.
- Audit manifests.
- Tenant metadata.
- Auth tokens.
- Policy definitions.

## Threats

| Threat | Mitigation |
|---|---|
| Prompt injection | Guardrails, input segmentation, RAG source isolation, deterministic policy checks. |
| Hallucinated audit claims | Required citations, grounding checks, human approval. |
| Tenant data leakage | Server-side tenant validation, partitioned data keys, isolation tests. |
| Evidence tampering | S3 versioning, digest manifests, CloudTrail, restricted write roles. |
| Credential theft | MFA, least privilege, Secrets Manager, short-lived credentials. |
| Cost exhaustion | Budgets, rate limits, token caps, concurrency limits. |
| Unsafe enforcement | Enforcement disabled until rollback, approval, and customer authorization exist. |
