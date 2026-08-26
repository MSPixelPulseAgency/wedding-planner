# SEO Agent

## Source of truth

Canonical route metadata is assembled in `src/data/routeMeta.js` from the original site data, expanded industry data and dedicated gallery, video, feedback and accessibility routes. `scripts/postbuild.mjs` uses it to create route-specific HTML, canonicals, Open Graph/Twitter tags, JSON-LD, a no-script content fallback, the sitemap and social image.

## Requirements

- One unique title, description and meaningful H1 per public route
- Canonical URLs rooted at `https://luma-event-planning.vercel.app`
- Descriptive alt text and crawlable internal links
- Accurate Organization, WebSite, WebPage, Breadcrumb and BlogPosting data where appropriate
- No aggregate ratings, fabricated business history, fake Event objects or unsupported LocalBusiness address data
- Useful Toronto/GTA intent only where the page genuinely supports it

## Maintenance

When adding a route, add its metadata, link it from the UI where appropriate, rebuild and run `npm run check:seo`. Keep `robots.txt` and the generated sitemap on the canonical domain. Check that existing files win before the Vercel SPA fallback.

Do not create thin city pages or keyword-stuffed article variants.
