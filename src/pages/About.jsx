import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { image } from '../data/siteData'

const principles = [
  ['Listen before styling', 'The event begins with priorities, relationships and the way you want to host—not a preset aesthetic.'],
  ['Make decisions visible', 'Clear scope, budgets, milestones and ownership reduce unnecessary stress and protect creativity.'],
  ['Design the transitions', 'Guest experience lives between the big moments: arrival, movement, comfort, timing and information.'],
  ['Lead calmly on site', 'Composure is practical. A prepared team can resolve changes without passing the tension into the room.'],
]

export default function About() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }]
  return (
    <>
      <SEO title="About LUMA | Thoughtful Wedding & Event Planning" description="Meet the point of view behind LUMA, a concept planning studio centred on calm coordination and personal celebrations." path="/about" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="About LUMA" title="Artfully planned. Beautifully lived." text="LUMA is a concept wedding and event studio built around thoughtful hosting, composed production and design with a personal point of view." image={image('black-tie-wedding-portrait')} imageAlt="Editorial black-tie wedding portrait" breadcrumbs={breadcrumbs} />
      <section className="section about-story"><div className="container about-story__grid"><Reveal><p className="eyebrow">The belief</p><h2>The planner should create more room for you to be present.</h2><p className="lead">The work is detailed because the experience should not feel like work.</p></Reveal><Reveal><p>We imagine LUMA as the calm, connected centre of an event: translating your priorities into decisions, connecting design to logistics and preparing the vendor team to move as one.</p><p>This demo intentionally avoids invented founder biographies, years in business, awards and venue partnerships. It presents a credible service philosophy without manufacturing a history.</p><Link className="text-link" to="/experience">See the planning experience <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></div></section>
      <section className="section section--ivory principles"><div className="container"><Reveal><SectionHeading eyebrow="What guides the work" title="Four principles, carried through every event." /></Reveal><div className="principles__grid">{principles.map(([title, text], index) => <Reveal as="article" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
      <section className="section visual-story"><div className="container visual-story__grid"><Reveal className="visual-story__large"><MediaImage src={image('outdoor-wedding-conversation')} alt="Newlyweds talking together outdoors after their ceremony" /></Reveal><Reveal className="visual-story__small"><MediaImage src={image('wedding-hands-detail')} alt="Close detail of wedding attire and joined hands" /></Reveal><Reveal className="visual-story__quote"><p className="eyebrow">The measure of good planning</p><blockquote>“The room feels effortless because the decisions behind it were not.”</blockquote><ul>{['Personal without being performative', 'Premium without feeling distant', 'Detailed without becoming overwhelming'].map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></Reveal></div></section>
      <section className="section section--olive about-cta"><div className="container"><Reveal><p className="eyebrow">A good fit begins with candour</p><h2>Tell us what matters before you tell us what it should look like.</h2><Link className="button button--light" to="/contact">Start an Inquiry <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
