import { notFound } from "next/navigation";

import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";
import { getInsightBySlug, insightPosts } from "@/lib/insights";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section eyebrow={post.category} title={post.title}>
        <div className="text-sm text-muted">{post.readTime}</div>
      </Section>

      <section className="pb-20">
        <Container>
          <article className="max-w-3xl rounded-xl2 border border-line bg-slate2/30 p-8">
            <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-5">
              <div className="text-sm">{post.cta}</div>
              <div className="mt-4">
                <TrackedCtaLink
                  href="/contact"
                  eventName="cta_click"
                  payload={{ placement: "insight-detail", cta: "request-assessment", slug }}
                  className="inline-flex rounded-full bg-gold text-ink px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
                >
                  Request Assessment
                </TrackedCtaLink>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
