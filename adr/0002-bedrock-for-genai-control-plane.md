# ADR 0002: Amazon Bedrock for GenAI Control Plane

## Status

Accepted for MVP.

## Context

The platform needs AI explanations, RAG, model evaluation, policy triage, and guardrails.

## Decision

Use Amazon Bedrock for foundation model access, Guardrails for safety controls, Knowledge Bases for early RAG, and custom evaluation workflows for Agent Blackbox benchmark packs.

## Consequences

Positive:

- No self-hosted model infrastructure in MVP.
- Access to multiple model families through managed APIs.
- Guardrail and RAG primitives align with platform trust goals.

Negative:

- Model availability and pricing vary by region and provider.
- Strong cost controls and token telemetry are mandatory.
- Model outputs remain advisory until deterministic policy and human approval are complete.
