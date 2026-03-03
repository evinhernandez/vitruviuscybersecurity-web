import Section from "@/components/Section";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export default function ThankYouPage() {
  return (
    <Section eyebrow="Thank you" title="Your request has been received">
      <div className="max-w-2xl rounded-xl2 border border-line bg-slate2/30 p-8 text-sm text-muted">
        Your assessment request is in review. Book your discovery session to accelerate scope and
        timeline alignment.
        <div className="mt-5">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-gold text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Open Calendly
          </a>
        </div>
      </div>
    </Section>
  );
}
