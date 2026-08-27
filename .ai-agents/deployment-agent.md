# Deployment Agent

## Release identity

- Local checkout: `/Users/mahak/Documents/MSPixelPulse/wedding-and-events`
- GitHub: `MSPixelPulseAgency/wedding-and-events`
- Branch: `main`
- Vercel project: `wedding-planner`
- Canonical production URL: `https://luma-event-planning.vercel.app/`
- Legacy alias retained: `https://luma-weddings-events.vercel.app/`

Confirm these identifiers and inspect `.vercel/project.json` before any future deployment. Never deploy a similarly named checkout.

## Release workflow

1. Fetch and compare local `main` with `origin/main`.
2. Confirm no secrets, private data or unrelated files are staged.
3. Run `npm install`, lint, tests, build, SEO audit and `git diff --check`.
4. Commit a focused change and push `main`.
5. Deploy with the authenticated Vercel CLI when requested.
6. Confirm the canonical alias, direct nested routes, media, sitemap, robots, mobile containment, console health and requested interactions.

## Vercel settings

Vite framework, `npm install`, `npm run build`, `dist`, root `./`, Node 22.x. Preserve the filesystem-first SPA routing in `vercel.json`.

A `Ready` build alone is not completion. Record the final commit SHA, deployment URL and live QA evidence.
