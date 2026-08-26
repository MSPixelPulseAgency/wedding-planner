import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Check, Compass, HeartHandshake, MapPin, Sparkles } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { industryGroups } from '../data/industryData'

const iconCycle = [HeartHandshake, Sparkles, CalendarCheck, Compass, MapPin]

export function IndustryHub({ groupKey }) {
  const group = industryGroups[groupKey]
  if (!group) return <Navigate to="/404" replace />
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: group.label, to: `/${groupKey}` }]
  return (
    <>
      <SEO title={`${group.label} | LUMA Weddings & Events`} description={group.text} path={`/${groupKey}`} breadcrumbs={breadcrumbs} />
      <PageHero eyebrow={group.eyebrow} title={group.title} text={group.text} image={group.image} imageAlt={`${group.label} planning by LUMA`} breadcrumbs={breadcrumbs} cta={{ label: 'Start an inquiry', to: '/contact' }} />
      <section className="section industry-intro">
        <div className="container">
          <SectionHeading eyebrow={`${group.items.length} ways to work together`} title={`Find the ${group.label.toLowerCase()} support that fits the real work.`} text="Every scope is presented as a planning model for this demo. A real proposal would confirm responsibilities, timing, staffing, travel and supplier costs." />
          <div className="industry-grid">
            {group.items.map((item, index) => {
              const Icon = iconCycle[index % iconCycle.length]
              return (
                <Reveal as="article" className={`industry-card industry-card--${item.accent}`} key={item.slug}>
                  <Link to={`/${groupKey}/${item.slug}`}>
                    <MediaImage src={item.hero} alt={`${item.title} editorial planning inspiration`} position="center" mobilePosition="center 30%" sizes="(max-width: 700px) 100vw, 50vw" />
                    <div className="industry-card__content">
                      <span><Icon size={18} aria-hidden="true" />{String(index + 1).padStart(2, '0')}</span>
                      <h2>{item.title}</h2>
                      <p>{item.summary}</p>
                      <strong>Explore this service <ArrowRight size={17} aria-hidden="true" /></strong>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section industry-band">
        <div className="container industry-band__inner">
          <Reveal><p className="eyebrow">Not sure where to begin?</p><h2>Start with the outcome. We’ll map the responsibility.</h2></Reveal>
          <Reveal><p>Share what is decided, what is still moving and where the pressure sits. The first conversation can focus on fit before a package name.</p><Link className="button button--light" to="/contact">Tell us what you’re planning <ArrowRight size={17} aria-hidden="true" /></Link></Reveal>
        </div>
      </section>
    </>
  )
}

export function IndustryDetail({ groupKey }) {
  const { slug } = useParams()
  const group = industryGroups[groupKey]
  const item = group?.items.find((entry) => entry.slug === slug)
  if (!item) return <Navigate to="/404" replace />
  const path = `/${groupKey}/${item.slug}`
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: group.label, to: `/${groupKey}` }, { label: item.title, to: path }]
  const related = group.items.filter((entry) => entry.slug !== item.slug).slice(0, 3)
  return (
    <>
      <SEO title={`${item.title} | LUMA`} description={item.summary} path={path} breadcrumbs={breadcrumbs} />
      <PageHero eyebrow={group.eyebrow} title={item.title} text={item.summary} image={item.hero} imageAlt={`${item.title} editorial inspiration`} breadcrumbs={breadcrumbs} cta={{ label: 'Discuss your event', to: '/contact' }} />
      <section className={`section offering-story offering-story--${item.accent}`}>
        <div className="container offering-story__grid">
          <Reveal><p className="eyebrow">A connected planning scope</p><h2>Beautiful is only useful when the experience works.</h2><p className="lead">{item.summary}</p></Reveal>
          <Reveal className="offering-story__details">
            <p>{item.idealFor}</p>
            <h3>Planning can include</h3>
            <ul>{item.includes.map((include) => <li key={include}><Check size={17} aria-hidden="true" />{include}</li>)}</ul>
            <p className="offering-note"><strong>Demo scope note:</strong> Specific deliverables, supplier responsibilities, travel and pricing are confirmed only in a written proposal.</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--ivory offering-process">
        <div className="container">
          <SectionHeading eyebrow="How the work moves" title="Clarity at every handoff." text="A simple framework keeps decisions visible and gives suppliers one reliable source of truth." />
          <div className="offering-process__grid">
            {[['01', 'Discover', 'Priorities, people, access needs, timing and the event’s purpose.'], ['02', 'Define', 'Scope, budget framework, decisions, dependencies and responsibilities.'], ['03', 'Develop', 'Suppliers, design, guest flow, content and production details.'], ['04', 'Deliver', 'Final confirmations, on-site leadership, contingencies and closeout.']].map(([number, title, text]) => <Reveal as="article" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section related-offerings">
        <div className="container"><p className="eyebrow">Explore related {group.label.toLowerCase()}</p><div className="related-offerings__grid">{related.map((entry) => <Link key={entry.slug} to={`/${groupKey}/${entry.slug}`}><MediaImage src={entry.hero} alt={`${entry.title} inspiration`} /><span>{group.label}</span><h2>{entry.title}</h2><ArrowRight aria-hidden="true" /></Link>)}</div></div>
      </section>
      <section className="section final-inquiry"><div className="container glass-surface"><p className="eyebrow">Make the next decision easier</p><h2>Tell us what you’re planning.</h2><p>A useful inquiry can be brief. Share the event type, place, timing and the support that would change the experience.</p><div className="button-row"><Link className="button button--dark" to="/contact">Start an inquiry <ArrowRight size={17} aria-hidden="true" /></Link><a className="button button--ghost" href="https://wa.me/13658830338" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></div></div></section>
    </>
  )
}
