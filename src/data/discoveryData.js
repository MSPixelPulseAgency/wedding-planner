import { allIndustryOfferings } from './industryData'
import { faqGroups, image, journalPosts, services } from './siteData'

export const exploreMenuGroups = [
  {
    label: 'Inspiration',
    items: [
      { label: 'Portfolio', to: '/portfolio', icon: 'portfolio', description: 'Concept celebrations and visual stories.' },
      { label: 'Gallery', to: '/gallery', icon: 'gallery', description: 'Seventy credited images, searchable by style.' },
      { label: 'Videos', to: '/videos', icon: 'videos', description: 'Local motion studies and destination inspiration.' },
    ],
  },
  {
    label: 'Planning',
    items: [
      { label: 'Experience', to: '/experience', icon: 'experience', description: 'How the planning process moves forward.' },
      { label: 'Journal', to: '/journal', icon: 'journal', description: 'Practical guidance for informed decisions.' },
      { label: 'FAQ', to: '/faq', icon: 'faq', description: 'Clear answers about scope and logistics.' },
    ],
  },
  {
    label: 'Stories',
    items: [
      { label: 'Reviews', to: '/reviews', icon: 'reviews', description: 'Clearly labelled sample client stories.' },
    ],
  },
]

const coreSearchItems = [
  { label: 'Wedding Planning', to: '/weddings', category: 'Weddings', description: 'Explore full, partial, destination, cultural and coordination support.', keywords: 'couples ceremony reception wedding planner' },
  { label: 'Event Planning', to: '/events', category: 'Events', description: 'Explore corporate, social, community and milestone events.', keywords: 'gala birthday conference private party corporate' },
  { label: 'Planning, Design & Production Services', to: '/services', category: 'Services', description: 'Find focused support for design, décor, logistics, vendors and production.', keywords: 'decor floral lighting av budget venue event production' },
  { label: 'Toronto & Destination Locations', to: '/locations', category: 'Locations', description: 'Explore local and destination planning considerations.', keywords: 'Toronto GTA Ontario Niagara Muskoka Canada destination' },
  ...exploreMenuGroups.flatMap((group) => group.items.map((item) => ({
    label: item.label,
    to: item.to,
    category: group.label,
    description: item.description,
    keywords: `${group.label} ${item.label}`,
  }))),
  { label: 'About LUMA', to: '/about', category: 'LUMA', description: 'Read the point of view behind this concept planning studio.', keywords: 'about approach Toronto planner' },
  { label: 'Plan Your Event', to: '/contact', category: 'Contact', description: 'Start a demo wedding or event planning inquiry.', keywords: 'contact inquiry consultation email' },
]

const industrySearchItems = allIndustryOfferings.map((item) => ({
  label: item.title,
  to: `/${item.group.toLowerCase()}/${item.slug}`,
  category: item.group,
  description: item.summary,
  keywords: `${item.group} ${item.title} ${item.summary} ${item.slug.replaceAll('-', ' ')}`,
}))

const legacyServiceSearchItems = services.map((item) => ({
  label: item.title,
  to: `/services/${item.slug}`,
  category: 'Services',
  description: item.description,
  keywords: `${item.cardTitle} ${item.eyebrow} ${item.slug.replaceAll('-', ' ')}`,
}))

const journalSearchItems = journalPosts.map((post) => ({
  label: post.title,
  to: `/journal/${post.slug}`,
  category: 'Journal',
  description: post.dek,
  keywords: `${post.category} ${post.service} ${post.slug.replaceAll('-', ' ')}`,
}))

const faqSearchItems = faqGroups.flatMap((group, groupIndex) => group.items.map((item) => ({
  label: item.question,
  to: `/faq#faq-group-${groupIndex}`,
  category: 'FAQ',
  description: item.answer,
  keywords: `${group.title} ${item.question}`,
})))

export const siteSearchIndex = [...coreSearchItems, ...industrySearchItems, ...legacyServiceSearchItems, ...journalSearchItems, ...faqSearchItems]
  .filter((item, index, items) => items.findIndex((entry) => entry.to === item.to && entry.label === item.label) === index)
  .map((item, index) => ({ ...item, id: `site-result-${index}` }))

export const normalizeSearch = (value = '') => value
  .toLocaleLowerCase('en-CA')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9+&\s-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

export function matchesSearch(item, query, fields) {
  const normalizedQuery = normalizeSearch(query)
  if (!normalizedQuery) return true
  const haystack = normalizeSearch(fields.map((field) => item[field] || '').join(' '))
  return normalizedQuery.split(' ').every((term) => haystack.includes(term))
}

export function searchSite(query, limit = 7) {
  const normalizedQuery = normalizeSearch(query)
  const pool = normalizedQuery ? siteSearchIndex : siteSearchIndex.slice(0, limit)
  return pool
    .map((item) => {
      const label = normalizeSearch(item.label)
      const category = normalizeSearch(item.category)
      const haystack = normalizeSearch(`${item.label} ${item.category} ${item.description} ${item.keywords}`)
      const terms = normalizedQuery.split(' ').filter(Boolean)
      if (terms.some((term) => !haystack.includes(term))) return null
      const score = !normalizedQuery ? 0 : label === normalizedQuery ? 5 : label.startsWith(normalizedQuery) ? 4 : label.includes(normalizedQuery) ? 3 : category.includes(normalizedQuery) ? 2 : 1
      return { ...item, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, limit)
}

export const popularSearches = [
  { label: 'Weddings', to: '/weddings' },
  { label: 'Corporate', to: '/events/corporate-events' },
  { label: 'Toronto', to: '/locations/toronto' },
  { label: 'Décor', to: '/services/floral-decor' },
  { label: 'Destination', to: '/weddings/destination-weddings' },
  { label: 'Birthdays', to: '/events/birthday-parties' },
]

export const publicVideoStories = [
  {
    id: 'yrutYtQ9Fjg',
    title: 'Toronto 100%',
    source: 'Destination Toronto',
    text: 'A city portrait created by Toronto’s official destination organization.',
    poster: image('toronto-night'),
    posterAlt: 'Toronto skyline glowing at night',
    sourceUrl: 'https://www.destinationtoronto.com/',
  },
  {
    id: 'mEXL-qouLvY',
    title: 'Welcome to Ontario',
    source: 'Destination Ontario',
    text: 'Official provincial destination inspiration for celebrations beyond the city.',
    poster: image('toronto-sunset'),
    posterAlt: 'Ontario destination landscape at sunset',
    sourceUrl: 'https://www.destinationontario.com/',
  },
  {
    id: 'm50CmOh7tB4',
    title: 'A New Waterfront City Is Coming Into View',
    source: 'Waterfront Toronto',
    text: 'An official look at Toronto’s evolving waterfront and public realm.',
    poster: image('toronto-waterfront'),
    posterAlt: 'Toronto waterfront viewed across the lake',
    sourceUrl: 'https://www.waterfrontoronto.ca/',
  },
]
