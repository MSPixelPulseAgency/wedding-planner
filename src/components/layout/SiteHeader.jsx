import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '../common/Logo'
import { services } from '../../data/siteData'

const mainLinks = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Experience', to: '/experience' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const location = useLocation()
  const homeTop = location.pathname === '/' && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined
    const toggle = toggleRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusable = menuRef.current?.querySelectorAll('a, button') || []
    focusable[0]?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
      if (event.key === 'Tab' && focusable.length) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [mobileOpen])

  return (
    <header className={`site-header${scrolled || mobileOpen ? ' site-header--solid' : ''}${homeTop ? ' site-header--over-hero' : ''}`}>
      <div className="site-header__inner">
        <Logo light={homeTop} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="desktop-nav__services" onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)} onMouseEnter={() => setServicesOpen(true)}>
              Services <ChevronDown size={15} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="services-menu glass-surface">
                <div>
                  <p className="eyebrow">Planning, design & production</p>
                  <Link className="services-menu__all" to="/services" onClick={() => setServicesOpen(false)}>Explore all services</Link>
                </div>
                <div className="services-menu__links">
                  {services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setServicesOpen(false)}>{service.cardTitle}</Link>)}
                </div>
              </div>
            )}
          </div>
          {mainLinks.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
        </nav>
        <Link className="header-cta" to="/contact">Plan Your Event</Link>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" ref={menuRef}>
          <div className="mobile-menu__glow" />
          <nav aria-label="Mobile navigation">
            <Link className="mobile-menu__primary" to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <div className="mobile-menu__services">
              {services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setMobileOpen(false)}>{service.cardTitle}</Link>)}
            </div>
            {mainLinks.map((link) => <Link className="mobile-menu__primary" key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
            <Link className="button button--light mobile-menu__cta" to="/contact" onClick={() => setMobileOpen(false)}>Plan Your Event</Link>
          </nav>
          <p>Toronto, the GTA &amp; destination celebrations</p>
        </div>
      )}
    </header>
  )
}
