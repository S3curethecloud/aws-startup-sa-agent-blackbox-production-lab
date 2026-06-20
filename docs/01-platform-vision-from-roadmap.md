# Platform Vision From Roadmap

## Interpreted product vision

The roadmap describes an enterprise trust platform for active adversarial immunization and provenance assurance. It combines governance, evidence, risk intelligence, identity context, event flow, policy review, and read-only AI explanation surfaces.

## Core product surfaces

| Roadmap surface | AWS implementation direction |
|---|---|
| Shared trust fabric | EventBridge event bus, S3 evidence lake, DynamoDB metadata, KMS, IAM boundaries. |
| Evaluation and assurance surface | Bedrock model evaluation workflow, Step Functions, S3 result packages, CloudWatch metrics. |
| Streaming evidence adapter | API Gateway ingestion endpoint, Lambda normalizer, EventBridge, SQS buffering. |
| Detection fabric | Lambda rules, future ECS services for heavier detectors, OpenSearch for searchable evidence. |
| Runtime airbag | Advisory-only phase first; enforcement phase gated by explicit customer approval. |
| Agent identity registry | Cognito for users; DynamoDB registry for agents; IAM roles and signed claims later. |
| Provenance assurance | S3 object versioning, KMS, digest manifests, CloudTrail, DynamoDB immutable metadata pattern. |
| AI chaos and policy triage | Bedrock plus deterministic policy checks, benchmark packs, and human approval workflow. |
| Sentinel adapter | Later inline control point; start as read-only evaluator before enforcement. |
| Trust Intelligence Copilot | Bedrock RAG with Knowledge Bases, Guardrails, strict citations, and no autonomous enforcement. |

## Non-negotiable product rule

Do not present the MVP as a production enforcement system until the enforcement plane, authorization model, tenant isolation, rollback, incident response, and customer legal/compliance reviews are complete.

## MVP wedge

The fastest credible MVP is **evidence-first governance for AI agents and cloud control surfaces**:

1. Ingest simulated agent events and evidence packages.
2. Normalize and store evidence.
3. Score risk using deterministic policy checks.
4. Run GenAI-assisted explanation through guardrails.
5. Produce an audit-ready package with source citations and immutable metadata.
6. Let a human custodian approve or reject recommendations.
