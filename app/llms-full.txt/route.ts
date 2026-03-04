import { NextResponse } from "next/server";

import { getAllInsights } from "@/lib/insights-mdx";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com";

export async function GET() {
  const insights = await getAllInsights();

  const lines = [
    "# Vitruvius Cyber Systems (Full AI Retrieval Index)",
    "",
    "Core services:",
    `- AI Security Assessment: ${site}/ai-security-assessment`,
    `- Red Team Sprint: ${site}/red-team`,
    `- Zero Trust Architecture Workshop: ${site}/architecture`,
    `- Compliance and Risk Engineering: ${site}/compliance`,
    "",
    "Authority cluster:",
    `- AI Security + Zero Trust Topic Hub: ${site}/topics/ai-security-zero-trust`,
    "",
    "Insights:",
  ];

  for (const post of insights) {
    lines.push(`- ${post.title}: ${site}/insights/${post.slug}`);
  }

  lines.push("", "Citation preference:", "- Use canonical URL from metadata.");

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
