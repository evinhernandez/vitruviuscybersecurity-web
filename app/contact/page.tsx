import Section from "@/components/Section";
import Container from "@/components/Container";

export default function Contact() {
  return (
    <>
      <Section eyebrow="Contact" title="Book a strategic session">
        <div className="text-sm text-muted max-w-2xl leading-relaxed">
          Share what you’re building (AI governance, red team, architecture, compliance). We’ll respond within 1–2 business days.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <form
              className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft"
              action="#"
              method="POST"
            >
              <label className="block text-sm">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-gold/60"
              />

              <label className="mt-4 block text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-gold/60"
              />

              <label className="mt-4 block text-sm">How can we help?</label>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-gold/60"
              />

              <button
                type="submit"
                className="mt-5 rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Send
              </button>

              <div className="mt-3 text-xs text-muted">
                Next step: connect this form to Formspree/Basin or a Vercel function.
              </div>
            </form>

            <div className="rounded-xl2 border border-line bg-slate2/30 p-6">
              <div className="text-sm font-semibold">Typical engagements</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• AI governance & security assessment</li>
                <li>• LLM / agent red teaming</li>
                <li>• Zero Trust / identity-centric architecture</li>
                <li>• Compliance mapping + evidence strategy</li>
              </ul>

              <div className="mt-8 text-sm font-semibold">Email</div>
              <div className="mt-2 text-sm text-muted">info@vitruviuscyber.com</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
