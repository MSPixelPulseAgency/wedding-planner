import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Building2, CalendarHeart, ChevronDown, Compass, Gem, Menu, Sparkles, X } from 'lucide-react'
import { Logo } from '../common/Logo'
import { megaMenuGroups } from '../../data/industryData'

const directLinks = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Experience', to: '/experience' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
]
const menuIcons = [CalendarHeart, Gem, Building2, Sparkles, Compass]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [openMobileGroup, setOpenMobileGroup] = useState('weddings')
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => { setMobileOpen(false); setOpenMenu(null) }, 0)
    return () => window.clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setOpenMenu(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
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
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); toggle?.focus() }
  }, [mobileOpen])

  return (
    <header className={`site-header site-header--protective${scrolled || mobileOpen ? ' site-header--solid' : ''}${mobileOpen ? ' site-header--menu-open' : ''}`} onMouseLeave={() => setOpenMenu(null)}>
      <div className="site-header__inner">
        <Logo light={mobileOpen} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {megaMenuGroups.map((group) => <div className="desktop-nav__group" key={group.key}>
            <button type="button" aria-expanded={openMenu === group.key} aria-controls={`mega-${group.key}`} onClick={() => setOpenMenu((value) => value === group.key ? null : group.key)}>
              {group.label}<ChevronDown size={15} aria-hidden="true" />
            </button>
            {openMenu === group.key && <div id={`mega-${group.key}`} className="mega-menu glass-surface">
              <div className="mega-menu__intro"><p className="eyebrow">Explore {group.label.toLowerCase()}</p><h2>{group.key === 'weddings' ? 'Personal celebrations, held with care.' : group.key === 'events' ? 'Purposeful rooms, warmly produced.' : 'Expert support, clearly scoped.'}</h2><Link className="text-link" to={group.to}>View all {group.label.toLowerCase()} <ChevronDown size={15} aria-hidden="true" /></Link></div>
              <div className="mega-menu__links">{group.items.map((item, index) => { const Icon = menuIcons[index % menuIcons.length]; return <Link key={item.slug} to={`/${group.key}/${item.slug}`}><Icon size={18} aria-hidden="true" /><span><strong>{item.title}</strong><small>{item.summary}</small></span></Link> })}</div>
              <Link className="mega-menu__feature" to={group.to}><span>{group.items.length} planning paths</span><strong>Find the scope that fits your event.</strong></Link>
            </div>}
          </div>)}
          {directLinks.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
        </nav>
        <Link className="header-cta" to="/contact">Plan Your Event</Link>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      {mobileOpen && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" ref={menuRef}>
        <div className="mobile-menu__glow" />
        <nav aria-label="Mobile navigation">
          {megaMenuGroups.map((group) => <div className="mobile-menu__group" key={group.key}><button type="button" aria-expanded={openMobileGroup === group.key} onClick={() => setOpenMobileGroup((value) => value === group.key ? null : group.key)}>{group.label}<ChevronDown aria-hidden="true" /></button>{openMobileGroup === group.key && <div><Link to={group.to}>View all {group.label.toLowerCase()}</Link>{group.items.map((item) => <Link key={item.slug} to={`/${group.key}/${item.slug}`}>{item.title}</Link>)}</div>}</div>)}
          <div className="mobile-menu__direct">{directLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}</div>
          <Link className="button button--light mobile-menu__cta" to="/contact">Plan Your Event</Link>
        </nav>
        <p>Toronto, the GTA, Ontario &amp; destination celebrations</p>
      </div>}
    </header>
  )
}
