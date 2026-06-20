# Repository Tree

```text
aws-startup-sa-agent-blackbox-production-lab/
|-- README.md
|-- REPO_TREE.md
|-- .gitignore
|-- .github/
|   `-- workflows/
|       `-- validate.yml
|-- assets/
|   `-- securethecloud_phase2_roadmap.png
|-- adr/
|   |-- 0001-serverless-first-mvp.md
|   |-- 0002-bedrock-for-genai-control-plane.md
|   |-- 0003-cognito-for-founder-speed-and-enterprise-path.md
|   |-- 0004-fargate-before-eks.md
|   `-- 0005-evidence-store-s3-dynamodb.md
|-- budget/
|   |-- budget-model.csv
|   `-- cost-guardrails.md
|-- diagrams/
|   |-- architecture.mmd
|   `-- phase-journey.mmd
|-- docs/
|   |-- 00-founder-consultation.md
|   |-- 01-platform-vision-from-roadmap.md
|   |-- 02-aws-service-selection.md
|   |-- 03-mvp-to-production-roadmap.md
|   |-- 04-cost-optimization.md
|   |-- 05-security-compliance.md
|   |-- 06-operational-readiness.md
|   |-- 07-data-genai-rag-model-evaluation.md
|   |-- 08-enterprise-production-readiness.md
|   |-- 09-founder-meeting-agenda.md
|   |-- 10-decision-log.md
|   |-- 11-risk-register.md
|   |-- 12-demo-script.md
|   |-- 13-runbook.md
|   `-- 14-aws-startup-sa-operating-model.md
|-- enterprise/
|   |-- multi-account-strategy.md
|   |-- tenant-isolation-model.md
|   `-- compliance-evidence-package.md
|-- infra/
|   `-- cdk/
|       |-- README.md
|       |-- package.json
|       |-- tsconfig.json
|       |-- cdk.json
|       |-- bin/
|       |   `-- app.ts
|       `-- lib/
|           |-- mvp-stack.ts
|           `-- enterprise-foundation-stack.ts
|-- interview/
|   |-- virtual-loop.md
|   |-- star-answer-bank.md
|   `-- bar-raiser-debrief.md
|-- labs/
|   |-- phase-00-consultation/README.md
|   |-- phase-01-mvp-serverless/README.md
|   |-- phase-02-genai-data-foundation/README.md
|   |-- phase-03-production-hardening/README.md
|   `-- phase-04-enterprise-scale/README.md
|-- ops/
|   |-- runbooks/
|   |   |-- incident-response.md
|   |   `-- cost-anomaly-response.md
|   `-- slo-sla.md
|-- scripts/
|   |-- create_github_repo.sh
|   |-- local_test.sh
|   `-- cdk_synth.sh
|-- security/
|   |-- security-baseline.md
|   |-- threat-model.md
|   `-- iam-boundary-notes.md
|-- services/
|   |-- api/
|   |   |-- README.md
|   |   |-- handler.py
|   |   |-- requirements.txt
|   |   `-- tests/test_handler.py
|   |-- bedrock-eval/
|   |   |-- README.md
|   |   `-- evaluate_prompt.py
|   `-- agent-identity-registry/
|       |-- README.md
|       `-- registry_schema.json
`-- templates/
    |-- founder-intake-form.md
    |-- prfaq.md
    |-- well-architected-review.md
    `-- aws-account-baseline-checklist.md
```
