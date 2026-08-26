import { lazy, Suspense } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { serviceOfferings } from './data/industryData'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ServiceDetail = lazy(() => import('./pages/Services').then((module) => ({ default: module.ServiceDetail })))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Experience = lazy(() => import('./pages/Experience'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Reviews = lazy(() => import('./pages/Reviews'))
const JournalIndex = lazy(() => import('./pages/Journal').then((module) => ({ default: module.JournalIndex })))
const JournalArticle = lazy(() => import('./pages/Journal').then((module) => ({ default: module.JournalArticle })))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))
const IndustryHub = lazy(() => import('./pages/Industry').then((module) => ({ default: module.IndustryHub })))
const IndustryDetail = lazy(() => import('./pages/Industry').then((module) => ({ default: module.IndustryDetail })))
const Gallery = lazy(() => import('./pages/Gallery'))
const Videos = lazy(() => import('./pages/Videos'))
const Feedback = lazy(() => import('./pages/Feedback'))
const Accessibility = lazy(() => import('./pages/Accessibility'))

function PageLoading() {
  return <div className="page-loading" role="status"><span>LUMA</span><p>Preparing the page…</p></div>
}

function ServiceRoute() {
  const { slug } = useParams()
  return serviceOfferings.some((item) => item.slug === slug) ? <IndustryDetail groupKey="services" /> : <ServiceDetail />
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="weddings" element={<IndustryHub groupKey="weddings" />} />
          <Route path="weddings/:slug" element={<IndustryDetail groupKey="weddings" />} />
          <Route path="events" element={<IndustryHub groupKey="events" />} />
          <Route path="events/:slug" element={<IndustryDetail groupKey="events" />} />
          <Route path="services" element={<IndustryHub groupKey="services" />} />
          <Route path="services/:slug" element={<ServiceRoute />} />
          <Route path="locations" element={<IndustryHub groupKey="locations" />} />
          <Route path="locations/:slug" element={<IndustryDetail groupKey="locations" />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/weddings" element={<Portfolio />} />
          <Route path="portfolio/destination" element={<Portfolio />} />
          <Route path="portfolio/corporate" element={<Portfolio />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<Videos />} />
          <Route path="experience" element={<Experience />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="journal" element={<JournalIndex />} />
          <Route path="journal/:slug" element={<JournalArticle />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/wedding" element={<Contact />} />
          <Route path="contact/event" element={<Contact />} />
          <Route path="contact/corporate" element={<Contact />} />
          <Route path="privacy" element={<Legal type="privacy" />} />
          <Route path="terms" element={<Legal type="terms" />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
