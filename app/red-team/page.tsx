import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";

export default function RedTeam() {
  return (
    <>
      <Section eyebrow="Offensive Validation" title="Red Team Sprint">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          A focused adversary emulation engagement to validate your AI, identity, and infrastructure
          controls against realistic attack chains.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Adversary scenarios</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Prompt injection and unsafe tool invocation</li>
                <li>• Credential abuse and identity escalation</li>
                <li>• Data exfiltration and policy bypass paths</li>
                <li>• Lateral movement via weak trust boundaries</li>
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
              <h3 className="text-base font-semibold">Engagement outputs</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Attack narrative and kill-chain map</li>
                <li>• Control effectiveness scorecard</li>
                <li>• Fix-first remediation sequence</li>
                <li>• Leadership and technical readout</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <TrackedCtaLink
              href="/contact"
              eventName="cta_click"
              payload={{ placement: "red-team", cta: "schedule-sprint" }}
              className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Schedule Red Team Sprint
            </TrackedCtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
