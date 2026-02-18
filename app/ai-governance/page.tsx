import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";

export default function AIGovernance() {
  return (
    <>
      <Section eyebrow="AI Security" title="AI Governance & Security Programs">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          We help enterprises adopt AI safely with governance models, control design, and validation
          testing that stands up to regulators and real-world adversaries.
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["AI Risk & Maturity Assessment", "Inventory, threat model, control gaps, maturity scoring, and a prioritized roadmap."],
            ["LLM & Agent Red Teaming", "Prompt injection, data exfiltration, tool abuse, agent escalation, and policy bypass testing."],
            ["Guardrails & Policy Architecture", "Standards, secure patterns, approval workflows, logging/monitoring, and enforcement."],
            ["Non-Human Identity Governance", "API keys, service accounts, agent identities, lifecycle controls, and least privilege."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <div className="text-base font-semibold">{t}</div>
              <div className="mt-2 text-sm text-muted">{d}</div>
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
              <li>• Threat model + abuse cases (PASTA/STRIDE-aligned)</li>
              <li>• Risk register + prioritized remediation plan</li>
              <li>• Control mapping + evidence strategy for audits</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Schedule an assessment
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
