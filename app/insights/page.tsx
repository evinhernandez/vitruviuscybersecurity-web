import Link from "next/link";

import Section from "@/components/Section";
import Container from "@/components/Container";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { insightPosts } from "@/lib/insights";

export default function Insights() {
  return (
    <>
      <Section eyebrow="Insights" title="Authority content for AI security and cyber risk leaders">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Research notes, implementation playbooks, and field-tested patterns for mid-market B2B
          teams navigating AI, identity, and regulatory pressure.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {insightPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="block rounded-xl2 border border-line bg-slate2/30 p-6 hover:bg-slate2/45 transition"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">{post.category}</div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-muted">{post.readTime}</div>
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <LeadMagnetForm />
              <div className="rounded-xl2 border border-line bg-slate2/30 p-6 text-sm text-muted">
                Every insight links to an actionable engagement path. For custom scope, use the
                contact form to request an AI Security Assessment.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
