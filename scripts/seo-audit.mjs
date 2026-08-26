import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { routeMeta } from '../src/data/siteData.js'

const distDir = path.resolve(import.meta.dirname, '..', 'dist')
const issues = []
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
for (const [route, title, description] of routeMeta) {
  const file = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.slice(1), 'index.html')
  try {
    await access(file)
    const html = await readFile(file, 'utf8')
    if (!html.includes(`<title>${escapeHtml(title)}</title>`)) issues.push(`${route}: missing unique title`)
    if (!html.includes(`content="${escapeHtml(description)}"`)) issues.push(`${route}: missing description`)
    if (!html.includes(`rel="canonical"`)) issues.push(`${route}: missing canonical`)
    if (!html.includes('<h1>')) issues.push(`${route}: missing no-script H1 fallback`)
    if (!html.includes('application/ld+json')) issues.push(`${route}: missing structured data`)
  } catch {
    issues.push(`${route}: static route document missing`)
  }
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8')
if ((sitemap.match(/<url>/g) || []).length !== routeMeta.length) issues.push('sitemap route count does not match route metadata')

if (issues.length) {
  console.error(issues.join('\n'))
  process.exit(1)
}
console.log(`SEO audit passed for ${routeMeta.length} static route documents.`)
