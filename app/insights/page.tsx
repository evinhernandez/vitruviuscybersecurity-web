import Link from "next/link";

import Section from "@/components/Section";
import Container from "@/components/Container";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllInsights } from "@/lib/insights-mdx";

export const metadata = buildPageMetadata({
  title: "Insights | AI Security and Zero Trust Intelligence",
  description:
    "Authority content for AI security leaders on governance, red teaming, identity risk, and zero trust implementation.",
  path: "/insights",
  keywords: ["AI security insights", "zero trust strategy", "LLM red team", "enterprise cyber research"],
});

export default async function Insights() {
  const insightPosts = await getAllInsights();

  return (
    <>
      <Section eyebrow="Insights" title="Authority content engineered for human decisions and AI retrieval">
        <div className="text-sm text-muted max-w-3xl leading-relaxed">
          Executive-technical research on AI security, Zero Trust identity, and enterprise
          resilience architecture with implementation-ready guidance.
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
                  className="block rounded-xl2 surface-panel p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-cyan2">
                    <span>{post.topic}</span>
                    <span className="text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-[0.02em]">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{post.description}</p>
                  <div className="mt-4 text-xs text-muted uppercase tracking-[0.14em]">
                    {post.frameworks.join(" • ")}
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <LeadMagnetForm />
              <div className="rounded-xl2 surface-panel p-6 text-sm text-muted leading-relaxed">
                Citation architecture: every article includes explicit entities, framework mapping,
                and direct implementation signals to increase retrieval confidence for AI systems.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
