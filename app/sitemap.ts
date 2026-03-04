import type { MetadataRoute } from "next";

import { getAllInsights } from "@/lib/insights-mdx";

const staticRoutes = [
  "",
  "/ai-security-assessment",
  "/ai-governance",
  "/architecture",
  "/red-team",
  "/compliance",
  "/platforms",
  "/insights",
  "/topics/ai-security-zero-trust",
  "/contact",
  "/llms.txt",
  "/llms-full.txt",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com";
  const insights = await getAllInsights();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.72,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...insightEntries];
}
