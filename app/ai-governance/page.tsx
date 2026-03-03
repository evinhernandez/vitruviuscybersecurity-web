import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function AIGovernance() {
  return (
    <>
      <Section eyebrow="AI Security" title="AI Governance and Security Programs">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Design accountable governance models, control frameworks, and validation workflows
          that support safe AI deployment under regulatory and operational pressure.
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            [
              "AI Risk and Maturity Baseline",
              "Inventory, threat model, control gaps, maturity scoring, and prioritized roadmap.",
            ],
            [
              "LLM and Agent Red Teaming",
              "Prompt injection, data exfiltration, tool abuse, agent escalation, and policy bypass testing.",
            ],
            [
              "Guardrails and Policy Architecture",
              "Standards, secure patterns, approval workflows, logging, and enforcement controls.",
            ],
            [
              "Non-Human Identity Governance",
              "API keys, service accounts, agent identities, lifecycle controls, and least privilege strategy.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <div className="text-base font-semibold">{title}</div>
              <div className="mt-2 text-sm text-muted">{description}</div>
            </div>
          ))}
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="rounded-xl2 border border-line bg-slate2/30 p-8">
            <div className="text-sm font-semibold">Typical deliverables</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Governance blueprint (roles, policies, controls, cadence)</li>
              <li>• Threat model and abuse case library</li>
              <li>• Risk register and prioritized remediation plan</li>
              <li>• Evidence and reporting strategy for leadership and audits</li>
            </ul>

            <div className="mt-6">
              <TrackedCtaLink
                href="/contact"
                eventName="cta_click"
                payload={{ placement: "ai-governance", cta: "schedule-assessment" }}
                className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Schedule Assessment
              </TrackedCtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
