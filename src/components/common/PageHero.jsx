import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { MediaImage } from './MediaImage'
import { Breadcrumbs } from './Breadcrumbs'

export function PageHero({ eyebrow, title, text, image, imageAlt, breadcrumbs, cta, compact = false }) {
  return (
    <section className={`page-hero${compact ? ' page-hero--compact' : ''}`}>
      <MediaImage src={image} alt={imageAlt || ''} className="page-hero__media" eager position="center" />
      <div className="page-hero__shade" />
      <div className="page-hero__content container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} light />}
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
        {cta && <Link className="button button--light" to={cta.to}>{cta.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>}
      </div>
    </section>
  )
}
