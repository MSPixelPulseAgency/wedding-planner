import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  const { pathname } = useLocation()
  const [showMobileInquiry, setShowMobileInquiry] = useState(() => window.scrollY > 700)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const main = document.getElementById('main-content')
    main?.focus({ preventScroll: true })
  }, [pathname])
  useEffect(() => {
    const onScroll = () => setShowMobileInquiry(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex="-1"><Outlet /></main>
      <SiteFooter />
      <Link className={`mobile-inquiry${showMobileInquiry && pathname !== '/contact' ? ' mobile-inquiry--visible' : ''}`} to="/contact">Plan Your Event</Link>
    </>
  )
}
