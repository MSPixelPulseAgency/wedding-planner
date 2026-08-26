import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { PortfolioGallery } from '../components/sections/PortfolioGallery'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { image, portfolioItems } from '../data/siteData'

const variants = {
  '/portfolio': { category: 'All', title: 'Celebrations with atmosphere.', eyebrow: 'The portfolio', text: 'A conceptual collection of weddings, destination weekends, private celebrations, corporate events and design studies.', hero: 'floral-wedding-interior' },
  '/portfolio/weddings': { category: 'Weddings', title: 'Wedding stories, personally composed.', eyebrow: 'Wedding portfolio', text: 'Editorial ceremony, reception and cultural celebration concepts shaped around the people hosting them.', hero: 'floral-reception-newlyweds' },
  '/portfolio/destination': { category: 'Destination', title: 'A sense of place in every detail.', eyebrow: 'Destination portfolio', text: 'Coastal and travel-led wedding concepts connecting the celebration to a thoughtful guest weekend.', hero: 'sunset-beach-wedding' },
  '/portfolio/corporate': { category: 'Corporate', title: 'Business events with genuine hospitality.', eyebrow: 'Corporate portfolio', text: 'Gala, dinner and brand-event concepts with disciplined production and an audience-first experience.', hero: 'corporate-gala-hall' },
}

export default function Portfolio() {
  const { pathname } = useLocation()
  const variant = variants[pathname] || variants['/portfolio']
  const title = `${variant.eyebrow} | LUMA Weddings & Events`
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, ...(pathname !== '/portfolio' ? [{ label: variant.category, to: pathname }] : [])]
  return (
    <>
      <SEO title={title} description={variant.text} path={pathname} breadcrumbs={breadcrumbs} />
      <PageHero eyebrow={variant.eyebrow} title={variant.title} text={variant.text} image={image(variant.hero)} imageAlt={`${variant.category} event portfolio concept`} breadcrumbs={breadcrumbs} />
      <section className="section portfolio-page">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Concept stories" title="Browse by feeling, format or setting." text="Open any story for the full image and planning note. Use the filters to move between event types." /></Reveal>
          <PortfolioGallery items={portfolioItems} initialCategory={variant.category} />
        </div>
      </section>
      <section className="section section--olive portfolio-note"><div className="container"><Reveal><p className="eyebrow">A note about this work</p><h2>Created to show possibility.<br />Clearly presented as a demo.</h2><p>The names, venues and event stories are conceptual. Stock imagery does not imply endorsement by the people pictured or represent completed LUMA client work.</p><Link className="button button--light" to="/contact">Build your own direction <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
