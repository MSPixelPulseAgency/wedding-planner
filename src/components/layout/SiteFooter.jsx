import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Logo } from '../common/Logo'
import { contact, services } from '../../data/siteData'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Logo light />
          <p>Intentional weddings and events, thoughtfully planned from first conversation to final toast.</p>
          <span>{contact.serviceArea}</span>
        </div>
        <div className="site-footer__column">
          <h2>Explore</h2>
          {['Home', 'About', 'Experience', 'Portfolio', 'Journal'].map((label) => <Link key={label} to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}>{label}</Link>)}
        </div>
        <div className="site-footer__column site-footer__services">
          <h2>Services</h2>
          {services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.cardTitle}</Link>)}
        </div>
        <div className="site-footer__column">
          <h2>Begin</h2>
          <a href={`mailto:${contact.email}`}><Mail size={15} aria-hidden="true" />{contact.email}</a>
          <a href={`tel:${contact.phoneHref}`}><Phone size={15} aria-hidden="true" />{contact.phoneDisplay}</a>
          <Link to="/contact">Start an inquiry <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© 2026 LUMA Weddings &amp; Events. Demo concept.</p>
        <div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
        <a href="https://mspixelpulse.com/" target="_blank" rel="noopener noreferrer">Website by MSPixelPulse <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
