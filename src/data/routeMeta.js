import { routeMeta as legacyRouteMeta } from './siteData.js'
import { industryRouteMeta } from './industryData.js'

const expandedRoutes = [
  ['/gallery', 'Wedding & Event Inspiration Gallery | LUMA', 'Explore 70 locally hosted, credited wedding, event, Toronto, design and celebration images in the LUMA inspiration gallery.'],
  ['/videos', 'Wedding & Event Video Gallery | LUMA', 'Explore eight locally hosted wedding, destination, social and corporate event video vignettes used in the LUMA demo.'],
  ['/feedback', 'Share Feedback | LUMA Weddings & Events', 'Share private feedback with the LUMA demo. Public display requires explicit permission and review.'],
  ['/accessibility', 'Accessibility | LUMA Weddings & Events', 'Read the accessibility approach and contact path for the LUMA wedding and event planning demo.'],
  ['/contact/wedding', 'Wedding Planning Inquiry | LUMA', 'Start a wedding planning inquiry with LUMA by secure form, email or WhatsApp.'],
  ['/contact/event', 'Social Event Planning Inquiry | LUMA', 'Start a social event planning inquiry with LUMA by secure form, email or WhatsApp.'],
  ['/contact/corporate', 'Corporate Event Planning Inquiry | LUMA', 'Start a corporate event planning inquiry with LUMA by secure form, email or WhatsApp.'],
]

export const allRouteMeta = [...new Map([...legacyRouteMeta, ...industryRouteMeta, ...expandedRoutes].map((entry) => [entry[0], entry])).values()]
