# Clerin Balakrishnan — Portfolio

A production-ready, terminal-inspired personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and small client-side enhancements for navigation, project filtering, the boot sequence, and the interactive command line.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deployment URL

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed origin. This single value enables production canonical, sitemap, robots, and structured metadata URLs without hard-coding a domain.

## Content and assets

- Edit portfolio content in `src/data/portfolio.ts`.
- The downloadable résumé is served from `public/cv.pdf`.
- The profile image is served from `public/clerin-portrait.png`.
- Safe Mother intentionally displays `SOURCE_UNAVAILABLE` because no exact public repository was found on the provided GitHub profile.
