import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { InquiryForm } from '../components/forms/InquiryForm'
import { Reveal } from '../components/common/Reveal'
import { contact, image } from '../data/siteData'

const contactCards = [
  { icon: Mail, title: 'Email', value: contact.email, href: `mailto:${contact.email}`, note: 'Demo agency contact placeholder' },
  { icon: Phone, title: 'Phone', value: contact.phoneDisplay, href: `tel:${contact.phoneHref}`, note: 'Placeholder number—not a working LUMA line' },
  { icon: MapPin, title: 'Service area', value: 'Toronto, GTA & destination', note: 'No physical office address is claimed' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+1 365-883-0338', href: 'https://wa.me/13658830338', note: 'Opens a direct WhatsApp conversation' },
]

export default function Contact() {
  const { pathname } = useLocation()
  const titles = { '/contact/wedding': 'Wedding Planning Inquiry | LUMA', '/contact/event': 'Social Event Planning Inquiry | LUMA', '/contact/corporate': 'Corporate Event Planning Inquiry | LUMA' }
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Contact', to: pathname }]
  return (
    <>
      <SEO title={titles[pathname] || 'Plan Your Event | Contact LUMA'} description="Start a wedding, corporate or social event planning inquiry with LUMA by secure form, email or WhatsApp." path={pathname} breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Plan your event" title="Begin with what you know." text="A date or season, a place, a guest estimate and the feeling you want are more than enough for a useful first conversation." image={image('floral-reception-newlyweds')} imageAlt="Newlyweds at an elegant floral wedding reception" breadcrumbs={breadcrumbs} />
      <section className="section contact-page"><div className="container contact-page__grid"><Reveal className="contact-page__intro"><p className="eyebrow">The first step</p><h2>Tell us what you’re planning.</h2><p>Complete the three short steps. The secure endpoint confirms delivery before showing success; if delivery is unavailable, the form gives you a prepared-email fallback instead.</p><div className="contact-page__cards">{contactCards.map(({ icon: Icon, title, value, href, note }) => { const content = <><Icon aria-hidden="true" /><span>{title}</span><strong>{value}</strong><small>{note}</small></>; return href ? <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{content}</a> : <div key={title}>{content}</div> })}</div></Reveal><Reveal><InquiryForm /></Reveal></div></section>
      <section className="section section--olive contact-note"><div className="container"><Reveal><p className="eyebrow">Honest delivery states</p><h2>Success only means the endpoint accepted it.</h2><p>The form validates required details, uses a honeypot and rate limit, and never exposes provider credentials in the browser. Email delivery requires the approved Resend environment key in Vercel.</p></Reveal></div></section>
    </>
  )
}
