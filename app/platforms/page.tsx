import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

const platformCards = [
  {
    title: "scriptkiddie.ai",
    audience: "Security teams and technical leaders",
    summary:
      "Applied cybersecurity and AI platform capabilities that support offensive validation and operational defense workflows.",
  },
  {
    title: "Handshake",
    audience: "Identity-centric marketplace operators",
    summary:
      "A Zero Trust peer-to-peer, identity-verified marketplace mobile app designed for trust-sensitive transactions.",
  },
  {
    title: "Clinch technology",
    audience: "Organizations requiring high-assurance identity trust",
    summary:
      "Core IP focused on identity verification, trust controls, and resilient transaction enablement.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Section eyebrow="Platforms and IP" title="Technology proving real-world execution depth">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          We lead with advisory services, then use platform and IP capabilities to accelerate
          implementation where recurring controls and trust requirements exist.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {platformCards.map((platform) => (
              <div key={platform.title} className="rounded-xl2 border border-line bg-slate2/30 p-6">
                <div className="text-base font-semibold">{platform.title}</div>
                <p className="mt-2 text-sm text-muted">{platform.summary}</p>
                <p className="mt-4 text-xs text-muted uppercase tracking-[0.18em]">{platform.audience}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl2 border border-line bg-slate2/40 p-8 shadow-soft">
            <h3 className="text-xl font-semibold tracking-tight">Engagement model</h3>
            <p className="mt-3 text-sm text-muted max-w-3xl">
              Start with an AI Security Assessment or Architecture Workshop, identify high-value
              implementation opportunities, then evaluate focused platform pilots.
            </p>
            <div className="mt-6">
              <TrackedCtaLink
                href="/contact"
                eventName="cta_click"
                payload={{ placement: "platforms", cta: "book-discovery" }}
                className="inline-flex rounded-full bg-cyan text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Discuss Pilot Opportunities
              </TrackedCtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
