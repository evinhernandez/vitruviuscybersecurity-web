import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllInsights } from "@/lib/insights-mdx";

export const metadata: Metadata = buildPageMetadata({
  title: "Topic Cluster | AI Security and Zero Trust",
  description:
    "Cluster hub for AI security and zero trust strategy, red team methods, identity governance, and enterprise implementation guidance.",
  path: "/topics/ai-security-zero-trust",
  keywords: ["AI security", "zero trust", "identity governance", "enterprise architecture"],
});

export default async function AISecurityZeroTrustTopic() {
  const insights = (await getAllInsights()).filter((post) =>
    post.topic.toLowerCase().includes("ai security"),
  );

  return (
    <>
      <Section eyebrow="Topic Cluster" title="AI Security + Zero Trust Knowledge Graph">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Canonical cluster page to consolidate authority signals across AI governance,
          non-human identity controls, offensive validation, and architecture modernization.
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-4">
            {insights.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="rounded-xl2 surface-panel p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-cyan2">{post.intent}</div>
                <h3 className="mt-2 text-xl font-semibold tracking-[0.02em]">{post.title}</h3>
                <p className="mt-3 text-sm text-muted">{post.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
