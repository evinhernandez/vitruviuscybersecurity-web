# Vitruvius Cyber Website

Marketing and conversion website for Vitruvius Cyber, built with Next.js App Router and Tailwind CSS v4.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Environment Variables

Copy `env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `RESEND_API_KEY`
- `LEAD_ALERT_FROM`
- `LEAD_ALERT_TO`
- `NOTION_API_KEY`
- `NOTION_LEADS_DATABASE_ID`

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
- `/contact`
- `/thank-you`

## API Endpoints

- `POST /api/lead`
- `POST /api/lead-magnet`

## Vercel Deployment

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: default
