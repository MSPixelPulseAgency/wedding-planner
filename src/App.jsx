import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import { ServiceDetail, ServicesIndex } from './pages/Services'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Pricing from './pages/Pricing'
import Reviews from './pages/Reviews'
import { JournalArticle, JournalIndex } from './pages/Journal'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/weddings" element={<Portfolio />} />
        <Route path="portfolio/destination" element={<Portfolio />} />
        <Route path="portfolio/corporate" element={<Portfolio />} />
        <Route path="experience" element={<Experience />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="journal" element={<JournalIndex />} />
        <Route path="journal/:slug" element={<JournalArticle />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Legal type="privacy" />} />
        <Route path="terms" element={<Legal type="terms" />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
