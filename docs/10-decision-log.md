# Decision Log

| Date | Decision | Owner | Status | Rationale |
|---|---|---|---|---|
| Day 0 | Use serverless-first MVP | Startup SA | Proposed | Fastest path with lowest idle cost. |
| Day 0 | Use Cognito for auth | Startup SA | Proposed | Avoid custom auth and preserve federation path. |
| Day 0 | Use Bedrock for GenAI | Startup SA | Proposed | Managed model access and safety controls. |
| Day 0 | Keep enforcement out of MVP | Founder + SA | Proposed | Reduces risk until authorization and rollback are mature. |
| Day 0 | Use S3 + DynamoDB for evidence | Engineering | Proposed | Durable object evidence plus fast metadata lookup. |
| Day 0 | Delay EKS | Startup SA | Proposed | Kubernetes complexity not justified until customer requirement exists. |
| Day 0 | Add budget alarms before demo | Founder | Required | Protect runway. |
