import Container from "@/components/Container";
import Section from "@/components/Section";
import PillarCard from "@/components/PillarCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-gold uppercase">
                AI Governance • Enterprise Security • Architecture
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Secure AI. Governed Systems. Resilient Architecture.
              </h1>

              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
                Vitruvius Cyber delivers strategic AI security, governance frameworks,
                red team validation, and identity-driven enterprise architecture for
                regulated and high-assurance environments.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gold text-ink px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Schedule Strategic Advisory
                </Link>

                <Link
                  href="/ai-governance"
                  className="rounded-full border border-line bg-slate2/40 px-7 py-3 text-sm hover:bg-slate2/60 transition"
                >
                  Explore Capabilities
                </Link>
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

      {/* SERVICES */}
      <Section
        eyebrow="Capabilities"
        title="Advisory and engineering services built for enterprise reality"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <PillarCard
            title="AI Security & Governance"
            desc="Establish safe, compliant, and operationally sustainable AI programs."
            href="/ai-governance"
            bullets={[
              "AI risk & maturity assessments",
              "LLM and agent red teaming",
              "Governance operating models",
              "Non-human identity security",
            ]}
          />

          <PillarCard
            title="Architecture & Zero Trust"
            desc="Identity-centric enterprise architecture designed for adaptive access."
            href="/architecture"
            bullets={[
              "Zero Trust reference design",
              "Segmentation & least privilege",
              "Enterprise browser strategy",
              "Cloud & hybrid security architecture",
            ]}
          />

          <PillarCard
            title="Red Team & Offensive Validation"
            desc="Adversary emulation to validate resilience and control effectiveness."
            href="/red-team"
            bullets={[
              "Attack surface discovery",
              "AI system exploitation testing",
              "Purple team exercises",
              "Control effectiveness validation",
            ]}
          />

          <PillarCard
            title="Compliance & Risk Engineering"
            desc="Translate security architecture into audit-ready governance."
            href="/compliance"
            bullets={[
              "PCI, SOX, HIPAA alignment",
              "Control mapping & evidence strategy",
              "Board-level reporting outputs",
              "Risk register development",
            ]}
          />
        </div>
      </Section>

      {/* DIFFERENTIATOR */}
      <section className="py-20 border-t border-line">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.22em] text-gold uppercase">
              Approach
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Strategy before tooling. Architecture before deployment.
            </h2>

            <p className="mt-6 text-muted text-base leading-relaxed">
              Vitruvius does not implement technology in isolation. Every engagement
              begins with structured threat modeling, governance definition, and
              identity-aware design principles to ensure AI adoption strengthens —
              not weakens — enterprise risk posture.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-4 text-sm text-muted">
              <div>
                <div className="text-sand font-semibold">Assess</div>
                <div className="mt-2">Risk & maturity analysis</div>
              </div>
              <div>
                <div className="text-sand font-semibold">Model</div>
                <div className="mt-2">Threat & abuse case design</div>
              </div>
              <div>
                <div className="text-sand font-semibold">Architect</div>
                <div className="mt-2">Identity-driven frameworks</div>
              </div>
              <div>
                <div className="text-sand font-semibold">Validate</div>
                <div className="mt-2">Red team & control testing</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="rounded-xl2 border border-line bg-slate2/40 p-12 shadow-soft">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Begin with a structured AI governance assessment.
              </h3>

              <p className="mt-4 text-muted text-sm leading-relaxed">
                Receive a prioritized risk profile, governance blueprint,
                architectural recommendations, and an executive-ready summary.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-full bg-gold text-ink px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
