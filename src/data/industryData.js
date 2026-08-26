import { image } from './siteData.js'

const makeOffering = (group, slug, title, summary, hero, accent, includes) => ({
  group,
  slug,
  title,
  summary,
  hero: image(hero),
  accent,
  includes,
  idealFor: `Hosts who want ${summary.charAt(0).toLowerCase()}${summary.slice(1)}`,
})

const weddingIncludes = ['Planning framework and decision guidance', 'Vendor and venue coordination', 'Guest-flow and timeline planning', 'Contingency planning', 'Calm on-site leadership']
const eventIncludes = ['Event brief and responsibility map', 'Venue and supplier coordination', 'Guest journey and run of show', 'Production contingency planning', 'On-site event leadership']
const productionIncludes = ['Scope and priorities workshop', 'Curated recommendations', 'Shared planning documents', 'Supplier communication', 'Final production review']

export const weddingOfferings = [
  makeOffering('Weddings', 'full-service-weddings', 'Full-Service Wedding Planning', 'End-to-end strategy, design and production for a wedding that feels connected from the first decision onward.', 'floral-reception-newlyweds', 'rose', weddingIncludes),
  makeOffering('Weddings', 'partial-planning', 'Partial Wedding Planning', 'Professional structure for a plan already in motion, with the work you completed carefully preserved.', 'garden-wedding-portrait', 'sage', weddingIncludes),
  makeOffering('Weddings', 'wedding-coordination', 'Wedding Coordination', 'A thorough planning handoff, supplier confirmation and composed leadership through every wedding-day transition.', 'wedding-ceremony-hands', 'champagne', weddingIncludes),
  makeOffering('Weddings', 'destination-weddings', 'Destination Weddings', 'Place-led planning that connects travel information, local production and a generous multi-day guest experience.', 'sunset-beach-wedding', 'aqua', weddingIncludes),
  makeOffering('Weddings', 'intimate-weddings', 'Intimate Weddings', 'Meaningful celebrations where close conversation, excellent hospitality and personal details lead the design.', 'intimate-wedding-portrait', 'lavender', weddingIncludes),
  makeOffering('Weddings', 'luxury-weddings', 'Luxury Weddings', 'Discreet, high-touch planning for layered productions, exceptional materials and carefully paced hospitality.', 'black-tie-wedding-portrait', 'champagne', weddingIncludes),
  makeOffering('Weddings', 'multicultural-weddings', 'Multicultural Weddings', 'Collaborative planning that gives family traditions, modern expression and guest understanding equal care.', 'joyful-indian-wedding', 'coral', weddingIncludes),
  makeOffering('Weddings', 'south-asian-weddings', 'South Asian Weddings', 'Multi-event planning shaped around ceremony, family, cultural detail, hospitality and production complexity.', 'south-asian-wedding-aisle', 'saffron', weddingIncludes),
  makeOffering('Weddings', 'lgbtq-weddings', 'LGBTQ+ Weddings', 'Inclusive, assumption-free planning centred on the people, language and traditions that feel right to you.', 'african-wedding-portrait', 'lavender', weddingIncludes),
  makeOffering('Weddings', 'wedding-weekends', 'Wedding Weekend Planning', 'A connected welcome, ceremony, reception and farewell experience with one clear guest journey.', 'outdoor-wedding-tent', 'sage', weddingIncludes),
]

export const eventOfferings = [
  makeOffering('Events', 'corporate-events', 'Corporate Events', 'Purpose-led planning for company gatherings where content, brand, hospitality and timing work together.', 'corporate-gala-hall', 'blue', eventIncludes),
  makeOffering('Events', 'conferences', 'Conferences & Summits', 'Speaker, audience, room and production planning for clear, comfortable days of shared ideas.', 'conference-audience', 'blue', eventIncludes),
  makeOffering('Events', 'brand-launches', 'Brand Launches', 'A confident live expression of a launch story, designed around audience attention and measurable purpose.', 'conference-stage', 'coral', eventIncludes),
  makeOffering('Events', 'galas-fundraisers', 'Galas & Fundraisers', 'Elegant donor and guest experiences that protect program timing while keeping the room warm and generous.', 'gala-banquet', 'champagne', eventIncludes),
  makeOffering('Events', 'holiday-parties', 'Holiday Parties', 'Inclusive seasonal gatherings with polished food, entertainment, transport and guest-flow planning.', 'corporate-toast', 'rose', eventIncludes),
  makeOffering('Events', 'product-launches', 'Product Launches', 'Launch environments that connect demonstration, storytelling, media moments and practical production.', 'conference-presentation', 'blue', eventIncludes),
  makeOffering('Events', 'networking-events', 'Networking Events', 'Comfortable room plans, natural conversation cues and hospitality that make it easier to connect.', 'networking-room', 'sage', eventIncludes),
  makeOffering('Events', 'awards-ceremonies', 'Awards Ceremonies', 'Cue-led programs, stage management and guest hospitality for recognition that feels genuinely celebratory.', 'conference-stage', 'champagne', eventIncludes),
  makeOffering('Events', 'community-events', 'Community Events', 'Accessible, welcoming public gatherings designed for practical movement, communication and belonging.', 'conference-crowd', 'coral', eventIncludes),
  makeOffering('Events', 'nonprofit-events', 'Nonprofit Events', 'Mission-aligned production that treats donor stewardship, accessibility and responsible budgets with care.', 'event-hall-classic', 'sage', eventIncludes),
  makeOffering('Events', 'birthday-parties', 'Birthday Parties', 'Playful, polished celebrations shaped around the guest of honour without leaving the host to run the room.', 'senior-birthday', 'saffron', eventIncludes),
  makeOffering('Events', 'anniversary-parties', 'Anniversary Parties', 'Warm milestone gatherings that bring personal history into the setting, menu and shared moments.', 'anniversary-couple', 'rose', eventIncludes),
  makeOffering('Events', 'engagement-parties', 'Engagement Parties', 'A beautifully paced first celebration that feels distinct from the wedding while setting a thoughtful tone.', 'wedding-rings-hands', 'lavender', eventIncludes),
  makeOffering('Events', 'bridal-showers', 'Wedding Showers', 'Fresh, personal hosting with an easy guest flow and details that honour the people being celebrated.', 'rings-invitation', 'rose', eventIncludes),
  makeOffering('Events', 'baby-showers', 'Baby Showers', 'Soft, modern celebrations with comfortable pacing, thoughtful gifting and room for every generation.', 'pastel-wedding-reception', 'aqua', eventIncludes),
  makeOffering('Events', 'private-dinners', 'Private Dinners', 'Intimate tables where menu, lighting, conversation and small personal details carry the experience.', 'modern-candle-tablescape', 'olive', eventIncludes),
  makeOffering('Events', 'milestone-celebrations', 'Milestone Celebrations', 'Meaningful birthdays, retirements and life moments translated into a joyful, well-run gathering.', 'sparkler-celebration', 'saffron', eventIncludes),
]

export const serviceOfferings = [
  makeOffering('Services', 'event-planning', 'Event Planning', 'One accountable planning lead connecting decisions, suppliers, timing and guest experience.', 'event-hall-modern', 'olive', productionIncludes),
  makeOffering('Services', 'event-design', 'Event Design', 'A coherent visual direction across palette, materials, florals, lighting, stationery and space.', 'orchid-wedding-installation', 'rose', productionIncludes),
  makeOffering('Services', 'venue-selection', 'Venue Selection', 'A focused venue search that considers capacity, access, production needs, guest movement and atmosphere.', 'event-hall-classic', 'sage', productionIncludes),
  makeOffering('Services', 'vendor-sourcing', 'Vendor Sourcing', 'Curated supplier recommendations evaluated for fit, scope, availability and working style.', 'conference-conversation', 'blue', productionIncludes),
  makeOffering('Services', 'budget-management', 'Budget Management', 'A practical framework for allocations, commitments, change tracking and informed tradeoffs.', 'gold-accent-place-setting', 'champagne', productionIncludes),
  makeOffering('Services', 'guest-management', 'Guest Management', 'Clear information, accessibility awareness and thoughtful communication from invitation through arrival.', 'corporate-toast', 'coral', productionIncludes),
  makeOffering('Services', 'rsvp-management', 'RSVP Management', 'Organized response tracking, guest questions, meal details and deadline communication.', 'conference-details', 'blue', productionIncludes),
  makeOffering('Services', 'timeline-run-of-show', 'Timeline & Run of Show', 'One operational plan defining timing, cues, ownership, dependencies and contingency decisions.', 'conference-presentation', 'olive', productionIncludes),
  makeOffering('Services', 'floor-plans', 'Floor Plans & Guest Flow', 'Room layouts that balance capacity, comfort, service, accessibility, sightlines and atmosphere.', 'gala-banquet', 'lavender', productionIncludes),
  makeOffering('Services', 'rentals-tabletop', 'Rentals & Tabletop', 'A considered mix of furniture, linen, tabletop and practical production quantities.', 'colourful-candle-tablescape', 'coral', productionIncludes),
  makeOffering('Services', 'floral-decor', 'Floral & Décor Direction', 'Creative direction and sourcing for floral moments, styling layers and meaningful visual details.', 'south-asian-floral-stage', 'rose', productionIncludes),
  makeOffering('Services', 'lighting-av', 'Lighting & AV', 'Guest-centred sound, lighting and presentation planning that supports both atmosphere and content.', 'conference-stage', 'blue', productionIncludes),
  makeOffering('Services', 'transportation-logistics', 'Transportation & Logistics', 'Arrival, shuttle, loading, access and movement plans built around real operational constraints.', 'toronto-night', 'aqua', productionIncludes),
  makeOffering('Services', 'entertainment-programming', 'Entertainment & Programming', 'Thoughtful pacing and supplier coordination for speakers, performances, music and shared moments.', 'keynote-speaker', 'saffron', productionIncludes),
  makeOffering('Services', 'rehearsal-management', 'Rehearsal Management', 'A clear, welcoming rehearsal that gives every participant confidence without draining the moment.', 'ring-exchange-closeup', 'sage', productionIncludes),
  makeOffering('Services', 'on-site-production', 'On-Site Production', 'Experienced leadership for setup, cues, suppliers, guests, changes and the final strike.', 'conference-crowd', 'olive', productionIncludes),
]

export const locationOfferings = [
  makeOffering('Locations', 'toronto', 'Toronto Event Planning', 'Weddings and events across downtown venues, cultural spaces, hotels, restaurants and waterfront rooms.', 'toronto-waterfront', 'blue', productionIncludes),
  makeOffering('Locations', 'greater-toronto-area', 'Greater Toronto Area Planning', 'Connected planning across Peel, York, Durham, Halton and the communities surrounding Toronto.', 'toronto-skyline', 'sage', productionIncludes),
  makeOffering('Locations', 'niagara', 'Niagara Wedding & Event Planning', 'Vineyard, estate and destination-style celebrations shaped around travel, weather and guest hosting.', 'garden-ceremony-aisle', 'rose', productionIncludes),
  makeOffering('Locations', 'muskoka', 'Muskoka Wedding & Event Planning', 'Lake-led weekends with careful transport, accommodation, weather and local supplier planning.', 'woodland-wedding-ceremony', 'aqua', productionIncludes),
  makeOffering('Locations', 'destination-events', 'Destination Event Planning', 'Multi-day celebrations beyond home with local knowledge, travel communication and connected production.', 'beach-wedding-vows', 'champagne', productionIncludes),
]

export const industryGroups = {
  weddings: {
    label: 'Weddings',
    eyebrow: 'Wedding planning',
    title: 'A wedding that feels deeply personal—and beautifully held.',
    text: 'From one-day celebrations to multi-event wedding weekends, every plan connects your priorities, people, traditions and practical production.',
    image: image('jewish-ring-ceremony'),
    items: weddingOfferings,
  },
  events: {
    label: 'Events',
    eyebrow: 'Corporate, social & community events',
    title: 'Purposeful gatherings, produced with warmth.',
    text: 'LUMA brings strategic planning and a hospitality lens to rooms where people connect, celebrate, learn, give and remember.',
    image: image('conference-audience'),
    items: eventOfferings,
  },
  services: {
    label: 'Services',
    eyebrow: 'Planning, design & production',
    title: 'The right support, assembled around the work.',
    text: 'Choose a complete planning partnership or focused expertise for a specific part of the event. Every scope makes ownership and boundaries clear.',
    image: image('orchid-wedding-installation'),
    items: serviceOfferings,
  },
  locations: {
    label: 'Locations',
    eyebrow: 'Toronto, Ontario & destinations',
    title: 'A sense of place, built into the plan.',
    text: 'Local context changes transportation, timing, weather planning and the guest experience. Location pages describe planning considerations—not guaranteed venue availability.',
    image: image('toronto-sunset'),
    items: locationOfferings,
  },
}

export const allIndustryOfferings = [...weddingOfferings, ...eventOfferings, ...serviceOfferings, ...locationOfferings]

export const megaMenuGroups = [
  { key: 'weddings', label: 'Weddings', to: '/weddings', items: weddingOfferings.slice(0, 8) },
  { key: 'events', label: 'Events', to: '/events', items: eventOfferings.slice(0, 10) },
  { key: 'services', label: 'Services', to: '/services', items: serviceOfferings.slice(0, 10) },
]

export const industryRouteMeta = [
  ...Object.entries(industryGroups).map(([key, group]) => [`/${key}`, `${group.label} | LUMA Weddings & Events`, group.text]),
  ...weddingOfferings.map((item) => [`/weddings/${item.slug}`, `${item.title} | LUMA`, item.summary]),
  ...eventOfferings.map((item) => [`/events/${item.slug}`, `${item.title} | LUMA`, item.summary]),
  ...serviceOfferings.map((item) => [`/services/${item.slug}`, `${item.title} | LUMA`, item.summary]),
  ...locationOfferings.map((item) => [`/locations/${item.slug}`, `${item.title} | LUMA`, item.summary]),
]
