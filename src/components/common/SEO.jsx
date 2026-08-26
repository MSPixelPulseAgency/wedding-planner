import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://luma-weddings-events.vercel.app'
const defaultImage = `${siteUrl}/og-luma.jpg`

export function SEO({ title, description, path = '/', type = 'website', image = defaultImage, breadcrumbs = [], article }) {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUMA Weddings & Events',
    description: 'A concept wedding and event planning studio presented as serving Toronto, the GTA and destination celebrations.',
    url: siteUrl,
    email: 'hello@mspixelpulse.com',
    areaServed: ['Toronto', 'Greater Toronto Area'],
  }
  const schemas = [organization]

  if (breadcrumbs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${siteUrl}${item.to}`,
      })),
    })
  }

  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      image,
      author: { '@type': 'Organization', name: 'LUMA Weddings & Events' },
      publisher: { '@type': 'Organization', name: 'LUMA Weddings & Events' },
      mainEntityOfPage: canonical,
    })
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LUMA Weddings & Events" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  )
}
