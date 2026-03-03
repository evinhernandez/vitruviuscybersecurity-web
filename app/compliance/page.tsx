import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function Compliance() {
  return (
    <>
      <Section eyebrow="Risk and Compliance" title="Compliance and Risk Engineering">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Convert security architecture and AI control requirements into audit-ready evidence,
          cross-framework mapping, and leadership reporting.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Focus areas</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Control harmonization across required frameworks</li>
                <li>• Evidence strategy and ownership assignment</li>
                <li>• Risk register modernization</li>
                <li>• Program governance cadence design</li>
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Deliverables</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Control mapping matrix and rationale</li>
                <li>• Audit evidence collection plan</li>
                <li>• Board-ready risk reporting format</li>
                <li>• 90-day remediation roadmap</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <TrackedCtaLink
              href="/contact"
              eventName="cta_click"
              payload={{ placement: "compliance", cta: "book-advisory" }}
              className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Book Compliance Advisory Session
            </TrackedCtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
