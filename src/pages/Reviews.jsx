import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { Reveal } from '../components/common/Reveal'
import { image, testimonials } from '../data/siteData'

export default function Reviews() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Reviews', to: '/reviews' }]
  return (
    <>
      <SEO title="Demo Client Stories | LUMA Weddings & Events" description="Read clearly labelled sample client stories that demonstrate the LUMA service experience." path="/reviews" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Demo client stories" title="What thoughtful service could feel like." text="These are sample narratives created for this concept site. They are not verified reviews, ratings or endorsements." image={image('formal-event-couple')} imageAlt="Elegant couple at a floral event setting" breadcrumbs={breadcrumbs} />
      <section className="section reviews-page"><div className="container"><Reveal className="reviews-page__intro"><p className="eyebrow">Presented honestly</p><h2>No invented platforms.<br />No manufactured star ratings.</h2><p>The stories below demonstrate service outcomes a real client might value while keeping the demo clear about what is illustrative.</p></Reveal><div className="reviews-page__grid">{testimonials.map((story, index) => <Reveal as="blockquote" key={story.name} className={index === 0 ? 'featured' : ''}><Quote aria-hidden="true" /><p>{story.quote}</p><cite>{story.name}</cite></Reveal>)}</div></div></section>
      <section className="section section--olive reviews-cta"><div className="container"><Reveal><p className="eyebrow">Your priorities belong in the plan</p><h2>What would make the experience feel well cared for to you?</h2><Link className="button button--light" to="/contact">Tell us what you’re planning <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
