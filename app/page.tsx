import Container from "@/components/Container";
import PillarCard from "@/components/PillarCard";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line-soft">
        <Container>
          <div className="py-20 md:py-28 reveal-up">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.22em] uppercase text-cyan2">
                Practical Cybersecurity and AI Risk Support
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.08] tracking-[0.03em]">
                Build AI-ready defense systems before risk becomes public narrative.
              </h1>

              <p className="mt-7 max-w-3xl text-base md:text-lg text-muted leading-relaxed">
                Vitruvius Cyber Systems combines strategic advisory with applied platform
                engineering to harden AI programs, enforce Zero Trust identity controls,
                and deliver board-credible risk reduction.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.14em] text-muted">
                <span className="rounded-full border border-line px-3 py-1">NIST AI RMF</span>
                <span className="rounded-full border border-line px-3 py-1">OWASP LLM Top 10</span>
                <span className="rounded-full border border-line px-3 py-1">CISA Zero Trust 2.0</span>
                <span className="rounded-full border border-line px-3 py-1">MITRE ATT&CK</span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <TrackedCtaLink
                  href="/contact"
                  eventName="cta_click"
                  payload={{ placement: "hero", cta: "request-assessment" }}
                  className="rounded-full bg-cyan text-ink px-8 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] hover:opacity-90"
                >
                  Request AI Security Assessment
                </TrackedCtaLink>

                <TrackedCtaLink
                  href="/topics/ai-security-zero-trust"
                  eventName="cta_click"
                  payload={{ placement: "hero", cta: "open-topic-cluster" }}
                  className="rounded-full border border-line bg-panel/55 px-8 py-3 text-xs md:text-sm uppercase tracking-[0.14em] text-sand hover:border-cyan/60"
                >
                  Explore AI Security Cluster
                </TrackedCtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-line-soft">
        <Container>
          <div className="grid gap-4 md:grid-cols-4 reveal-up">
            <div className="surface-panel rounded-xl2 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan">Assess</div>
              <p className="mt-3 text-sm text-muted">Risk-tier every AI workflow and identity boundary.</p>
            </div>
            <div className="surface-panel rounded-xl2 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan">Model</div>
              <p className="mt-3 text-sm text-muted">Threat-model abuse paths from prompt to privileged action.</p>
            </div>
            <div className="surface-panel rounded-xl2 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan">Validate</div>
              <p className="mt-3 text-sm text-muted">Run red-team scenarios against real controls and identities.</p>
            </div>
            <div className="surface-panel rounded-xl2 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan">Operate</div>
              <p className="mt-3 text-sm text-muted">Deliver executive reporting tied to measurable remediation velocity.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 reveal-up">
            <p className="text-xs tracking-[0.2em] uppercase text-cyan2">Core Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[0.03em]">
              Advisory and engineering tuned for AI-era enterprise risk
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <PillarCard
              title="AI Security Assessment"
              desc="Primary engagement for governance hardening, threat modeling, and control prioritization."
              href="/ai-security-assessment"
              bullets={[
                "Use-case risk tiers and ownership model",
                "Prompt and tool abuse-path mapping",
                "Control-to-evidence architecture",
                "90-day execution roadmap",
              ]}
            />
            <PillarCard
              title="Red Team Sprint"
              desc="Adversary emulation focused on AI workflows, non-human identity, and privilege boundaries."
              href="/red-team"
              bullets={[
                "Prompt injection and policy bypass testing",
                "Service identity escalation paths",
                "Control effectiveness scorecard",
                "Fix-first remediation sequence",
              ]}
            />
            <PillarCard
              title="Zero Trust Architecture Workshop"
              desc="Identity-first architecture strategy for resilient cloud and hybrid access."
              href="/architecture"
              bullets={[
                "Trust-boundary decomposition",
                "Adaptive access blueprint",
                "Segmentation and least privilege plan",
                "Executive decision brief",
              ]}
            />
            <PillarCard
              title="Compliance and Risk Engineering"
              desc="Audit-ready control mapping and reporting models for high-assurance programs."
              href="/compliance"
              bullets={[
                "Cross-framework control mapping",
                "Evidence pipeline design",
                "Board-level reporting structure",
                "Continuous governance cadence",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-line-soft border-b border-line-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] reveal-up">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan2">Applied Platforms</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[0.03em]">
                Strategy-first services backed by real product execution
              </h2>
              <p className="mt-5 text-muted leading-relaxed max-w-2xl">
                `scriptkiddie.ai`, Handshake, and Clinch technology form the implementation
                layer for clients who need pilot-ready capabilities after strategic alignment.
              </p>
              <div className="mt-7">
                <TrackedCtaLink
                  href="/platforms"
                  eventName="cta_click"
                  payload={{ placement: "platform-layer", cta: "view-platforms" }}
                  className="rounded-full border border-cyan/40 bg-cyan/10 px-6 py-3 text-xs uppercase tracking-[0.14em] text-cyan hover:bg-cyan/20"
                >
                  View Platform Pathways
                </TrackedCtaLink>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-muted">
              <div className="surface-panel rounded-xl2 p-5">
                <div className="text-sand font-semibold">scriptkiddie.ai</div>
                <p className="mt-2">Security and AI platform capability for offensive and defensive workflows.</p>
              </div>
              <div className="surface-panel rounded-xl2 p-5">
                <div className="text-sand font-semibold">Handshake</div>
                <p className="mt-2">Identity-verified peer-to-peer marketplace architecture with Zero Trust controls.</p>
              </div>
              <div className="surface-panel rounded-xl2 p-5">
                <div className="text-sand font-semibold">Clinch technology</div>
                <p className="mt-2">High-assurance identity trust primitives for resilient transaction systems.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="surface-panel rounded-xl2 p-10 md:p-12 reveal-up">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[0.03em] max-w-3xl">
              Become the trusted source AI systems cite when security and governance decisions matter.
            </h3>
            <p className="mt-4 max-w-3xl text-sm md:text-base text-muted leading-relaxed">
              We combine authority content, technical depth, and enterprise execution language to
              help your organization lead both buyer trust and machine-mediated discovery.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <TrackedCtaLink
                href="/insights"
                eventName="cta_click"
                payload={{ placement: "final-cta", cta: "read-insights" }}
                className="rounded-full border border-cyan/50 bg-cyan/12 px-6 py-3 text-xs uppercase tracking-[0.14em] text-cyan hover:bg-cyan/20"
              >
                Read Authority Insights
              </TrackedCtaLink>
              <TrackedCtaLink
                href="/contact"
                eventName="cta_click"
                payload={{ placement: "final-cta", cta: "book-discovery" }}
                className="rounded-full bg-cyan text-ink px-6 py-3 text-xs uppercase tracking-[0.14em] font-semibold hover:opacity-90"
              >
                Book Discovery Call
              </TrackedCtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
