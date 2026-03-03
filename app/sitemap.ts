import type { MetadataRoute } from "next";

const routes = [
  "",
  "/ai-security-assessment",
  "/ai-governance",
  "/architecture",
  "/red-team",
  "/compliance",
  "/platforms",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
