import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { MediaImage } from '../components/common/MediaImage'
import { image } from '../data/siteData'

export default function NotFound() {
  return (
    <section className="not-found">
      <SEO title="Page Not Found | LUMA Weddings & Events" description="The page you requested could not be found." path="/404" />
      <MediaImage src={image('warm-wedding-candle')} alt="" className="not-found__media" />
      <div className="not-found__shade" />
      <div className="not-found__content glass-surface"><span>404</span><p className="eyebrow eyebrow--light">This place card is empty</p><h1>Let’s bring you back to the celebration.</h1><p>The page may have moved, or the link may be incomplete.</p><div className="button-row"><Link className="button button--light" to="/"><ArrowLeft size={17} aria-hidden="true" />Return home</Link><Link className="button button--glass" to="/portfolio">Explore the work <ArrowRight size={17} aria-hidden="true" /></Link></div></div>
    </section>
  )
}
