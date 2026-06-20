# ADR 0004: Fargate Before EKS

## Status

Accepted as scale path.

## Context

The roadmap includes runtime governance and possible Kubernetes Sentinel surfaces, but the founder does not need Kubernetes operational complexity on day one.

## Decision

Use Lambda for MVP API and event processing. Move heavier APIs and workers to ECS on AWS Fargate before considering EKS. Add EKS only when Kubernetes-native enforcement or customer cluster integration is required.

## Consequences

Positive:

- Lower operational burden than EKS.
- Container portability when Lambda is insufficient.
- Easier path to long-running services.

Negative:

- Kubernetes-specific controls still need a future EKS or external-cluster integration path.
