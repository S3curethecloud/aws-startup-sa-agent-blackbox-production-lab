# Multi-Account Strategy

## MVP

One AWS account can be acceptable for a private prototype if environments are isolated by naming, tags, IAM boundaries, and separate data stores. This is not enough for enterprise production.

## Production

Use AWS Organizations with separate accounts:

- Management.
- Security tooling.
- Log archive.
- Shared services.
- Dev.
- Staging.
- Production.
- Optional customer-isolated accounts for regulated enterprise customers.

## Controls

- SCPs for region restrictions and disallowed public access patterns.
- Centralized CloudTrail.
- Centralized security findings.
- IAM Identity Center for workforce access.
- Break-glass access process.
- Separate KMS keys per environment and, where required, per tenant.
