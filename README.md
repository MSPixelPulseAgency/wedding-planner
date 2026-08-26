# LUMA Weddings & Events

LUMA is a premium React/Vite wedding and event planning demo created for the MSPixelPulse portfolio. It presents a fictional Toronto/GTA concept studio with destination capabilities, complete service architecture, editorial content, a cinematic media system and an honest frontend-only inquiry experience.

## Live site

- Production: https://wedding-planner.vercel.app/
- Repository: https://github.com/MSPixelPulseAgency/wedding-planner

## Experience highlights

- Cinematic, muted hero video with a reduced-motion image fallback
- Reusable liquid-glass navigation, panels and mobile menu
- Seven dedicated planning, design and production service pages
- Filterable editorial portfolio with an accessible keyboard lightbox
- Five-stage interactive planning experience
- Transparent demo investment guidance and project-fit prompts
- Clearly labelled sample client stories
- Ten long-form planning journal routes
- Animated accessible FAQ accordions
- Three-step inquiry that validates locally and prepares an email without pretending to submit data
- Custom legal pages and 404 experience
- Responsive layouts from 360px through 1440px+

## Routes

The production build creates 32 route-specific HTML entry documents with unique titles, descriptions, canonicals, Open Graph metadata and JSON-LD. Core routes include:

- `/`, `/about`, `/experience`, `/pricing`, `/reviews`, `/faq`, `/contact`
- `/services` plus seven dedicated service routes
- `/portfolio`, `/portfolio/weddings`, `/portfolio/destination`, `/portfolio/corporate`
- `/journal` plus ten editorial guide routes
- `/privacy`, `/terms`, custom `/404`

## Technology

- React 19
- Vite 8
- React Router
- Framer Motion
- Lucide React
- React Helmet Async
- CSS custom properties and responsive layout primitives
- Vitest and Testing Library
- Sharp-powered social image generation

## Local setup

Use Node.js 22.x to match the production runtime.

```bash
npm install
npm run dev
```

## Quality commands

```bash
npm run lint
npm test
npm run build
npm run check:seo
```

`npm run build` runs Vite and then creates the route documents, `sitemap.xml`, and `og-luma.jpg` in `dist/`.

## Media

The project includes 46 locally hosted WebP photographs and eight short muted MP4 clips. Source pages and creator credits are recorded in [CREDITS.md](./CREDITS.md). Media was sourced from Pexels under the Pexels licence and optimized for this demonstration.

Run `npm run media` only when intentionally rebuilding the local media set. The script downloads the documented sources and transcodes them with `cwebp` and `ffmpeg`.

## Demo-content note

LUMA is not presented as an operating planning company. Event stories, testimonials, packages and availability are illustrative. The site intentionally avoids invented awards, review ratings, founder biographies, certifications, venue partnerships, client names, office addresses and working social handles.

Contact placeholders:

- `hello@mspixelpulse.com`
- `+1 (000) 000-0000`
- Social links and WhatsApp: intentionally unconfigured

Before adapting this project for a real client, replace all business details, connect an approved form endpoint, obtain business-specific privacy/legal review and verify every public claim.

## Deployment

Vercel settings:

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x

`vercel.json` serves generated route documents first and falls back to the React app for unmatched client routes.
