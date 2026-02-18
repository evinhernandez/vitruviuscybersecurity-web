# Vitruvius Cyber Website

Marketing website for Vitruvius Cyber, built with Next.js App Router and Tailwind CSS v4.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens in `app/globals.css`)
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
npm run dev     # local dev
npm run build   # production build
npm run start   # run production build locally
npm run lint    # eslint checks
```

## Project Structure

```text
app/                # routes and layout (App Router)
components/         # reusable UI components
public/             # static assets
app/globals.css     # Tailwind import + design tokens
postcss.config.cjs  # PostCSS plugin config
```

## Routes

- `/`
- `/ai-governance`
- `/architecture`
- `/red-team`
- `/compliance`
- `/insights`
- `/contact`

## Tailwind Notes

- Theme tokens are defined in `app/globals.css` under `@theme`.
- Use utility classes that map to those tokens (for example: `text-muted`, `bg-slate2/40`, `border-line`, `rounded-xl2`, `shadow-soft`).
- Keep Tailwind/PostCSS config centralized at project root to avoid build inconsistencies.

## Vercel Deployment

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: default (leave empty for Next.js)

Any push to your connected branch should trigger a deployment automatically.
