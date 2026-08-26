import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { InquiryForm } from '../components/forms/InquiryForm'
import { Reveal } from '../components/common/Reveal'
import { contact, image } from '../data/siteData'

const contactCards = [
  { icon: Mail, title: 'Email', value: contact.email, href: `mailto:${contact.email}`, note: 'Demo agency contact placeholder' },
  { icon: Phone, title: 'Phone', value: contact.phoneDisplay, href: `tel:${contact.phoneHref}`, note: 'Placeholder number—not a working LUMA line' },
  { icon: MapPin, title: 'Service area', value: 'Toronto, GTA & destination', note: 'No physical office address is claimed' },
  { icon: MessageCircle, title: 'Social & WhatsApp', value: 'Connect later', note: 'No handle or number invented for this demo' },
]

export default function Contact() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Contact', to: '/contact' }]
  return (
    <>
      <SEO title="Plan Your Event | Contact LUMA" description="Start a demo wedding or event planning inquiry with LUMA. No form data is sent without a configured service." path="/contact" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Plan your event" title="Begin with what you know." text="A date or season, a place, a guest estimate and the feeling you want are more than enough for a useful first conversation." image={image('floral-reception-newlyweds')} imageAlt="Newlyweds at an elegant floral wedding reception" breadcrumbs={breadcrumbs} />
      <section className="section contact-page"><div className="container contact-page__grid"><Reveal className="contact-page__intro"><p className="eyebrow">The first step</p><h2>Tell us what you’re planning.</h2><p>Complete the three short steps. Because this is a frontend-only demo, the site will prepare an email for you to review instead of pretending to submit or store your information.</p><div className="contact-page__cards">{contactCards.map(({ icon: Icon, title, value, href, note }) => { const content = <><Icon aria-hidden="true" /><span>{title}</span><strong>{value}</strong><small>{note}</small></>; return href ? <a key={title} href={href}>{content}</a> : <div key={title}>{content}</div> })}</div></Reveal><Reveal><InquiryForm /></Reveal></div></section>
      <section className="section section--olive contact-note"><div className="container"><Reveal><p className="eyebrow">Demo-safe by design</p><h2>No private details are transmitted.</h2><p>There is no configured CRM, database or email API behind this form. A real launch would connect an approved endpoint, spam protection, privacy notice and delivery monitoring before claiming successful submission.</p></Reveal></div></section>
    </>
  )
}
