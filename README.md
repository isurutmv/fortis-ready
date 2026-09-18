Fortis Ready — marketing site
================================

Production-quality site built with Next.js (App Router) + TypeScript + Tailwind CSS. Designed for deployment on Vercel and the `fortisready.com` domain.

Tech
- Next.js App Router, TypeScript
- Tailwind (v4, via `@tailwindcss/postcss`)
- `next/font` (Geist)
- Accessible, fast, SEO-ready (metadata, robots, sitemap)

Environment
- Optional: `NEXT_PUBLIC_SITE_URL` for canonical/OG URLs (defaults to `https://fortisready.com`)
- Example: see `.env.example`

Local Development
1. Install deps and start dev server:
   ```bash
   npm install
   npm run dev
   ```
2. Visit `http://localhost:3000`

Build
```bash
npm run build && npm run start
```

Deploy to Vercel
----------------
1. Push this repository to GitHub
2. In Vercel:
   - New Project → Import this repo
   - Framework: Next.js (auto-detected)
   - Environment variables:
     - `NEXT_PUBLIC_SITE_URL` → `https://fortisready.com` (or staging domain)
   - Deploy
3. After first deploy, add domains:
   - Primary: `fortisready.com`
   - Optional: `fortisready.dev` (or `getfortisready.com`)
   - Add A/ALIAS (apex) and CNAME (www) records as instructed by Vercel
4. Set `fortisready.com` as the Production domain

SEO & Assets
- Favicon: `public/favicon.svg`
- Apple touch icon: `public/apple-touch-icon.png`
- OG/Twitter image: `public/og.png` (1200×630 recommended; replace when you have final artwork)
- Sitemap: `/sitemap.xml` (auto)
- Robots: `/robots.txt` (auto)

Pages & Components
- `/` home: Hero, Problem, WhoFor, Offer/Pricing, Process, FAQ, Intake
- `/checklist` printable Audit Readiness Checklist

Brand truth
- Name: Fortis Ready
- Tagline: “Get audit-ready before you pay for the audit.”
- SKU‑1: Focused Contract Readiness Review — $299 / 300 USDC on Base, 48–72h, ≤ ~300 nSLOC / 1 contract
- Not a formal audit; no guarantees; zero custody
- Intake: `info@isuru.dev`
- Pay (post-scope): `0x2415e94be90b4785f4b79f49db067c89925cc1ca` on Base

Notes
- Avoid “crypto neon” visuals; use an institutional B2B tone.
- Checklist page has print styles; use the Print button or `Ctrl/Cmd + P`.

