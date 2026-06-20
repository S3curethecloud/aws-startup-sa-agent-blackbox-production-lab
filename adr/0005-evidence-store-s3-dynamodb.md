# ADR 0005: Evidence Store with S3 and DynamoDB

## Status

Accepted for MVP.

## Context

The product needs immutable-feeling evidence packages, searchable metadata, and audit trails.

## Decision

Store evidence objects, manifests, and generated packages in S3 with encryption and versioning. Store evidence metadata, status, tenant ID, workflow state, and indexes in DynamoDB.

## Consequences

Positive:

- Durable evidence storage.
- Fast lookup by event, tenant, and package ID.
- Simple cost model.

Negative:

- Search, analytics, and legal hold requirements may need OpenSearch, Athena, S3 Object Lock, or Lake Formation later.
