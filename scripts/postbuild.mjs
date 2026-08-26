import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { routeMeta } from '../src/data/siteData.js'

const projectRoot = path.resolve(import.meta.dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8')
const siteUrl = 'https://wedding-planner.vercel.app'
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function buildHtml(route, title, description) {
  const canonical = `${siteUrl}${route === '/' ? '' : route}`
  const shortTitle = title.split('|')[0].trim()
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'LUMA Weddings & Events', url: siteUrl, email: 'hello@mspixelpulse.com' },
      { '@type': 'WebPage', name: title, description, url: canonical, isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#organization` } },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'LUMA Weddings & Events', url: siteUrl, publisher: { '@id': `${siteUrl}/#organization` } },
    ],
  }
  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${siteUrl}/og-luma.jpg" />`,
    '<meta property="og:site_name" content="LUMA Weddings & Events" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${siteUrl}/og-luma.jpg" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`,
  ].join('\n    ')
  const noScript = `<noscript><main style="max-width:760px;margin:120px auto;padding:24px;font-family:system-ui"><p>LUMA Weddings &amp; Events</p><h1>${escapeHtml(shortTitle)}</h1><p>${escapeHtml(description)}</p><p><a href="/services">Explore services</a> · <a href="/portfolio">View portfolio</a> · <a href="/contact">Plan your event</a></p></main></noscript>`
  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"></div>\n    ${noScript}`)
}

for (const [route, title, description] of routeMeta) {
  const outputDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, 'index.html'), buildHtml(route, title, description))
}

const notFound = buildHtml('/404', 'Page Not Found | LUMA Weddings & Events', 'The requested LUMA page could not be found.')
await writeFile(path.join(distDir, '404.html'), notFound)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeMeta.map(([route]) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc><lastmod>2026-08-26</lastmod></url>`).join('\n')}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

const ogSource = path.join(distDir, 'media/images/floral-wedding-interior.webp')
const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#171715" stop-opacity=".8"/><stop offset=".8" stop-color="#171715" stop-opacity=".08"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="285" fill="#fffdf9" font-family="Georgia,serif" font-size="112" letter-spacing="14">LUMA</text>
  <text x="77" y="340" fill="#d7b98e" font-family="Arial,sans-serif" font-size="23" letter-spacing="9">WEDDINGS &amp; EVENTS</text>
  <text x="77" y="465" fill="#fffdf9" font-family="Georgia,serif" font-size="40">Artfully planned. Beautifully lived.</text>
</svg>`)
await sharp(ogSource).resize(1200, 630, { fit: 'cover' }).composite([{ input: overlay }]).jpeg({ quality: 84, progressive: true }).toFile(path.join(distDir, 'og-luma.jpg'))

console.log(`Generated ${routeMeta.length} route documents, sitemap.xml and og-luma.jpg.`)
