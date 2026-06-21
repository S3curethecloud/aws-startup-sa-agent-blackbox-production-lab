# AWS Startup SA Lab: Agent Blackbox From Founder Consultation to Production-Ready AWS Architecture

**Repository:** `S3curethecloud/aws-startup-sa-agent-blackbox-production-lab`

> Independent educational lab. Not affiliated with or endorsed by Amazon Web Services.

This repository is a hands-on AWS Startup Solutions Architect-style lab built around the SecureTheCloud / Agent Blackbox roadmap.

The scenario: a founder has an MVP and needs help evolving it into a secure, scalable, cost-aware SaaS and GenAI governance architecture.

The lab follows the motion of a Startup Solutions Architect:

1. Understand the founder’s vision, users, constraints, and success metrics.
2. Work backwards from customer outcomes.
3. Right-size the initial MVP architecture.
4. Choose pragmatic AWS services.
5. Add GenAI and RAG patterns responsibly.
6. Establish cost guardrails and security baselines early.
7. Prepare for production readiness without overbuilding.
8. Explain architectural decisions using STAR-style interview storytelling.

## Founder problem statement

The founder wants to deliver a SaaS and GenAI governance platform that can grow from MVP to production-ready architecture.

The platform needs to support:

* Runtime governance and enforcement surfaces.
* Evidence, audit, and investigation workflows.
* Agent identity, provenance assurance, and risk intelligence.
* AI policy triage and governance support.
* A customer-safe demo path that can evolve toward production readiness without rewriting the architecture.

See the included roadmap image:

![SecureTheCloud Phase 2 Roadmap](assets/securethecloud_phase2_roadmap.png)

## Executive AWS recommendation

Start with a **serverless-first MVP** and move to containerized or Kubernetes-based runtime surfaces only when the product has measurable scale, enterprise isolation requirements, or custom control-plane needs.

The initial recommendation is to optimize for:

* Speed of founder iteration.
* Low operational overhead.
* Secure-by-default design.
* Cost visibility.
* Clear upgrade paths as the platform matures.

### MVP architecture

| Capability                 | AWS service choice                                                                                               | Why this fits an early-stage founder                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Static web app             | Amazon S3 + Amazon CloudFront or AWS Amplify Hosting                                                             | Low ops, global delivery, easy CI/CD.                                    |
| Identity                   | Amazon Cognito                                                                                                   | Managed user directory, auth server, OIDC/OAuth tokens, federation path. |
| API                        | Amazon API Gateway HTTP API + AWS Lambda                                                                         | Pay per use, quick iteration, scales automatically.                      |
| Evidence store             | Amazon S3 + AWS KMS                                                                                              | Durable, encrypted evidence package storage.                             |
| Metadata and audit records | Amazon DynamoDB on-demand                                                                                        | No capacity planning during MVP.                                         |
| Async workflows            | Amazon EventBridge + Amazon SQS + AWS Step Functions                                                             | Decoupled event flow for scans, evaluations, and evidence packages.      |
| GenAI                      | Amazon Bedrock                                                                                                   | Managed foundation model access with enterprise controls.                |
| RAG                        | Amazon Bedrock Knowledge Bases initially; self-managed OpenSearch Serverless or Aurora PostgreSQL/pgvector later | Fast RAG launch now, optional deeper control later.                      |
| Safety                     | Amazon Bedrock Guardrails + app-level policy checks                                                              | Helps manage harmful content, PII, grounding, and policy boundaries.     |
| Observability              | Amazon CloudWatch + AWS X-Ray + structured logs                                                                  | Minimum production-readiness telemetry.                                  |
| Security                   | AWS WAF, IAM least privilege, KMS, Secrets Manager, CloudTrail, GuardDuty, Security Hub                          | Strong security foundation without overbuilding the MVP.                 |
| Cost control               | AWS Budgets, Cost Explorer, tags, per-tenant cost attribution                                                    | Prevents founder surprise bills.                                         |

### Future enterprise architecture

Move long-running policy engines, tenant-isolated workloads, and integration adapters to **Amazon ECS on AWS Fargate** first.

Only introduce **Amazon EKS** when the product needs Kubernetes admission controls, Kubernetes-native customer integrations, or custom runtime security surfaces that justify the operational cost.

## Lab phases

1. **Consultation and intake**: founder interview, assumptions, non-negotiables, success metrics.
2. **MVP path**: deploy the smallest customer-demoable secure platform.
3. **GenAI and evidence foundation**: RAG, guardrails, model evaluation, evidence packaging.
4. **Production hardening**: security, reliability, observability, incident response, cost controls.
5. **Enterprise scale**: multi-account strategy, tenant isolation, compliance, audit package, private connectivity.
6. **Amazon virtual loop**: STAR stories, Leadership Principle mapping, and bar-raiser debrief.

## Repository map

```text
.
|-- README.md
|-- REPO_TREE.md
|-- assets/
|-- adr/
|-- budget/
|-- diagrams/
|-- docs/
|-- enterprise/
|-- infra/cdk/
|-- interview/
|-- labs/
|-- ops/
|-- scripts/
|-- security/
|-- services/
|-- templates/
`-- .github/workflows/
```

## Quick start

```bash
git clone https://github.com/S3curethecloud/aws-startup-sa-agent-blackbox-production-lab.git
cd aws-startup-sa-agent-blackbox-production-lab

python3 -m venv .venv
source .venv/bin/activate
pip install -r services/api/requirements.txt
pytest services/api/tests
```

To inspect the CDK lab skeleton:

```bash
cd infra/cdk
npm install
npm run build
npx cdk synth
```

## Repository

Live repository:

```text
https://github.com/S3curethecloud/aws-startup-sa-agent-blackbox-production-lab
```

## Interview positioning

This lab demonstrates the Startup Solutions Architect motion:

**Customer problem → architecture tradeoffs → AWS service mapping → cost guardrails → security baseline → production-readiness roadmap → business impact.**

It can support STAR stories around:

* Invent and Simplify.
* Customer Obsession.
* Bias for Action.
* Dive Deep.
* Earn Trust.
* Frugality.
* Learn and Be Curious.
* Deliver Results.

The main lesson: successful startup architecture is not about choosing the most complex service first. It is about helping founders make the right technical decisions for their current stage while preserving a clear path to scale.

## Amazon Leadership Principle mapping

| Leadership Principle | How this lab demonstrates it                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Customer Obsession   | Starts with founder constraints, user needs, and business outcomes.                                              |
| Invent and Simplify  | Converts a complex production-readiness journey into a clear architecture path.                                  |
| Frugality            | Uses serverless-first, cost-aware design before introducing heavier platforms.                                   |
| Earn Trust           | Includes security baselines, evidence capture, observability, and audit readiness.                               |
| Dive Deep            | Maps specific AWS services to technical and business requirements.                                               |
| Bias for Action      | Builds a practical lab instead of staying at theory level.                                                       |
| Learn and Be Curious | Extends cloud architecture into GenAI, RAG, agents, and AI governance.                                           |
| Deliver Results      | Produces a complete consultation-to-readiness lab with docs, code scaffold, runbooks, and interview preparation. |

## Safety boundaries

This lab is an architecture and implementation scaffold. It does not authorize production traffic, create live AWS resources by itself, or claim compliance certification.

Production use would require:

* AWS account review.
* Security review.
* Threat modeling.
* Budget guardrails.
* Least-privilege IAM design.
* Data classification.
* Workload-specific AWS Well-Architected review.
* Compliance review based on the customer’s regulatory requirements.

This repository is intended for education, architecture practice, portfolio demonstration, and interview preparation.
