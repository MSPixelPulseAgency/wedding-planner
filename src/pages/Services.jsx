import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { services, image, portfolioItems } from '../data/siteData'

export function ServicesIndex() {
  return (
    <>
      <SEO title="Wedding & Event Planning Services | LUMA Toronto" description="Explore full planning, coordination, destination weddings, event design, corporate events and private celebrations." path="/services" />
      <PageHero eyebrow="Services" title="The right support changes the whole experience." text="Choose a complete planning partnership, focused guidance or event-day leadership. Each scope is built around clear responsibilities and calm communication." image={image('pastel-wedding-reception')} imageAlt="Elegant pastel wedding reception tables prepared for guests" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }]} />
      <section className="section services-index">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Planning, design & production" title="Seven ways to begin." text="Not sure which scope fits? Start with what has already been decided, what still feels uncertain and how present you want to be in the work." /></Reveal>
          <div className="services-index__list">
            {services.map((service, index) => (
              <Reveal as="article" className="service-row" key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <span className="service-row__number">0{index + 1}</span>
                  <MediaImage src={service.cardImage} alt={`${service.cardTitle} planning concept`} />
                  <div><p className="eyebrow">{service.eyebrow}</p><h2>{service.cardTitle}</h2><p>{service.description}</p></div>
                  <span className="service-row__arrow"><ArrowUpRight aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--olive service-choice">
        <div className="container service-choice__grid">
          <Reveal><p className="eyebrow">A useful starting point</p><h2>Planning decides.<br />Coordination executes.</h2></Reveal>
          <Reveal><p>If you need help choosing venues, vendors, budget priorities or design direction, a planning scope is likely the better fit. If the plan is substantially complete and you need a professional handoff, coordination may be enough.</p><Link className="button button--light" to="/journal/wedding-planner-vs-coordinator">Compare the roles <ArrowRight size={17} aria-hidden="true" /></Link></Reveal>
        </div>
      </section>
    </>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/404" replace />
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)
  const relevantPortfolio = portfolioItems.filter((item) => {
    if (slug === 'corporate-events') return item.category === 'Corporate'
    if (slug === 'destination-weddings') return item.category === 'Destination'
    if (slug === 'private-events') return item.category === 'Private'
    return item.category === 'Weddings' || item.category === 'Design Details'
  }).slice(0, 3)
  const path = `/services/${service.slug}`
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.cardTitle, to: path }]

  return (
    <>
      <SEO title={`${service.title} | LUMA`} description={service.description} path={path} breadcrumbs={breadcrumbs} />
      <PageHero eyebrow={service.eyebrow} title={service.title} text={service.description} image={service.hero} imageAlt={`${service.title} visual concept`} breadcrumbs={breadcrumbs} cta={{ label: service.cta || 'Plan Your Event', to: '/contact' }} />
      <section className="section service-detail-intro">
        <div className="container service-detail-intro__grid">
          <Reveal><p className="eyebrow">The service</p><h2>{service.outcome}</h2></Reveal>
          <Reveal><p className="lead">{service.intro}</p><div className="ideal-for glass-surface"><Sparkles size={20} aria-hidden="true" /><div><span>Ideal for</span><p>{service.idealFor}</p></div></div></Reveal>
        </div>
      </section>
      <section className="section section--ivory inclusions-section">
        <div className="container inclusions-section__grid">
          <Reveal className="inclusions-section__media"><MediaImage src={service.cardImage} alt={`${service.cardTitle} service inspiration`} /><span className="glass-surface">Scope is tailored after a discovery conversation.</span></Reveal>
          <Reveal className="inclusions-section__content"><p className="eyebrow">A tailored scope may include</p><h2>Connected decisions. One working plan.</h2><ul>{service.includes.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><Link className="button button--dark" to="/contact">{service.cta || 'Start an Inquiry'} <ArrowRight size={17} aria-hidden="true" /></Link></Reveal>
        </div>
      </section>
      <section className="section related-work">
        <div className="container"><Reveal><SectionHeading eyebrow="Related work" title="See the thinking in context." text="These are conceptual portfolio stories, created to demonstrate range without representing verified client events." /></Reveal><div className="related-work__grid">{relevantPortfolio.map((item) => <Reveal as="article" key={item.slug}><Link to="/portfolio"><MediaImage src={item.image} alt={`${item.title} concept`} /><span>{item.category} · {item.style}</span><h3>{item.title}</h3><p>{item.note}</p></Link></Reveal>)}</div></div>
      </section>
      <section className="section section--olive related-services">
        <div className="container"><Reveal><SectionHeading eyebrow="Continue exploring" title="A scope for every planning stage." /></Reveal><div className="related-services__grid">{related.map((item) => <Link key={item.slug} to={`/services/${item.slug}`}><span>{item.cardTitle}</span><ArrowUpRight aria-hidden="true" /></Link>)}</div></div>
      </section>
    </>
  )
}
