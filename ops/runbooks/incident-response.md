# Incident Response Runbook

## Severity levels

| Severity | Description | Response target |
|---|---|---|
| SEV1 | Customer data exposure, active compromise, full outage | Immediate |
| SEV2 | Major degraded service or security control failure | 30 minutes |
| SEV3 | Partial degradation or isolated workflow failure | Same business day |
| SEV4 | Informational or non-urgent issue | Backlog |

## Steps

1. Declare incident and severity.
2. Assign incident commander.
3. Preserve logs and evidence.
4. Contain blast radius.
5. Communicate status.
6. Remediate.
7. Validate recovery.
8. Write post-incident review.
9. Create prevention actions.

## Evidence to preserve

- CloudTrail events.
- CloudWatch logs.
- WAF sampled requests.
- Cognito auth events where available.
- Bedrock request metadata.
- S3 object versions.
- Deployment history.
