# Agent Identity Registry

The MVP stores agent identities as evidence metadata first. Runtime authorization and enforcement are not part of the first release.

## Agent record fields

- `tenant_id`
- `agent_id`
- `agent_name`
- `owner`
- `allowed_tools`
- `risk_tier`
- `public_key_ref`
- `created_at`
- `status`

## Production expansion

- Signed agent identity claims.
- Key rotation.
- Agent birth certificates.
- Revocation workflow.
- Cross-zone identity proof.
- Integration with policy engine.
