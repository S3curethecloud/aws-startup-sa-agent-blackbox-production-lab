# ADR 0003: Cognito for Founder Speed and Enterprise Path

## Status

Accepted for MVP.

## Context

The platform needs login, user pools, authorization tokens, and future federation.

## Decision

Use Amazon Cognito User Pools for app authentication and groups/claims for early role mapping. Add enterprise IdP federation when the first enterprise pilot requires it.

## Consequences

Positive:

- Faster auth implementation.
- Avoid custom password handling.
- OAuth/OIDC path for APIs.
- MFA and federation options.

Negative:

- Some complex B2B authorization patterns may require additional app-level policy enforcement.
- Tenant authorization must not rely on frontend claims alone.
