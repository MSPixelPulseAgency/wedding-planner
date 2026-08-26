import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, MessagesSquare, NotebookPen, PartyPopper } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { Reveal } from '../components/common/Reveal'
import { image, processSteps } from '../data/siteData'

const moments = [
  { icon: MessagesSquare, title: 'A useful first conversation', text: 'We discuss the event, current planning stage, decision makers, priorities and where support would make the greatest difference.' },
  { icon: NotebookPen, title: 'One source of truth', text: 'Responsibilities, budget assumptions, decisions, supplier details and milestones live in a shared planning system.' },
  { icon: CalendarDays, title: 'A timeline with breathing room', text: 'Decisions are sequenced around dependencies so urgent weeks are the exception rather than the normal pace.' },
  { icon: PartyPopper, title: 'Leadership without taking over', text: 'On the event day, LUMA is visible to the vendor team and quietly available to you and your guests.' },
]

export default function Experience() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Experience', to: '/experience' }]
  return (
    <>
      <SEO title="The Planning Experience | LUMA Weddings & Events" description="Discover LUMA’s five-step planning process from first conversation to event-day leadership." path="/experience" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="The experience" title="A process designed to protect the celebration." text="Good planning turns hundreds of decisions into a clear sequence, then keeps the people hosting at the centre of it." image={image('wedding-ceremony-hands')} imageAlt="Newlyweds holding hands during an intimate wedding ceremony" breadcrumbs={breadcrumbs} />
      <section className="section experience-steps"><div className="container"><Reveal><p className="eyebrow">The LUMA framework</p><h2>Five stages. One connected plan.</h2></Reveal><div className="experience-steps__list">{processSteps.map((step, index) => <Reveal as="article" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><MediaImage src={[image('garden-wedding-portrait'), image('wedding-hands-detail'), image('vintage-floral-tablescape'), image('string-light-reception'), image('floral-reception-newlyweds')][index]} alt={`${step.title} stage of the LUMA planning experience`} /></Reveal>)}</div></div></section>
      <section className="section section--ivory experience-moments"><div className="container"><Reveal><p className="eyebrow">What the process feels like</p><h2>Structured enough to feel clear.<br />Flexible enough to feel personal.</h2></Reveal><div className="experience-moments__grid">{moments.map(({ icon: Icon, title, text }) => <Reveal as="article" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
      <section className="split-cta"><MediaImage src={image('pastel-wedding-reception')} alt="Pastel wedding reception prepared for an intimate gathering" /><Reveal><p className="eyebrow">Ready to define the scope?</p><h2>Start with what is already decided.</h2><p>Your first inquiry can be simple: event type, date or season, location, guest estimate and the decisions that feel most important right now.</p><Link className="button button--dark" to="/contact">Plan Your Event <ArrowRight size={17} aria-hidden="true" /></Link></Reveal></section>
    </>
  )
}
