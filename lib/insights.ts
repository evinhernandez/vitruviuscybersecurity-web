export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  cta: string;
  body: string[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "ai-governance-failures-regulated-enterprises",
    title: "Five AI Governance Failure Patterns in Regulated Enterprises",
    excerpt:
      "Where AI programs break under audit pressure and how to correct course before incidents and enforcement actions.",
    category: "AI Governance",
    readTime: "6 min",
    cta: "Map your current gaps with an AI Security Assessment.",
    body: [
      "Most governance breakdowns are operating model failures, not tooling failures.",
      "Start with accountable ownership, an inventory of AI use cases, and explicit approval paths for production deployment.",
      "Tie controls to business risk outcomes so stakeholders understand why each policy exists.",
    ],
  },
  {
    slug: "llm-agent-threat-scenarios",
    title: "Practical LLM and Agent Threat Scenarios You Should Test Now",
    excerpt:
      "A concrete threat model for prompt injection, tool abuse, and privilege escalation in agentic systems.",
    category: "Red Team",
    readTime: "7 min",
    cta: "Validate your controls with a targeted Red Team Sprint.",
    body: [
      "Treat every external prompt and tool call as untrusted input.",
      "Test for cross-context prompt injection, system prompt leakage, and unsafe tool invocation paths.",
      "Logging and response triage are mandatory for detecting abuse patterns early.",
    ],
  },
  {
    slug: "non-human-identity-risk",
    title: "The Non-Human Identity Risk Most Security Programs Underestimate",
    excerpt:
      "Service accounts, API keys, and agent identities now represent one of the largest blast-radius multipliers.",
    category: "Identity",
    readTime: "5 min",
    cta: "Design least-privilege identity architecture for AI-era workloads.",
    body: [
      "Inventory all machine identities and map them to owners.",
      "Enforce rotation, short-lived credentials, and strict scoping by default.",
      "Add privilege review workflows that include AI and automation accounts.",
    ],
  },
  {
    slug: "zero-trust-for-mid-market",
    title: "Zero Trust for Mid-Market Teams: What to Implement First",
    excerpt:
      "A practical sequence for segmentation, identity hardening, and adaptive access without enterprise-scale overhead.",
    category: "Architecture",
    readTime: "6 min",
    cta: "Run a Zero Trust Architecture Workshop with your security and IT leaders.",
    body: [
      "Start with identity posture and application access paths, not network hardware changes.",
      "Prioritize high-value systems and map trust boundaries explicitly.",
      "Measure success through reduced lateral movement paths and faster incident containment.",
    ],
  },
  {
    slug: "board-ready-cyber-risk-reporting",
    title: "How to Produce Board-Ready Cyber Risk Reporting",
    excerpt:
      "Move from technical status updates to risk narratives that executives can fund and act on.",
    category: "Risk",
    readTime: "4 min",
    cta: "Build a reporting model that supports audit and board governance.",
    body: [
      "Translate vulnerabilities and control drift into business impact language.",
      "Use trend lines and remediation velocity, not one-time snapshots.",
      "Map major risks to accountable owners and due dates.",
    ],
  },
  {
    slug: "ai-control-mapping-audit-readiness",
    title: "AI Control Mapping for Audit Readiness",
    excerpt:
      "Link AI controls to existing compliance obligations without creating duplicate policy overhead.",
    category: "Compliance",
    readTime: "6 min",
    cta: "Get an evidence strategy that aligns security architecture and audit expectations.",
    body: [
      "Map controls once and reuse them across frameworks where possible.",
      "Pair each control with clear evidence artifacts and collection owners.",
      "Integrate AI-specific controls into your existing governance cadence.",
    ],
  },
  {
    slug: "service-to-platform-bridge",
    title: "From Services to Platform Revenue: Building the Bridge Intentionally",
    excerpt:
      "How advisory engagements can create repeatable requirements for productized security and AI capabilities.",
    category: "Strategy",
    readTime: "5 min",
    cta: "Use services as high-trust entry points to platform adoption.",
    body: [
      "Capture recurring control and reporting needs from every engagement.",
      "Package repeated implementation patterns into reusable components.",
      "Position platform pilots as risk-reduction accelerators, not replacements for strategy.",
    ],
  },
  {
    slug: "incident-exercises-for-ai-systems",
    title: "Incident Exercises for AI Systems: What to Simulate",
    excerpt:
      "Tabletop and technical exercise patterns that expose gaps in AI-era response playbooks.",
    category: "Resilience",
    readTime: "5 min",
    cta: "Pressure-test your readiness with scenario-driven validation.",
    body: [
      "Simulate model abuse, unsafe output, and data leakage incidents.",
      "Include legal, compliance, security, and operations decision points.",
      "Track response-time and containment metrics to drive improvements.",
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
