# IAM Boundary Notes

## MVP policy principles

- Lambda can write only to the evidence bucket and required tables.
- Bedrock invoke permissions should be narrowed to approved model ARNs when possible.
- No wildcard admin policies for application roles.
- Deployment role separated from runtime role.
- Human admin role requires MFA.
- Customer support role is read-only by default.

## Review checklist

- Does the role need `*` resource access?
- Can the policy be scoped by ARN, tag, or condition?
- Is write access separate from read access?
- Is cross-account access needed?
- Is access logged?
- Is break-glass access documented?
