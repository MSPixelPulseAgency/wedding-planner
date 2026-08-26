import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { Reveal } from '../components/common/Reveal'
import { image } from '../data/siteData'

const packages = [
  { title: 'Full-Service Planning', value: 'Custom proposal', text: 'Complete planning, creative direction and production oversight from the foundation forward.' },
  { title: 'Partial Planning', value: 'Custom proposal', text: 'A tailored scope for plans already in motion that need structure, refinement and completion.' },
  { title: 'Wedding Coordination', value: 'Custom proposal', text: 'A professional handoff, vendor confirmation, timeline and event-day leadership.' },
  { title: 'Event Design', value: 'Custom proposal', text: 'Visual direction, sourcing, room planning, styling and installation oversight.' },
  { title: 'Corporate / Private Events', value: 'Project based', text: 'Planning and production based on format, audience, venue, suppliers and program needs.' },
]

const fitQuestions = ['What kind of event are you planning?', 'Where and when might it happen?', 'What has already been booked or decided?', 'Where would expert support change the experience?', 'What investment range is allocated to the full event?']

export default function Pricing() {
  const [selected, setSelected] = useState([])
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Pricing', to: '/pricing' }]
  const toggle = (question) => setSelected((current) => current.includes(question) ? current.filter((item) => item !== question) : [...current, question])
  return (
    <>
      <SEO title="Wedding Planner Pricing & Investment Guide | LUMA" description="Review demo investment guidance and the factors that shape a custom wedding or event planning proposal." path="/pricing" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Investment guidance" title="A proposal shaped around the real work." text="Planning fees change with scope, location, guest count, planning stage and production complexity. This demo does not invent a one-size-fits-all number." image={image('gold-accent-place-setting')} imageAlt="Gold-accented place setting prepared for an elegant wedding dinner" breadcrumbs={breadcrumbs} />
      <section className="section pricing-list"><div className="container"><Reveal><p className="eyebrow">Illustrative package structure</p><h2>Transparent about the model.<br />Tailored in the details.</h2><p className="lead">Every event is scoped around guest count, location, planning stage and production complexity. The package structure on this demo site is illustrative.</p></Reveal><div className="pricing-list__grid">{packages.map((item, index) => <Reveal as="article" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><strong>{item.value}</strong><p>{item.text}</p><Link className="text-link" to="/contact">Discuss this scope <ArrowRight size={16} aria-hidden="true" /></Link></Reveal>)}</div></div></section>
      <section className="section section--olive pricing-factors"><div className="container pricing-factors__grid"><Reveal><p className="eyebrow">What shapes a proposal</p><h2>The fee follows responsibility.</h2><p>The clearest comparison is not the package name. It is who owns each decision, supplier relationship and production task.</p></Reveal><Reveal><ul>{['Number and format of event days', 'Guest count and venue model', 'Planning already completed', 'Design and installation complexity', 'Travel, staffing and on-site hours', 'Corporate content or stage production'].map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></Reveal></div></section>
      <section className="section fit-check"><div className="container fit-check__grid"><Reveal><p className="eyebrow">Prepare for a useful consultation</p><h2>Your five-point project fit note.</h2><p>Select the details you can already answer. You do not need all five before reaching out.</p></Reveal><Reveal><div className="fit-check__list">{fitQuestions.map((question) => <button key={question} type="button" aria-pressed={selected.includes(question)} className={selected.includes(question) ? 'active' : ''} onClick={() => toggle(question)}><span>{selected.includes(question) && <Check size={16} aria-hidden="true" />}</span>{question}</button>)}</div><p className="fit-check__status" aria-live="polite">{selected.length} of 5 details ready</p><Link className="button button--dark" to="/contact">Start an Inquiry <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
