import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Quote, Sparkles, UserRound } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { SEO } from '../components/common/SEO'
import { CinematicVideo } from '../components/common/CinematicVideo'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { SiteSearch } from '../components/common/SiteSearch'
import { SectionHeading } from '../components/common/SectionHeading'
import { PortfolioGallery } from '../components/sections/PortfolioGallery'
import { PublicVideoGrid } from '../components/sections/PublicVideoGrid'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { faqGroups, image, journalPosts, portfolioItems, processSteps, styleOptions, testimonials, videos } from '../data/siteData'
import { eventOfferings, serviceOfferings, weddingOfferings } from '../data/industryData'

const strengths = [
  'One clear point of contact', 'Planning built around your priorities', 'Thoughtful vendor coordination',
  'Detailed timelines and logistics', 'Design consistency from invitation to room', 'Calm event-day leadership',
]
const planningLanes = [
  { label: 'Weddings', to: '/weddings', items: weddingOfferings.slice(0, 2) },
  { label: 'Events', to: '/events', items: eventOfferings.slice(0, 2) },
  { label: 'Production', to: '/services', items: serviceOfferings.slice(0, 2) },
]
const featuredPlanning = planningLanes.flatMap((lane) => lane.items.map((item) => ({ ...item, lane: lane.label, to: `/${lane.label === 'Production' ? 'services' : lane.label.toLowerCase()}/${item.slug}` })))

export default function Home() {
  const [activeStyle, setActiveStyle] = useState(styleOptions[0])
  const reduceMotion = useReducedMotion()
  const previewFaqs = faqGroups.flatMap((group) => group.items).slice(0, 6)
  return (
    <>
      <SEO title="LUMA Weddings & Events | Toronto Wedding Planner Demo" description="A concept Toronto wedding and event planning studio for thoughtful, beautifully produced celebrations." />
      <section className="home-hero">
        <MediaImage src={image('floral-wedding-interior')} alt="Candlelit wedding reception with layered floral design" className="home-hero__background" eager sizes="100vw" />
        <div className="home-hero__shade" />
        <div className="home-hero__content container">
          <motion.div className="home-hero__copy" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="eyebrow eyebrow--light">Weddings • Events • Celebrations</p>
            <h1>Beautifully orchestrated.<br /><em>Entirely yours.</em></h1>
            <p>Planning, design, décor and production for weddings and events across Toronto, the GTA, Canada and select destinations.</p>
            <div className="button-row">
              <Link className="button button--light" to="/contact">Plan Your Event <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link className="button button--glass" to="/portfolio">Explore Our Work <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <SiteSearch className="home-hero__search" showPopular />
          </motion.div>
          <motion.div className="home-hero__video-card" initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.95, delay: reduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}>
            <CinematicVideo src={videos.ceremony} poster={image('woodland-wedding-ceremony')} posterAlt="Newlyweds walking toward an outdoor wedding ceremony" priority showControl />
            <span className="home-hero__media-chip home-hero__media-chip--top"><MapPin size={17} aria-hidden="true" />Toronto + GTA</span>
            <span className="home-hero__media-chip home-hero__media-chip--bottom"><Sparkles size={17} aria-hidden="true" />Planning • Design • Production</span>
          </motion.div>
        </div>
      </section>

      <div className="container intro-strip glass-surface">
        {[['Weddings', '/weddings'], ['Events', '/events'], ['Services', '/services'], ['Gallery', '/gallery']].map(([label, to], index) => <Link key={to} to={to}><span>0{index + 1}</span>{label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}
      </div>

      <section className="section editorial-intro" id="introduction">
        <div className="container editorial-intro__grid">
          <Reveal className="editorial-intro__image">
            <MediaImage src={image('garden-wedding-portrait')} alt="Newlyweds standing together in a floral garden setting" />
            <div className="floating-note glass-surface"><span>Our approach</span><strong>Feeling first.<br />Details in service of it.</strong></div>
          </Reveal>
          <Reveal className="editorial-intro__copy" delay={0.1}>
            <p className="eyebrow">The LUMA point of view</p>
            <h2>The feeling comes first.</h2>
            <p className="lead">Planning should protect your ability to enjoy the celebration, not turn you into its project manager.</p>
            <p>We begin with how you want the room to feel and how you want to host. Then every budget, design and logistics decision has a clear purpose.</p>
            <Link className="text-link" to="/about">Discover our point of view <ArrowRight size={17} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory services-showcase">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Weddings, events & production" title="Planning that meets you where you are." text="Explore 43 focused planning paths across weddings, corporate and social events, creative direction and on-site production." action={<Link className="text-link" to="/services">Explore all services <ArrowRight size={17} aria-hidden="true" /></Link>} /></Reveal>
          <div className="service-grid">
            {featuredPlanning.map((service, index) => (
              <Reveal as="article" className={`service-card service-card--${index % 3}`} key={`${service.lane}-${service.slug}`} delay={(index % 3) * 0.06}>
                <Link to={service.to} aria-label={`Explore ${service.title}`}>
                  <MediaImage src={service.hero} alt={`${service.title} planning inspiration`} />
                  <span className="service-card__number">0{index + 1}</span>
                  <div className="service-card__content"><small>{service.lane}</small><h3>{service.title}</h3><p>{service.summary}</p><span>Explore service <ArrowUpRight size={16} aria-hidden="true" /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-break">
        <CinematicVideo src={videos.ceremony} poster={image('woodland-wedding-ceremony')} posterAlt="Outdoor wedding ceremony surrounded by trees and flowers" />
        <div className="cinematic-break__shade" />
        <Reveal className="cinematic-break__copy"><p className="eyebrow eyebrow--light">Plan • Design • Produce</p><h2>From first sketch<br />to final toast.</h2></Reveal>
      </section>

      <section className="section featured-work">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Selected stories" title="Celebrations with a point of view." text="Conceptual portfolio stories presented to demonstrate visual direction, planning range and guest-experience thinking." action={<Link className="text-link" to="/gallery">Explore 70 images <ArrowRight size={17} aria-hidden="true" /></Link>} /></Reveal>
          <PortfolioGallery items={portfolioItems} limit={8} />
        </div>
      </section>

      <PublicVideoGrid showAction />

      <section className="section section--olive experience-preview">
        <div className="container">
          <Reveal><SectionHeading eyebrow="The planning experience" title="A clear path from possibility to presence." text="The process creates room for creativity because responsibilities, decisions and timing stay visible." /></Reveal>
          <div className="process-grid">
            {processSteps.map((step) => <Reveal as="article" key={step.number} className="process-card"><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}
          </div>
          <Reveal><Link className="button button--light" to="/experience">See how planning unfolds <ArrowRight size={17} aria-hidden="true" /></Link></Reveal>
        </div>
      </section>

      <section className="section why-luma">
        <div className="container why-luma__grid">
          <Reveal className="why-luma__copy">
            <p className="eyebrow">Why LUMA</p><h2>Quietly thorough.<br />Warmly collaborative.</h2>
            <p>Premium service is not about making the process feel mysterious. It is about clear guidance, good judgment and details resolved before they ask for your attention.</p>
            <Link className="text-link" to="/contact">Start a conversation <ArrowRight size={17} aria-hidden="true" /></Link>
          </Reveal>
          <div className="strength-list">
            {strengths.map((strength, index) => <Reveal key={strength} className="strength-item" delay={index * 0.04}><span><Check size={16} aria-hidden="true" /></span><p>{strength}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--ivory style-explorer">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Style explorer" title="A visual language that feels like you." text="Choose a direction to see how atmosphere can shift while the planning discipline stays the same." /></Reveal>
          <div className="style-explorer__chips" role="group" aria-label="Explore event styles">
            {styleOptions.map((option) => <button type="button" key={option.name} className={activeStyle.name === option.name ? 'active' : ''} aria-pressed={activeStyle.name === option.name} onClick={() => setActiveStyle(option)}>{option.name}</button>)}
          </div>
          <motion.div className="style-explorer__panel" key={activeStyle.name} initial={reduceMotion ? false : { opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            <MediaImage src={activeStyle.image} alt={`${activeStyle.name} wedding and event style inspiration`} />
            <div className="glass-surface"><span>Selected direction</span><h3>{activeStyle.name}</h3><p>{activeStyle.copy}</p><Link className="text-link" to="/contact">Build your direction <ArrowRight size={17} aria-hidden="true" /></Link></div>
          </motion.div>
        </div>
      </section>

      <section className="section stories-preview">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Demo client stories" title="The experience, in their words." text="Clearly labelled sample stories show how service could feel without presenting fictional reviews as verified testimonials." /></Reveal>
          <div className="testimonial-track">
            {testimonials.slice(0, 5).map((story) => {
              const [reviewerName, eventType] = story.name.split(' · ')
              return (
                <Reveal as="blockquote" key={story.name} className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__avatar" aria-hidden="true"><UserRound size={19} /></span>
                    <cite><strong>{reviewerName}</strong><span>{eventType}</span></cite>
                  </div>
                  <div className="testimonial-card__quote">
                    <Quote className="testimonial-card__quote-mark testimonial-card__quote-mark--open" aria-hidden="true" />
                    <p>{story.quote}</p>
                    <Quote className="testimonial-card__quote-mark testimonial-card__quote-mark--close" aria-hidden="true" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--olive journal-preview">
        <div className="container">
          <Reveal><SectionHeading eyebrow="The journal" title="Useful guidance, without the overwhelm." text="Practical answers for planning decisions, venue conversations, budgets and destination logistics." action={<Link className="text-link text-link--light" to="/journal">Read all guides <ArrowRight size={17} aria-hidden="true" /></Link>} /></Reveal>
          <div className="journal-grid">
            {journalPosts.slice(0, 3).map((post) => <Reveal as="article" className="journal-card" key={post.slug}><Link to={`/journal/${post.slug}`}><MediaImage src={post.image} alt={`${post.title} planning guide`} /><span>{post.category} · {post.readTime}</span><h3>{post.title}</h3><p>{post.dek}</p></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section faq-preview">
        <div className="container faq-preview__grid">
          <Reveal><p className="eyebrow">Good questions, clear answers</p><h2>Before we begin.</h2><p>Scope, timing and responsibilities should be easy to understand before a proposal is signed.</p><Link className="text-link" to="/faq">Explore every FAQ <ArrowRight size={17} aria-hidden="true" /></Link></Reveal>
          <Reveal><FAQAccordion items={previewFaqs} idPrefix="home-faq" /></Reveal>
        </div>
      </section>

      <section className="final-cta">
        <MediaImage src={image('floral-reception-newlyweds')} alt="Newlyweds embracing in a softly lit floral reception" className="final-cta__media" />
        <div className="final-cta__shade" />
        <Reveal className="final-cta__panel glass-surface"><p className="eyebrow eyebrow--light">Your celebration starts with a conversation</p><h2>Tell us what<br />you’re planning.</h2><p>Share the feeling, the practical details and where you want support. It does not need to be a perfect brief.</p><div className="button-row"><Link className="button button--light" to="/contact">Start an Inquiry <ArrowUpRight size={17} aria-hidden="true" /></Link><a className="button button--glass" href="mailto:hello@mspixelpulse.com"><Mail size={17} aria-hidden="true" />Email</a></div></Reveal>
      </section>
    </>
  )
}
