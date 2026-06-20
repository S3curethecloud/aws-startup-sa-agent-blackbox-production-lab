# STAR Answer Bank

## Story 1: Founder consultation under ambiguity

**Situation:** A founder had a large Agent Blackbox roadmap with AI governance, evidence, runtime policy, and enforcement ambitions but needed an MVP production path.

**Task:** As the Startup Solutions Architect, I needed to create a credible AWS architecture that could demo quickly, control cost, and avoid unsafe production claims.

**Action:** I ran a structured founder discovery, separated demo/advisory/enforcement boundaries, chose a serverless-first architecture, added Bedrock for governed GenAI, created a cost guardrail plan, and documented production gates.

**Result:** The founder received a two-week MVP plan, six-week production candidate plan, and enterprise scale roadmap. The architecture preserved speed while reducing security, cost, and compliance risk.

Leadership principles: Customer Obsession, Bias for Action, Earn Trust, Frugality, Deliver Results.

## Story 2: Disagreeing with premature Kubernetes

**Situation:** The roadmap included Kubernetes Sentinel and runtime enforcement, which made EKS tempting for the first release.

**Task:** I had to decide whether Kubernetes should be the foundation.

**Action:** I evaluated operational burden, customer need, team size, and cost. I recommended Lambda first, ECS Fargate second, and EKS only when Kubernetes-native admission or customer cluster integration became a paid requirement.

**Result:** The founder avoided premature platform complexity and focused on evidence workflows that could generate customer feedback quickly.

Leadership principles: Are Right, A Lot; Frugality; Have Backbone; Dive Deep.

## Story 3: GenAI safety and trust

**Situation:** The platform needed AI explanations for audit and governance decisions.

**Task:** I had to prevent hallucinated or unsafe AI output from damaging trust.

**Action:** I required RAG citations, Bedrock Guardrails, prompt versioning, model evaluation packs, human approval, and clear advisory labeling.

**Result:** AI became a trust explanation layer rather than an uncontrolled decision maker.

Leadership principles: Insist on the Highest Standards, Earn Trust, Customer Obsession.

## Story 4: Cost protection for a startup

**Situation:** The founder needed an MVP but had limited runway.

**Task:** Keep cloud costs predictable while enabling growth.

**Action:** I selected serverless and on-demand services, added budgets and forecast alerts, routed models by task complexity, capped tokens, and avoided EKS until necessary.

**Result:** The founder could demo and iterate with low fixed cost and clear scale triggers.

Leadership principles: Frugality, Ownership, Deliver Results.
