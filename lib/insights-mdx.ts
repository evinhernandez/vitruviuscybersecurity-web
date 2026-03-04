import { promises as fs } from "node:fs";
import path from "node:path";

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  topic: string;
  intent: string;
  frameworks: string[];
  entities: string[];
  ctaLabel: string;
  ctaHref: string;
  draft: boolean;
};

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type InsightDoc = InsightMeta & {
  content: string;
  blocks: ContentBlock[];
  readTime: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

function parseList(value?: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith("---\n")) {
    return { meta: {}, content: raw };
  }

  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) {
    return { meta: {}, content: raw };
  }

  const frontmatter = raw.slice(4, end);
  const content = raw.slice(end + 5).trim();

  const meta = frontmatter.split("\n").reduce<Record<string, string>>((acc, line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return acc;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    acc[key] = value;
    return acc;
  }, {});

  return { meta, content };
}

function toBlocks(markdown: string): ContentBlock[] {
  const lines = markdown.split("\n").map((line) => line.trimEnd());
  const blocks: ContentBlock[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    blocks.push({ type: "p", text: paragraphBuffer.join(" ").trim() });
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push({ type: "ul", items: [...listBuffer] });
    listBuffer = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.length === 0) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: trimmed.replace(/^##\s+/, "") });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(trimmed.replace(/^-\s+/, ""));
      continue;
    }

    paragraphBuffer.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function wordCount(input: string) {
  return input.split(/\s+/).filter(Boolean).length;
}

function validateMeta(meta: Record<string, string>, slug: string): InsightMeta {
  return {
    slug,
    title: meta.title || slug,
    description: meta.description || "",
    date: meta.date || new Date().toISOString().slice(0, 10),
    updated: meta.updated,
    author: meta.author || "Vitruvius Cyber Research",
    topic: meta.topic || "AI Security",
    intent: meta.intent || "Informational",
    frameworks: parseList(meta.frameworks),
    entities: parseList(meta.entities),
    ctaLabel: meta.ctaLabel || "Request AI Security Assessment",
    ctaHref: meta.ctaHref || "/contact",
    draft: meta.draft === "true",
  };
}

export async function getAllInsights(): Promise<InsightDoc[]> {
  const files = await fs.readdir(CONTENT_DIR);

  const docs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
        const parsed = parseFrontmatter(raw);
        const meta = validateMeta(parsed.meta, slug);
        const content = parsed.content;
        const blocks = toBlocks(content);
        const minutes = Math.max(4, Math.round(wordCount(content) / 210));

        return {
          ...meta,
          content,
          blocks,
          readTime: `${minutes} min`,
        };
      }),
  );

  return docs
    .filter((doc) => !doc.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getInsightBySlug(slug: string) {
  const docs = await getAllInsights();
  return docs.find((doc) => doc.slug === slug);
}

export function getRelatedInsights(insights: InsightDoc[], current: InsightDoc) {
  return insights
    .filter((doc) => doc.slug !== current.slug)
    .sort((a, b) => {
      const aScore = Number(a.topic === current.topic) + Number(a.intent === current.intent);
      const bScore = Number(b.topic === current.topic) + Number(b.intent === current.intent);
      return bScore - aScore;
    })
    .slice(0, 3);
}
