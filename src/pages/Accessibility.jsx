import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Keyboard, MousePointer2, Volume2 } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Reveal } from '../components/common/Reveal'

const commitments = [
  { icon: Keyboard, title: 'Keyboard access', text: 'Navigation, menus, forms, gallery controls and dialogs are designed to work without a mouse.' },
  { icon: Eye, title: 'Readable content', text: 'Text contrast, scalable type, clear headings and descriptive alternatives support easier reading and orientation.' },
  { icon: MousePointer2, title: 'Comfortable interaction', text: 'Touch targets are at least 44 pixels, focus remains visible and interactions do not depend on hover alone.' },
  { icon: Volume2, title: 'Motion and media choice', text: 'Muted ambient video has a static fallback, and reduced-motion preferences disable nonessential movement.' },
]

export default function Accessibility() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Accessibility', to: '/accessibility' }]
  return (
    <>
      <SEO title="Accessibility | LUMA Weddings & Events" description="Read the accessibility approach and contact path for the LUMA wedding and event planning demo." path="/accessibility" breadcrumbs={breadcrumbs} />
      <header className="legal-header accessibility-header container"><p className="eyebrow">Accessibility</p><h1>A welcoming digital experience is part of hospitality.</h1><p className="lead">LUMA is a fictional demo, but its accessibility work is practical: clear navigation, readable content, keyboard support and respectful motion.</p></header>
      <section className="section section--ivory"><div className="container accessibility-grid">{commitments.map(({ icon: Icon, title, text }) => <Reveal as="article" key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{text}</p></Reveal>)}</div></section>
      <section className="section"><div className="container legal-body accessibility-copy"><section><h2>Target standard</h2><p>This site aims to follow Web Content Accessibility Guidelines (WCAG) 2.2 Level AA where practical. Automated checks help, but they do not replace testing with real people and assistive technology.</p></section><section><h2>Known boundaries</h2><p>Stock photography and ambient video support the visual concept. Video is muted and decorative; meaningful information is presented in text. Third-party destinations, including WhatsApp and Pexels, have their own accessibility practices.</p></section><section><h2>Need another format?</h2><p>If a page, form or interaction creates a barrier, contact the site owner and describe the page and the format or help you need.</p><Link className="button button--dark" to="/contact">Report an accessibility barrier <ArrowRight size={17} aria-hidden="true" /></Link></section><p>Last reviewed: August 26, 2026.</p></div></section>
    </>
  )
}
