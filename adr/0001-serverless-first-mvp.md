# ADR 0001: Serverless-First MVP

## Status

Accepted for MVP.

## Context

The founder needs speed, low idle cost, and low operational burden. The team should spend time proving customer value, not managing clusters.

## Decision

Use S3/CloudFront or Amplify for frontend, API Gateway and Lambda for API, DynamoDB for metadata, S3 for evidence, EventBridge/SQS/Step Functions for async workflows.

## Consequences

Positive:

- Low fixed cost.
- Fast deployment.
- Automatic scaling for early workloads.
- Strong managed-service posture.

Negative:

- Some limits around long-running processing.
- Potential migration to containers for heavier workloads.
- Need careful observability to debug event-driven flows.
