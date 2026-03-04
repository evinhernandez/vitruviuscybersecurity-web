import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Section from "@/components/Section";
import Container from "@/components/Container";
import TrackedCtaLink from "@/components/TrackedCtaLink";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getAllInsights,
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/insights-mdx";
import { articleSchema } from "@/lib/schema";

export async function generateStaticParams() {
  const posts = await getAllInsights();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Insight Not Found",
      description: "The requested insight could not be found.",
      path: `/insights/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${post.title} | Vitruvius Insights`,
    description: post.description,
    path: `/insights/${post.slug}`,
    keywords: [...post.entities, ...post.frameworks],
  });
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  const all = await getAllInsights();
  const related = getRelatedInsights(all, post);

  const graph = articleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.date,
    dateModified: post.updated,
    keywords: [...post.entities, ...post.frameworks],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <Section eyebrow={post.topic} title={post.title}>
        <div className="text-xs uppercase tracking-[0.14em] text-muted">
          {post.readTime} • {post.author} • {post.date}
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <article className="rounded-xl2 surface-panel p-8">
              <p className="text-base text-muted leading-relaxed">{post.description}</p>

              <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
                {post.blocks.map((block, index) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={`${block.text}-${index}`} className="text-xl text-sand font-semibold tracking-[0.02em]">
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "ul") {
                    return (
                      <ul key={`list-${index}`} className="space-y-2 pl-4">
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-cyan2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return <p key={`${block.text}-${index}`}>{block.text}</p>;
                })}
              </div>

              <div className="mt-8 rounded-lg border border-cyan/30 bg-cyan/10 p-5">
                <div className="text-sm text-sand">{post.ctaLabel}</div>
                <div className="mt-4">
                  <TrackedCtaLink
                    href={post.ctaHref}
                    eventName="cta_click"
                    payload={{ placement: "insight-detail", cta: "post-cta", slug }}
                    className="inline-flex rounded-full bg-cyan text-ink px-5 py-2 text-xs uppercase tracking-[0.14em] font-semibold hover:opacity-90"
                  >
                    {post.ctaLabel}
                  </TrackedCtaLink>
                </div>
              </div>
            </article>

            <aside className="space-y-4">
              <div className="rounded-xl2 surface-panel p-6">
                <h3 className="text-sm uppercase tracking-[0.16em] text-cyan2">Entity Signals</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.entities.map((entity) => (
                    <span key={entity} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {entity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl2 surface-panel p-6">
                <h3 className="text-sm uppercase tracking-[0.16em] text-cyan2">Related</h3>
                <div className="mt-4 space-y-3">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/insights/${item.slug}`} className="block text-sm text-muted hover:text-sand">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
