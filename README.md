# Vitruvius Cyber Website

Cinematic enterprise marketing and authority-content site for Vitruvius Cyber Systems, built with Next.js App Router and Tailwind CSS v4.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel deployment

## Environment Variables

Copy `env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `RESEND_API_KEY`
- `LEAD_ALERT_FROM`
- `LEAD_ALERT_TO`
- `NOTION_API_KEY`
- `NOTION_LEADS_DATABASE_ID`

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Content Engine

Authority content lives in `content/insights/*.mdx` and is loaded server-side via `lib/insights-mdx.ts`.

Frontmatter contract:

- `title`
- `description`
- `date`
- `updated` (optional)
- `author`
- `topic`
- `intent`
- `frameworks` (comma-separated)
- `entities` (comma-separated)
- `ctaLabel`
- `ctaHref`
- `draft`

## AI/SEO Surface

- `sitemap.xml` and `robots.txt`
- `llms.txt` and `llms-full.txt`
- JSON-LD for organization/service/article entities
- Topic cluster route: `/topics/ai-security-zero-trust`

## Routes

- `/`
- `/ai-security-assessment`
- `/ai-governance`
- `/architecture`
- `/red-team`
- `/compliance`
- `/platforms`
- `/insights`
- `/insights/[slug]`
- `/topics/ai-security-zero-trust`
- `/contact`
- `/thank-you`
