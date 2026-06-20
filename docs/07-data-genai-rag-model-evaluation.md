# Data, GenAI, RAG, and Model Evaluation

## Data foundation

The product's trust promise depends on evidence quality. GenAI should explain evidence, not invent evidence.

## MVP data flow

1. Customer or demo event enters API Gateway.
2. Lambda validates schema and writes raw event to S3.
3. Lambda writes normalized metadata to DynamoDB.
4. EventBridge publishes `EvidenceReceived`.
5. Step Functions orchestrates scoring, RAG retrieval, Bedrock explanation, and package generation.
6. Human custodian approves the recommendation.
7. Final evidence package is written to S3 with digest metadata.

## RAG approach

Start with Bedrock Knowledge Bases for speed. Store founder-approved policy docs, control definitions, evaluation criteria, and customer-safe reference docs. Require citations in every explanation.

## Evaluation approach

Use benchmark packs that test:

- Hallucination resistance.
- Prompt injection handling.
- RAG grounding.
- Policy classification accuracy.
- Evidence citation coverage.
- Latency and cost per decision.
- Safety filters and refusal behavior.

## Model routing

| Workload | Model tier |
|---|---|
| Simple labels and classification | Lower-cost fast model. |
| Evidence summary | Mid-tier model with guardrails and citations. |
| Executive audit narrative | Higher-quality reasoning model with stricter review. |
| Policy recommendation | Deterministic rules first, GenAI explanation second. |

## Production rules

- Store prompt templates in version control.
- Record model ID, guardrail ID, prompt template version, source document IDs, and response metadata.
- Never let GenAI directly enforce runtime actions.
- Keep human approval in the loop until enforcement is separately authorized.
- Red-team prompts before customer-facing release.
