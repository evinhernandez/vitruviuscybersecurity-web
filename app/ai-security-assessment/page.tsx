import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function AISecurityAssessment() {
  return (
    <>
      <Section eyebrow="Primary Offer" title="AI Security Assessment">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          A focused engagement designed to identify your highest-risk AI exposures and produce
          a practical 90-day action plan for security, governance, and compliance stakeholders.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <div className="text-base font-semibold">Assessment outcomes</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• AI use-case inventory with risk tiering</li>
                <li>• Threat model and abuse case map</li>
                <li>• Control and evidence strategy aligned to your frameworks</li>
                <li>• Prioritized remediation backlog with ownership model</li>
              </ul>
            </div>

            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <div className="text-base font-semibold">Typical timeline</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Week 1: Intake, data collection, stakeholder alignment</li>
                <li>• Week 2: Threat and control analysis</li>
                <li>• Week 3: Validation and architecture recommendations</li>
                <li>• Week 4: Executive briefing and implementation roadmap</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl2 border border-line bg-slate2/30 p-8">
            <div className="text-sm font-semibold">Ideal fit</div>
            <p className="mt-2 text-sm text-muted max-w-3xl">
              Mid-market and enterprise teams operating in regulated environments that need
              clear AI risk reduction priorities before scaling deployments.
            </p>

            <div className="mt-6">
              <TrackedCtaLink
                href="/contact"
                eventName="cta_click"
                payload={{ placement: "assessment-page", cta: "request-assessment" }}
                className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Request Assessment
              </TrackedCtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
