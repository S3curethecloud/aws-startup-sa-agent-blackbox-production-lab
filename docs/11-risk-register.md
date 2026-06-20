# Risk Register

| Risk | Impact | Probability | Mitigation | Owner |
|---|---:|---:|---|---|
| Founder overclaims production enforcement | High | Medium | Use approved messaging and demo disclaimers. | Founder + SA |
| GenAI hallucination in audit explanation | High | Medium | Require RAG citations, grounding checks, human approval. | AI owner |
| Unexpected Bedrock/token cost | Medium | Medium | Token budgets, model routing, alerts, caching. | Engineering |
| Weak tenant isolation | High | Medium | Partition model, IAM boundaries, tests before production. | Security |
| Missing logs during incident | High | Low | Structured logs, CloudTrail, runbooks. | Platform |
| Customer data in logs | High | Medium | Data classification, redaction, log review. | Security |
| Premature EKS complexity | Medium | Medium | Use Lambda/Fargate until Kubernetes is necessary. | Architecture |
| Vendor/security questionnaire delays | Medium | High | Prepare compliance evidence package early. | GTM + Security |
