import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Search, X, ZoomIn } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { galleryCategories, galleryMedia } from '../data/mediaLibrary'
import { image } from '../data/siteData'

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(12)
  const [active, setActive] = useState(null)
  const closeRef = useRef(null)
  const triggerRef = useRef(null)
  const touchStart = useRef(null)
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Gallery', to: '/gallery' }]
  const filtered = useMemo(() => galleryMedia.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category
    const queryMatch = `${item.title} ${item.alt} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase())
    return categoryMatch && queryMatch
  }), [category, query])
  const activeIndex = active ? filtered.findIndex((item) => item.id === active.id) : -1
  const move = (direction) => {
    if (!filtered.length) return
    const next = (activeIndex + direction + filtered.length) % filtered.length
    setActive(filtered[next])
  }
  useEffect(() => {
    if (!active) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); triggerRef.current?.focus() }
  })
  const open = (item, event) => { triggerRef.current = event.currentTarget; setActive(item) }
  return (
    <>
      <SEO title="Wedding & Event Inspiration Gallery | LUMA" description="Explore 70 locally hosted, credited wedding, event, Toronto, design and celebration images in the LUMA inspiration gallery." path="/gallery" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Inspiration gallery" title="Rooms, rituals and moments worth noticing." text="A searchable collection of licensed stock imagery used as visual direction for this fictional planning studio—not a claim of completed LUMA events." image={image('ring-exchange-closeup')} imageAlt="Close view of a wedding ring exchange" breadcrumbs={breadcrumbs} />
      <section className="section gallery-page"><div className="container">
        <div className="gallery-toolbar glass-surface">
          <label><span className="sr-only">Search gallery</span><Search size={18} aria-hidden="true" /><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(12) }} placeholder="Search moments, places or styles" /></label>
          <div className="gallery-filters" aria-label="Gallery categories">{galleryCategories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setVisible(12) }}>{item}</button>)}</div>
        </div>
        <p className="gallery-count" aria-live="polite">Showing {Math.min(visible, filtered.length)} of {filtered.length} images</p>
        {filtered.length ? <div className="gallery-mosaic">{filtered.slice(0, visible).map((item) => <button type="button" className={`gallery-tile gallery-tile--${item.orientation}`} key={item.id} onClick={(event) => open(item, event)} aria-label={`Open ${item.alt}`}><MediaImage src={item.src} alt={item.alt} position={item.focalPoint} mobilePosition={item.mobileFocalPoint} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span><small>{item.category}</small><strong>{item.title}</strong><ZoomIn aria-hidden="true" /></span></button>)}</div> : <div className="empty-state"><h2>No images match that search.</h2><p>Try another phrase or choose All.</p><button className="button button--dark" type="button" onClick={() => { setCategory('All'); setQuery('') }}>Reset gallery</button></div>}
        {visible < filtered.length && <div className="gallery-load"><button className="button button--dark" type="button" onClick={() => setVisible((value) => value + 12)}>Load 12 more</button></div>}
      </div></section>
      {active && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} image viewer`} onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX }} onTouchEnd={(event) => { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 60) move(distance > 0 ? -1 : 1) }}>
        <button ref={closeRef} className="gallery-lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer"><X aria-hidden="true" /></button>
        <button type="button" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
        <figure><MediaImage src={active.src} alt={active.alt} position={active.focalPoint} eager /><figcaption><span>{active.category}</span><strong>{active.title}</strong><small>{activeIndex + 1} of {filtered.length}</small></figcaption></figure>
        <button type="button" onClick={() => move(1)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
      </div>}
    </>
  )
}
