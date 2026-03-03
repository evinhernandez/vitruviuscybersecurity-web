import Section from "@/components/Section";
import Container from "@/components/Container";
import ContactLeadForm from "@/components/ContactLeadForm";

export default function Contact() {
  return (
    <>
      <Section eyebrow="Contact" title="Request your AI Security Assessment">
        <div className="text-sm text-muted max-w-2xl leading-relaxed">
          Tell us your current security, AI, and compliance priorities. We will respond within
          1-2 business days with recommended next steps and a discovery call path.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <ContactLeadForm />

            <div className="rounded-xl2 border border-line bg-slate2/30 p-6">
              <div className="text-sm font-semibold">What you receive</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Structured intake and risk context review</li>
                <li>• Discovery call preparation with your priorities</li>
                <li>• Initial fit assessment for service scope</li>
              </ul>

              <div className="mt-8 text-sm font-semibold">Primary engagement paths</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• AI Security Assessment</li>
                <li>• Red Team Sprint</li>
                <li>• Zero Trust Architecture Workshop</li>
                <li>• Compliance and Risk Engineering</li>
              </ul>

              <div className="mt-8 text-sm font-semibold">Scheduling</div>
              <div className="mt-2 text-sm text-muted">
                Use your Calendly link as `NEXT_PUBLIC_CALENDLY_URL` to route successful submissions.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
