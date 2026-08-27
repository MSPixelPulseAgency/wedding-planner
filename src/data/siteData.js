const image = (name) => `/media/images/${name}.webp`
const video = (name) => `/media/videos/${name}.mp4`

export const contact = {
  email: 'hello@mspixelpulse.com',
  phoneDisplay: '+1 (000) 000-0000',
  phoneHref: '+10000000000',
  serviceArea: 'Toronto, the GTA & destination celebrations',
}

export const videos = {
  reception: video('candlelit-reception'),
  ceremony: video('outdoor-wedding-procession'),
  destination: video('beach-reception-setup'),
  inclusive: video('inclusive-wedding-party'),
  corporate: video('illuminated-event-stage'),
  privateEvent: video('milestone-party-setup'),
  destinationVertical: video('beachfront-wedding-venue'),
  ceremonyVertical: video('ceremony-entrance'),
}

export const services = [
  {
    slug: 'full-service-wedding-planning',
    title: 'Full-Service Wedding Planning',
    cardTitle: 'Full-Service Weddings',
    eyebrow: 'From first decision to final toast',
    description: 'A considered, end-to-end planning partnership for couples who want every decision connected and every detail calmly managed.',
    hero: image('floral-reception-newlyweds'),
    cardImage: image('outdoor-wedding-tent'),
    intro: 'We begin with what matters to you, then build the budget framework, vendor team, visual direction and production plan around those priorities. You stay close to the meaningful choices while LUMA holds the moving pieces together.',
    idealFor: 'Couples who want one clear planning partner from venue search through event-day production.',
    includes: ['Vision, priorities and budget framework', 'Venue and vendor research', 'Planning calendar and decision guidance', 'Creative direction and event design', 'Guest experience and floor-plan planning', 'Vendor communication and production oversight', 'Rehearsal, timeline and wedding-day leadership'],
    outcome: 'A celebration that feels personal, visually coherent and easy to be present for.',
  },
  {
    slug: 'partial-wedding-planning',
    title: 'Partial Wedding Planning',
    cardTitle: 'Partial Planning',
    eyebrow: 'Expert structure, right when you need it',
    description: 'For couples who have momentum and key decisions in place, but want professional guidance to organize, refine and complete the plan.',
    hero: image('garden-wedding-portrait'),
    cardImage: image('wedding-hands-detail'),
    intro: 'We meet you where planning stands today. Together, we audit what is booked, identify what is missing, clarify priorities and establish a practical path forward without discarding the work you have already done.',
    idealFor: 'Couples who have secured a venue or core vendors and need an experienced planner to bring the remaining pieces together.',
    includes: ['Planning audit and priority reset', 'Budget and contract organization', 'Remaining vendor recommendations', 'Design refinement and sourcing', 'Timeline and logistics development', 'Vendor confirmation and final coordination', 'Rehearsal and wedding-day management'],
    outcome: 'Your planning regains clarity, cohesion and momentum without starting over.',
  },
  {
    slug: 'wedding-day-coordination',
    title: 'Wedding Day Coordination',
    cardTitle: 'Wedding Coordination',
    eyebrow: 'A thoughtful handoff. A calm wedding day.',
    description: 'A structured transition from your plan to professional execution, with timeline, vendor and guest-flow management.',
    hero: image('wedding-ceremony-hands'),
    cardImage: image('garden-reception-lights'),
    intro: 'Coordination begins before the wedding day. We learn the plan, review contracts, resolve open logistics, confirm vendors and translate your decisions into one working timeline and run of show.',
    idealFor: 'Couples who planned their wedding and want a professional team to carry it across the finish line.',
    includes: ['Planning handoff and document review', 'Vendor confirmations', 'Detailed production timeline', 'Ceremony rehearsal', 'Setup and styling oversight', 'Guest, ceremony and reception flow', 'Teardown coordination'],
    outcome: 'You and your people can celebrate while someone trusted watches the clock, the room and every transition.',
  },
  {
    slug: 'destination-weddings',
    title: 'Destination Wedding Planning',
    cardTitle: 'Destination Weddings',
    eyebrow: 'A wedding weekend with a sense of place',
    description: 'Venue, vendor, travel and guest-experience planning for celebrations beyond home, from Canadian escapes to international weekends.',
    hero: image('sunset-beach-wedding'),
    cardImage: image('beach-wedding-vows'),
    intro: 'A destination wedding is both a celebration and a travel experience. We connect the wedding vision to the practical realities of location, guest movement, local production and multi-day hosting.',
    idealFor: 'Couples planning a wedding weekend away from home who want one connected strategy for event and guest logistics.',
    includes: ['Destination and venue research', 'Local vendor sourcing', 'Guest travel information and room-block coordination', 'Welcome event and farewell planning', 'Cultural and place-sensitive design', 'Multi-day timeline and transportation planning', 'Weather and contingency planning'],
    outcome: 'Guests feel cared for, the destination feels intentional and you are not managing travel logistics from the dance floor.',
  },
  {
    slug: 'event-design',
    title: 'Wedding & Event Design',
    cardTitle: 'Event Design',
    eyebrow: 'Atmosphere, edited with intention',
    description: 'A complete visual direction connecting colour, florals, lighting, stationery, rentals and spatial experience.',
    hero: image('orchid-wedding-installation'),
    cardImage: image('vintage-floral-tablescape'),
    intro: 'Design is more than a mood board. We translate the feeling you want into a coherent visual language, then apply it to the room, guest touchpoints and practical production decisions.',
    idealFor: 'Hosts who have planning support in place but want a strong creative partner to define and execute the visual experience.',
    includes: ['Creative brief and mood boards', 'Palette and material direction', 'Floral, lighting and linen concepts', 'Stationery and signage guidance', 'Rental and tabletop curation', 'Floor plan and focal moments', 'Installation styling and strike oversight'],
    outcome: 'A room that feels immersive and personal, not assembled from disconnected inspiration.',
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Event Planning',
    cardTitle: 'Corporate Events',
    eyebrow: 'Clear production for high-stakes rooms',
    description: 'Strategic planning and production support for galas, launches, conferences, dinners and brand experiences.',
    hero: image('corporate-gala-hall'),
    cardImage: image('lavender-gala-dinner'),
    intro: 'LUMA brings a hospitality lens to business events. We align the audience journey, content, brand expression, suppliers and run of show so your internal team can stay focused on the purpose of the event.',
    idealFor: 'Organizations producing a client, employee, fundraising or brand event that needs one accountable planning lead.',
    includes: ['Event brief, scope and budget framework', 'Venue and supplier management', 'Run of show and speaker logistics', 'Stage, lighting and room production', 'Registration and guest-flow planning', 'Catering and hospitality details', 'On-site production leadership'],
    outcome: 'A polished event that runs on time, feels on-brand and respects the people in the room.',
    cta: 'Request Event Support',
  },
  {
    slug: 'private-events',
    title: 'Private Event Planning',
    cardTitle: 'Private Celebrations',
    eyebrow: 'A generous way to gather',
    description: 'Warm, tailored planning for engagements, anniversaries, birthdays, showers, dinners and milestone celebrations.',
    hero: image('floating-candle-table'),
    cardImage: image('formal-event-couple'),
    intro: 'Private events deserve the same thoughtful structure as larger productions. We shape the guest experience, menu, setting, timing and personal details around the reason everyone is gathering.',
    idealFor: 'Hosts who want to be part of the evening, rather than managing suppliers and timing from behind the scenes.',
    includes: ['Concept and guest-experience planning', 'Venue and supplier sourcing', 'Menu, table and room direction', 'Invitation and guest communication guidance', 'Entertainment and personal moments', 'Timeline, setup and vendor coordination', 'On-site event management'],
    outcome: 'A celebration that feels considered, easy and unmistakably yours.',
  },
]

export const processSteps = [
  { number: '01', title: 'Discover', text: 'We listen for the priorities beneath the inspiration: how you want to host, what matters most and where you want support.' },
  { number: '02', title: 'Define', text: 'Scope, budget, decision roles and milestones become one practical planning framework.' },
  { number: '03', title: 'Design', text: 'We shape the atmosphere, guest journey and visual language, then connect every creative choice to production.' },
  { number: '04', title: 'Coordinate', text: 'Vendors, logistics, timing and contingencies are resolved into one shared event plan.' },
  { number: '05', title: 'Celebrate', text: 'Our team leads the room and the run of show so you can stay inside the experience.' },
]

export const portfolioItems = [
  { slug: 'candlelight-at-the-conservatory', title: 'Candlelight at the Conservatory', category: 'Weddings', style: 'Black Tie', location: 'Toronto concept', image: image('floral-wedding-interior'), orientation: 'tall', note: 'Layered candlelight, soft rose florals and a tailored evening palette.' },
  { slug: 'modern-garden-vows', title: 'Modern Garden Vows', category: 'Weddings', style: 'Garden', location: 'GTA concept', image: image('garden-ceremony-aisle'), orientation: 'wide', note: 'An open-air ceremony shaped by greenery, clean lines and unhurried hosting.' },
  { slug: 'riviera-afterglow', title: 'Riviera Afterglow', category: 'Destination', style: 'Destination', location: 'Coastal concept', image: image('sunset-beach-wedding'), orientation: 'tall', note: 'A golden-hour ceremony and a dinner designed to move with the shoreline.' },
  { slug: 'the-glasshouse-dinner', title: 'The Glasshouse Dinner', category: 'Private', style: 'Intimate', location: 'Toronto concept', image: image('modern-candle-tablescape'), orientation: 'wide', note: 'A modern private dinner with sculptural florals and floating candlelight.' },
  { slug: 'midnight-in-the-city', title: 'Midnight in the City', category: 'Corporate', style: 'Editorial', location: 'Downtown concept', image: image('corporate-gala-hall'), orientation: 'tall', note: 'A brand gala balancing confident stage production with warm hospitality.' },
  { slug: 'golden-hour-by-the-lake', title: 'Golden Hour by the Lake', category: 'Destination', style: 'Romantic', location: 'Ontario concept', image: image('beach-wedding-vows'), orientation: 'wide', note: 'A lakeside weekend with relaxed transitions and a quietly romantic palette.' },
  { slug: 'colour-in-ceremony', title: 'Colour in Ceremony', category: 'Weddings', style: 'Cultural', location: 'Toronto concept', image: image('south-asian-wedding-aisle'), orientation: 'tall', note: 'A vibrant South Asian celebration grounded in family, ritual and layered colour.' },
  { slug: 'orchid-study', title: 'An Orchid Study', category: 'Design Details', style: 'Minimal', location: 'Studio concept', image: image('orchid-wedding-installation'), orientation: 'wide', note: 'A tonal floral direction where material, negative space and light lead.' },
  { slug: 'behind-the-room', title: 'Before the Doors Open', category: 'Behind the Scenes', style: 'Editorial', location: 'Production concept', image: image('string-light-reception'), orientation: 'tall', note: 'The quiet hours of styling, vendor checks and cue-to-cue preparation.' },
  { slug: 'candle-and-sage', title: 'Candle & Sage', category: 'Private', style: 'Intimate', location: 'Muskoka concept', image: image('chicago-loft-tablescape'), orientation: 'wide', note: 'A milestone dinner with textured greenery and softly lit conversation.' },
  { slug: 'heritage-in-bloom', title: 'Heritage in Bloom', category: 'Weddings', style: 'Colourful', location: 'GTA concept', image: image('joyful-indian-wedding'), orientation: 'tall', note: 'A joyful ceremony where colour, custom and guest experience move together.' },
  { slug: 'the-luminous-stage', title: 'The Luminous Stage', category: 'Corporate', style: 'Modern', location: 'Toronto concept', image: image('lavender-gala-dinner'), orientation: 'wide', note: 'An executive event with disciplined production and an atmospheric dinner room.' },
]

export const styleOptions = [
  { name: 'Modern', image: image('modern-candle-tablescape'), copy: 'Clean structure, sculptural details and a warm, edited palette.' },
  { name: 'Romantic', image: image('sunset-beach-wedding'), copy: 'Soft movement, layered candlelight and florals with an easy sense of abundance.' },
  { name: 'Minimal', image: image('orchid-wedding-installation'), copy: 'Fewer gestures, beautifully resolved: material, form and negative space.' },
  { name: 'Garden', image: image('woodland-wedding-ceremony'), copy: 'Natural texture, fresh greens and an atmosphere that belongs to the landscape.' },
  { name: 'Black Tie', image: image('editorial-wedding-couple'), copy: 'Formal, cinematic and precise, with enough warmth to keep the room inviting.' },
  { name: 'Editorial', image: image('black-tie-wedding-portrait'), copy: 'High-contrast compositions, fashion-led details and intentional visual rhythm.' },
  { name: 'Cultural', image: image('indian-wedding-ceremony'), copy: 'Tradition, family and contemporary design held in thoughtful conversation.' },
  { name: 'Destination', image: image('beach-wedding-vows'), copy: 'Place-led design, relaxed hospitality and a connected multi-day guest journey.' },
  { name: 'Colourful', image: image('south-asian-floral-stage'), copy: 'Confident colour stories balanced through texture, light and repetition.' },
  { name: 'Intimate', image: image('white-rose-reception-table'), copy: 'Close conversation, meaningful rituals and detail felt at arm’s length.' },
]

export const testimonials = [
  { quote: 'The best part of the plan was how calm it felt. Every choice had a reason, and the day still felt spontaneous and completely ours.', name: 'Sample story · Garden celebration' },
  { quote: 'We could be present with our guests because the timeline, vendors and room were already being cared for.', name: 'Sample story · City wedding' },
  { quote: 'The design felt elevated without losing the warmth we wanted. Nothing looked borrowed from somebody else’s event.', name: 'Sample story · Private dinner' },
  { quote: 'Our internal team could focus on speakers and guests while production stayed composed behind the scenes.', name: 'Sample story · Corporate gala' },
  { quote: 'The weekend felt connected from arrival through the final breakfast, while every gathering still had its own rhythm.', name: 'Sample story · Destination weekend' },
]

export const journalPosts = [
  {
    slug: 'how-to-choose-a-wedding-planner',
    title: 'How to Choose a Wedding Planner',
    dek: 'A practical way to compare approach, scope and fit before signing a planning agreement.',
    image: image('intimate-wedding-portrait'),
    category: 'Planning', readTime: '7 min read', service: 'full-service-wedding-planning',
    sections: [
      { heading: 'Begin with the support you actually need', body: ['Decide whether you want end-to-end guidance, help completing an existing plan or event-day coordination. Similar titles can describe very different scopes, so compare deliverables rather than labels.'] },
      { heading: 'Look for process, not just taste', body: ['A beautiful portfolio shows visual judgment. Ask how the planner builds budgets, manages decisions, communicates with vendors and handles changes. The process is what protects the experience.'], bullets: ['Who is your day-to-day contact?', 'How are decisions and deadlines tracked?', 'What is included on the event day?', 'How are additional costs approved?'] },
      { heading: 'Use the consultation to test fit', body: ['You do not need identical personalities, but you should feel heard, informed and comfortable asking direct questions. A strong planner can explain boundaries clearly without making the relationship feel rigid.'] },
    ],
  },
  {
    slug: 'wedding-planner-vs-coordinator',
    title: 'Wedding Planner vs. Wedding Coordinator',
    dek: 'The roles overlap on the wedding day, but the planning responsibility begins at very different points.',
    image: image('wedding-ceremony-hands'), category: 'Services', readTime: '6 min read', service: 'wedding-day-coordination',
    sections: [
      { heading: 'A planner helps build the plan', body: ['A full or partial planner supports decisions across budget, venue, vendors, guest experience, design and logistics. Their work begins months before the event.'] },
      { heading: 'A coordinator prepares to execute your plan', body: ['Coordination usually begins closer to the wedding. The coordinator reviews what you arranged, confirms suppliers, builds the production timeline and leads the rehearsal and event day.'] },
      { heading: 'Choose based on responsibility', body: ['If you need help deciding and sourcing, choose planning. If the plan is substantially complete and you need a professional handoff, coordination may be the right scope.'] },
    ],
  },
  {
    slug: 'how-much-does-a-wedding-planner-cost',
    title: 'How Much Does a Wedding Planner Cost?',
    dek: 'Why planning fees vary, what shapes a proposal and how to compare value without relying on one headline number.',
    image: image('gold-accent-place-setting'), category: 'Budget', readTime: '8 min read', service: 'full-service-wedding-planning',
    sections: [
      { heading: 'Scope changes the fee', body: ['Full planning, partial planning, coordination and design are different bodies of work. Guest count, location, event count and production complexity also affect the team and time required.'] },
      { heading: 'Compare what the proposal includes', body: ['Ask about meeting cadence, vendor sourcing, design, rehearsal, on-site hours, assistants, travel and post-event responsibilities. A lower fee can represent a narrower scope rather than a better price.'] },
      { heading: 'Build planning into the full event budget', body: ['Treat professional support as an event cost from the beginning. That creates a more honest budget and helps the planner guide tradeoffs before commitments are made.'] },
    ],
  },
  {
    slug: 'destination-wedding-planning-checklist',
    title: 'Destination Wedding Planning Checklist',
    dek: 'The decisions that connect venue, travel, guests and a multi-day celebration.',
    image: image('muslim-beach-wedding'), category: 'Destination', readTime: '9 min read', service: 'destination-weddings',
    sections: [
      { heading: 'Confirm the practical destination fit', body: ['Review season, travel time, accessibility, local event rules and realistic accommodation options before committing to a venue. Consult official travel and local government resources for current requirements.'] },
      { heading: 'Plan the guest journey', body: ['Give guests clear notice, travel guidance, room information, ground transportation details and a concise schedule. Decide which weekend events are hosted and which are optional.'], bullets: ['Save-the-date timing', 'Passport and travel reminders', 'Room and transport information', 'Welcome and farewell plans', 'Weather alternatives'] },
      { heading: 'Build local knowledge into production', body: ['Experienced local suppliers and a site visit can surface timing, weather, power, access and cultural considerations that are difficult to see from a venue deck.'] },
    ],
  },
  {
    slug: 'wedding-planning-timeline',
    title: 'A 12-Month Wedding Planning Timeline',
    dek: 'A flexible sequence for the major decisions, with room for different priorities and shorter engagements.',
    image: image('outdoor-wedding-conversation'), category: 'Planning', readTime: '10 min read', service: 'partial-wedding-planning',
    sections: [
      { heading: '12–9 months: build the foundation', body: ['Clarify priorities, draft the budget, estimate guest count, research venues and secure the planning, photography and core vendor team.'] },
      { heading: '8–5 months: shape the experience', body: ['Develop design, catering, music, stationery, rentals and guest logistics. This is also the time to connect creative choices to the floor plan and budget.'] },
      { heading: '4–1 months: resolve and communicate', body: ['Finalize invitations, attire, ceremony, transportation, seating, vendor details and the production timeline. Protect the final weeks from unnecessary new ideas.'] },
    ],
  },
  {
    slug: 'questions-before-booking-a-wedding-venue',
    title: 'Questions to Ask Before Booking a Wedding Venue',
    dek: 'Look beyond capacity and aesthetics to understand access, restrictions, logistics and the real event cost.',
    image: image('indoor-wedding-arch'), category: 'Venues', readTime: '7 min read', service: 'full-service-wedding-planning',
    sections: [
      { heading: 'Understand what is included', body: ['Ask which spaces, furniture, staffing, cleaning and setup services are included, and what is charged separately. Request a sample floor plan for your likely guest count.'] },
      { heading: 'Trace the event-day logistics', body: ['Confirm vendor access, loading, parking, power, sound rules, weather alternatives, ceremony flips and the required end time.'] },
      { heading: 'Read the contract as an operating plan', body: ['Payment, cancellation, insurance, security and damage clauses matter, but so do the operational rules that affect vendor choice and guest experience. Seek qualified legal advice for contract questions.'] },
    ],
  },
  {
    slug: 'how-to-build-a-wedding-budget',
    title: 'How to Build a Wedding Budget',
    dek: 'A decision-first budget that reflects your guest count, priorities and production reality.',
    image: image('white-floral-table'), category: 'Budget', readTime: '8 min read', service: 'full-service-wedding-planning',
    sections: [
      { heading: 'Start with the full available amount', body: ['Include contributions, expected payment timing and a contingency. Then identify the few experience priorities that should receive protection as tradeoffs appear.'] },
      { heading: 'Use real proposals early', body: ['Percentage templates are only a starting point. Venue model, guest count, location and design ambition change how costs distribute, so replace estimates with comparable proposals.'] },
      { heading: 'Track committed and projected costs', body: ['Keep taxes, service fees, delivery, labour, travel and gratuity assumptions visible. The budget should show what is signed, what is estimated and what remains unallocated.'] },
    ],
  },
  {
    slug: 'wedding-design-where-to-begin',
    title: 'Wedding Design: Where to Begin',
    dek: 'Move from a folder of inspiration to one coherent atmosphere and guest experience.',
    image: image('vintage-floral-tablescape'), category: 'Design', readTime: '6 min read', service: 'event-design',
    sections: [
      { heading: 'Name the feeling before the objects', body: ['Words such as intimate, luminous, tailored or playful are more useful than immediately selecting flowers and chairs. They create a filter for later choices.'] },
      { heading: 'Let the venue participate', body: ['Respond to architecture, landscape, existing colour and natural light. Strong event design can contrast with a venue, but it should do so intentionally.'] },
      { heading: 'Repeat a small set of ideas', body: ['A limited palette, material story and shape language creates cohesion across stationery, ceremony, table, lighting and signage without making every element identical.'] },
    ],
  },
  {
    slug: 'what-a-corporate-event-planner-manages',
    title: 'What a Corporate Event Planner Actually Manages',
    dek: 'The production, hospitality and risk details behind a polished business event.',
    image: image('corporate-gala-hall'), category: 'Corporate', readTime: '7 min read', service: 'corporate-events',
    sections: [
      { heading: 'One plan connects many teams', body: ['The planner connects venue, audiovisual, catering, speakers, registration, brand, accessibility, security and internal stakeholders through one schedule and responsibility map.'] },
      { heading: 'The run of show protects the purpose', body: ['A useful run of show includes cues, transitions, ownership and contingency decisions, not only program times. It helps every supplier act from the same information.'] },
      { heading: 'Hospitality is part of production', body: ['Arrival, wayfinding, food timing, room comfort and departure shape how guests receive the content. These details deserve the same discipline as the stage.'] },
    ],
  },
  {
    slug: 'create-a-better-guest-experience',
    title: 'How to Create a Better Guest Experience',
    dek: 'Thoughtful information, comfortable pacing and small acts of hosting often matter more than spectacle.',
    image: image('pastel-wedding-reception'), category: 'Hosting', readTime: '6 min read', service: 'private-events',
    sections: [
      { heading: 'Remove uncertainty before arrival', body: ['Give guests concise information about timing, travel, attire, accessibility and what to expect. Clear communication is a form of hospitality.'] },
      { heading: 'Design for transitions', body: ['Consider what guests see, hear and do between ceremony, cocktails, dinner and dancing. Seating, shade, sound, service and wayfinding all affect the emotional pace.'] },
      { heading: 'Choose personal details that serve people', body: ['A meaningful welcome, comfortable seating or a well-timed late-night bite can be more memorable than a decorative detail with no connection to your guests.'] },
    ],
  },
]

export const faqGroups = [
  {
    title: 'Working together',
    items: [
      { question: 'When should we contact a wedding planner?', answer: 'For full planning, reaching out before a venue or major suppliers are booked gives the planner the most ability to shape scope, budget and logistics. Coordination can begin later, but availability and handoff timing vary.' },
      { question: 'Do you offer both planning and event design?', answer: 'This concept service model includes planning and design as separate or connected scopes. A proposal would clarify responsibility for creative direction, sourcing, production and installation.' },
      { question: 'Can you work with vendors we already booked?', answer: 'Yes. Partial planning and coordination are designed to respect existing decisions. The first step is a clear review of contracts, responsibilities and outstanding needs.' },
      { question: 'How many events do you manage at once?', answer: 'This demo does not claim a real capacity or availability calendar. A real studio should explain its team structure and confirm the lead planner assigned to your date.' },
    ],
  },
  {
    title: 'Investment & scope',
    items: [
      { question: 'How is planning priced?', answer: 'Services are presented as custom proposals because guest count, location, planning stage and production complexity shape the work. Any figures on this demo would be illustrative, not a binding quote.' },
      { question: 'What is usually outside a planning fee?', answer: 'Venue, suppliers, rentals, travel, permits and event purchases are generally separate from professional planning fees. A real proposal should list inclusions, exclusions and reimbursable costs clearly.' },
      { question: 'Do you manage vendor contracts?', answer: 'A planner can organize timelines, requirements and communication, but clients remain parties to their vendor agreements. Legal questions should be reviewed by a qualified professional.' },
    ],
  },
  {
    title: 'Destinations & logistics',
    items: [
      { question: 'Can you plan events outside Toronto?', answer: 'LUMA is presented as a concept studio serving Toronto, the GTA and destination celebrations. Real travel scope, fees and local support would be confirmed in a proposal.' },
      { question: 'Do you book guest travel?', answer: 'Planning can coordinate event-related guest information, room blocks and ground transportation. Regulated travel booking should be handled by an appropriately qualified travel professional where required.' },
      { question: 'What happens if weather changes the plan?', answer: 'Outdoor and destination events should have an operational alternative defined early enough to reserve appropriate space, rentals and staffing. The backup should feel intentional, not improvised.' },
    ],
  },
]

export const routeMeta = [
  ['/', 'LUMA Weddings & Events | Toronto Wedding Planner Demo', 'A concept Toronto wedding and event planning studio for thoughtful, beautifully produced celebrations.'],
  ['/about', 'About LUMA | Thoughtful Wedding & Event Planning', 'Meet the point of view behind LUMA, a concept planning studio centred on calm coordination and personal celebrations.'],
  ['/services', 'Wedding & Event Planning Services | LUMA Toronto', 'Explore full planning, coordination, destination weddings, event design, corporate events and private celebrations.'],
  ...services.map((service) => [`/services/${service.slug}`, `${service.title} | LUMA`, service.description]),
  ['/portfolio', 'Wedding & Event Portfolio | LUMA', 'Explore conceptual wedding, destination, corporate and private event stories from LUMA.'],
  ['/portfolio/weddings', 'Wedding Portfolio | LUMA', 'Explore editorial wedding concepts with thoughtful guest experiences, design and coordination.'],
  ['/portfolio/destination', 'Destination Wedding Portfolio | LUMA', 'Explore conceptual coastal and destination wedding weekends designed with a sense of place.'],
  ['/portfolio/corporate', 'Corporate Event Portfolio | LUMA', 'Explore polished gala and brand-event concepts balancing production with hospitality.'],
  ['/experience', 'The Planning Experience | LUMA Weddings & Events', 'Discover LUMA’s five-step planning process from first conversation to event-day leadership.'],
  ['/pricing', 'Wedding Planner Pricing & Investment Guide | LUMA', 'Review demo investment guidance and the factors that shape a custom wedding or event planning proposal.'],
  ['/reviews', 'Demo Client Stories | LUMA Weddings & Events', 'Read clearly labelled sample client stories that demonstrate the LUMA service experience.'],
  ['/journal', 'Wedding & Event Planning Journal | LUMA', 'Practical guidance for wedding planning, budgets, venues, destinations, design and guest experience.'],
  ...journalPosts.map((post) => [`/journal/${post.slug}`, `${post.title} | LUMA Journal`, post.dek]),
  ['/faq', 'Wedding Planner FAQ | LUMA Toronto', 'Answers about wedding planning scope, coordination, investment, destination logistics and working together.'],
  ['/contact', 'Plan Your Event | Contact LUMA', 'Start a demo wedding or event planning inquiry with LUMA. No form data is sent without a configured service.'],
  ['/privacy', 'Privacy | LUMA Weddings & Events Demo', 'Privacy information for the LUMA wedding and event planning demo website.'],
  ['/terms', 'Terms | LUMA Weddings & Events Demo', 'Terms for using the LUMA concept wedding and event planning website.'],
]

export { image }
