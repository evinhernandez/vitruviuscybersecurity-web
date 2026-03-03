import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function Architecture() {
  return (
    <>
      <Section eyebrow="Architecture" title="Zero Trust Architecture Workshop">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Build an identity-first architecture roadmap that reduces lateral movement risk,
          hardens access decisions, and supports cloud and hybrid operations.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Workshop scope</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Current-state trust boundary mapping</li>
                <li>• Identity and access risk analysis</li>
                <li>• Segmentation and least-privilege design</li>
                <li>• 90-day implementation sequence</li>
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Deliverables</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Target-state architecture blueprint</li>
                <li>• Capability gap and dependency matrix</li>
                <li>• Executive-ready decision memo</li>
                <li>• Prioritized implementation backlog</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <TrackedCtaLink
              href="/contact"
              eventName="cta_click"
              payload={{ placement: "architecture", cta: "book-workshop" }}
              className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Book Architecture Workshop
            </TrackedCtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
