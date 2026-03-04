import Container from "@/components/Container";
import Section from "@/components/Section";
import PillarCard from "@/components/PillarCard";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-gold uppercase">
                Enterprise Cybersecurity and AI Risk
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                AI Security Assessment for Regulated and High-Assurance Teams
              </h1>

              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
                Convert AI risk uncertainty into a board-ready roadmap with control mapping,
                threat modeling, and prioritized remediation actions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <TrackedCtaLink
                  href="/contact"
                  eventName="cta_click"
                  payload={{ placement: "hero", cta: "request-assessment" }}
                  className="rounded-full bg-gold text-ink px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Request AI Security Assessment
                </TrackedCtaLink>

                <TrackedCtaLink
                  href="/ai-security-assessment"
                  eventName="cta_click"
                  payload={{ placement: "hero", cta: "view-assessment" }}
                  className="rounded-full border border-line bg-slate2/40 px-7 py-3 text-sm hover:bg-slate2/60 transition"
                >
                  View Assessment Scope
                </TrackedCtaLink>
              </div>

              <div className="mt-12 flex flex-wrap gap-3 text-xs text-muted">
                <span className="rounded-full border border-line px-3 py-1">
                  NIST AI RMF Alignment
                </span>
                <span className="rounded-full border border-line px-3 py-1">
                  CISA Zero Trust 2.0
                </span>
                <span className="rounded-full border border-line px-3 py-1">
                  MITRE ATT&CK Mapping
                </span>
                <span className="rounded-full border border-line px-3 py-1">
                  OWASP AI Security
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Capabilities"
        title="Services built to create immediate risk reduction and measurable governance outcomes"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <PillarCard
            title="AI Security Assessment"
            desc="Primary engagement for 90-day risk prioritization and governance execution."
            href="/ai-security-assessment"
            bullets={[
              "AI risk and maturity baseline",
              "Threat modeling and abuse case design",
              "Control mapping and evidence strategy",
              "Executive action plan and briefing",
            ]}
          />

          <PillarCard
            title="Red Team Sprint"
            desc="Adversary emulation focused on AI and identity-heavy attack paths."
            href="/red-team"
            bullets={[
              "Prompt injection and tool abuse tests",
              "Privilege escalation path discovery",
              "Purple-team validation exercises",
              "Remediation priority matrix",
            ]}
          />

          <PillarCard
            title="Zero Trust Architecture Workshop"
            desc="Identity-first architecture planning for cloud and hybrid environments."
            href="/architecture"
            bullets={[
              "Identity and segmentation architecture",
              "Least privilege enforcement model",
              "Adaptive access design",
              "Implementation roadmap",
            ]}
          />

          <PillarCard
            title="Compliance and Risk Engineering"
            desc="Translate architecture into audit-ready controls and reporting."
            href="/compliance"
            bullets={[
              "Control harmonization across frameworks",
              "Evidence collection model",
              "Risk register modernization",
              "Board-ready reporting package",
            ]}
          />
        </div>
      </Section>

      <section className="py-20 border-t border-line">
        <Container>
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.22em] text-gold uppercase">
              Platform Proof Layer
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Applied capability through ScriptKiddie.ai, Handshake, and Clinch technology
            </h2>

            <p className="mt-6 text-muted text-base leading-relaxed">
              Advisory services remain the primary engagement path. Our platforms and IP
              demonstrate execution depth and provide pilot pathways for clients who need
              continuous security and identity capabilities.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm text-muted">
              <div className="rounded-xl2 border border-line bg-slate2/30 p-5">
                <div className="font-semibold text-sand">scriptkiddie.ai</div>
                <p className="mt-2">Cybersecurity and AI platform capabilities for offensive and defensive workflows.</p>
              </div>
              <div className="rounded-xl2 border border-line bg-slate2/30 p-5">
                <div className="font-semibold text-sand">Handshake</div>
                <p className="mt-2">Zero Trust, identity-verified peer-to-peer marketplace mobile experience.</p>
              </div>
              <div className="rounded-xl2 border border-line bg-slate2/30 p-5">
                <div className="font-semibold text-sand">Clinch Technology</div>
                <p className="mt-2">Identity assurance and trust controls designed for resilient transactions and access.</p>
              </div>
            </div>

            <div className="mt-8">
              <TrackedCtaLink
                href="/platforms"
                eventName="cta_click"
                payload={{ placement: "platform-layer", cta: "view-platforms" }}
                className="rounded-full border border-line bg-slate2/40 px-7 py-3 text-sm hover:bg-slate2/60 transition"
              >
                Explore Platforms and Technology
              </TrackedCtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-xl2 border border-line bg-slate2/40 p-12 shadow-soft">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Start with an assessment. Then prioritize fast, defensible wins.
              </h3>

              <p className="mt-4 text-muted text-sm leading-relaxed">
                No public pricing. Every engagement is tailored to your environment,
                regulatory obligations, and operational maturity.
              </p>

              <div className="mt-8">
                <TrackedCtaLink
                  href="/contact"
                  eventName="cta_click"
                  payload={{ placement: "bottom-cta", cta: "book-discovery" }}
                  className="rounded-full bg-gold text-ink px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Book Discovery Call
                </TrackedCtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
