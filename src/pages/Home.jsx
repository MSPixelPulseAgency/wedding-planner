import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { SEO } from '../components/common/SEO'
import { CinematicVideo } from '../components/common/CinematicVideo'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { PortfolioGallery } from '../components/sections/PortfolioGallery'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { faqGroups, image, journalPosts, portfolioItems, processSteps, services, styleOptions, testimonials, videos } from '../data/siteData'

const strengths = [
  'One clear point of contact', 'Planning built around your priorities', 'Thoughtful vendor coordination',
  'Detailed timelines and logistics', 'Design consistency from invitation to room', 'Calm event-day leadership',
]

export default function Home() {
  const [activeStyle, setActiveStyle] = useState(styleOptions[0])
  const reduceMotion = useReducedMotion()
  const previewFaqs = faqGroups.flatMap((group) => group.items).slice(0, 6)
  return (
    <>
      <SEO title="LUMA Weddings & Events | Toronto Wedding Planner Demo" description="A concept Toronto wedding and event planning studio for thoughtful, beautifully produced celebrations." />
      <section className="home-hero">
        <CinematicVideo src={videos.reception} poster={image('floral-wedding-interior')} posterAlt="Candlelit wedding reception with layered floral design" className="home-hero__media" priority />
        <div className="home-hero__shade" />
        <motion.div className="home-hero__content container" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow eyebrow--light">Weddings • Celebrations • Events</p>
          <h1>Beautifully orchestrated.<br /><em>Entirely yours.</em></h1>
          <p>LUMA designs and coordinates weddings and events with an editorial eye, thoughtful planning and calm execution.</p>
          <div className="button-row">
            <Link className="button button--light" to="/contact">Plan Your Event <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="button button--glass" to="/portfolio">Explore Our Work <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </motion.div>
        <a className="scroll-cue" href="#introduction"><span>Scroll to discover</span><ArrowDown size={18} aria-hidden="true" /></a>
      </section>

      <div className="container intro-strip glass-surface">
        {services.slice(0, 4).map((service, index) => (
          <Link key={service.slug} to={`/services/${service.slug}`}><span>0{index + 1}</span>{service.cardTitle}<ArrowUpRight size={16} aria-hidden="true" /></Link>
        ))}
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
          <Reveal><SectionHeading eyebrow="Ways to work together" title="Planning that meets you where you are." text="From a complete planning partnership to focused coordination or corporate production, every scope begins with clear responsibility." /></Reveal>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal as="article" className={`service-card service-card--${index % 3}`} key={service.slug} delay={(index % 3) * 0.06}>
                <Link to={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                  <MediaImage src={service.cardImage} alt={`${service.cardTitle} concept by LUMA`} />
                  <span className="service-card__number">0{index + 1}</span>
                  <div className="service-card__content"><h3>{service.cardTitle}</h3><p>{service.description}</p><span>Explore service <ArrowUpRight size={16} aria-hidden="true" /></span></div>
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
          <Reveal><SectionHeading eyebrow="Selected stories" title="Celebrations with a point of view." text="Conceptual portfolio stories presented to demonstrate visual direction, planning range and guest-experience thinking." action={<Link className="text-link" to="/portfolio">View the portfolio <ArrowRight size={17} aria-hidden="true" /></Link>} /></Reveal>
          <PortfolioGallery items={portfolioItems} limit={8} />
        </div>
      </section>

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
            {testimonials.map((story) => <Reveal as="blockquote" key={story.name} className="testimonial-card"><p>“{story.quote}”</p><cite>{story.name}</cite></Reveal>)}
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
