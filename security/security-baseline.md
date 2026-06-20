# Security Baseline

## MVP required controls

- MFA for administrative users.
- No root user for daily work.
- CloudTrail enabled.
- S3 public access blocked.
- KMS encryption for evidence.
- DynamoDB PITR.
- Least-privilege IAM.
- Secrets Manager for external secrets.
- WAF before public production.
- Budget alarm before demo.
- No raw customer secrets in logs.

## Production required controls

- AWS Organizations multi-account strategy.
- Security Hub and GuardDuty enabled.
- Centralized logging.
- IAM Identity Center for workforce access.
- Break-glass process.
- Formal vulnerability management.
- Pen test plan.
- Incident response game day.
- Backup restore test.
- Tenant isolation test.
