import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react'
import { MediaImage } from '../common/MediaImage'

const categories = ['All', 'Weddings', 'Destination', 'Corporate', 'Private', 'Design Details', 'Behind the Scenes']

export function PortfolioGallery({ items, initialCategory = 'All', limit }) {
  const [filter, setFilter] = useState(initialCategory)
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)
  const openerRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const filtered = items.filter((item) => filter === 'All' || item.category === filter).slice(0, limit || items.length)

  const close = useCallback(() => setSelected(null), [])
  const move = useCallback((direction) => {
    if (!selected) return
    const index = filtered.findIndex((item) => item.slug === selected.slug)
    setSelected(filtered[(index + direction + filtered.length) % filtered.length])
  }, [filtered, selected])

  useEffect(() => {
    if (!selected) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') move(1)
      if (event.key === 'ArrowLeft') move(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      openerRef.current?.focus()
    }
  }, [close, move, selected])

  return (
    <>
      {!limit && (
        <div className="portfolio-filters" role="group" aria-label="Filter portfolio">
          {categories.map((category) => (
            <button key={category} type="button" className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>
          ))}
        </div>
      )}
      {filtered.length ? (
        <motion.div className="portfolio-grid" layout={!reduceMotion}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article className={`portfolio-card portfolio-card--${item.orientation}`} key={item.slug} layout initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <button type="button" ref={selected?.slug === item.slug ? openerRef : undefined} aria-label={`Open ${item.title} portfolio story`} onClick={(event) => { openerRef.current = event.currentTarget; setSelected(item) }}>
                  <MediaImage src={item.image} alt={`${item.title}, a conceptual ${item.category.toLowerCase()} event`} />
                  <span className="portfolio-card__overlay"><Expand size={18} aria-hidden="true" /></span>
                  <span className="portfolio-card__caption">
                    <span>{item.category} · {item.style}</span>
                    <strong>{item.title}</strong>
                  </span>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : <p className="empty-state">No stories match this filter yet. Explore another category.</p>}

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.title} portfolio story`} ref={dialogRef} tabIndex={-1} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="lightbox__close" type="button" aria-label="Close portfolio story" onClick={close}><X aria-hidden="true" /></button>
            <button className="lightbox__previous" type="button" aria-label="Previous portfolio story" onClick={() => move(-1)}><ArrowLeft aria-hidden="true" /></button>
            <div className="lightbox__content">
              <MediaImage src={selected.image} alt={`${selected.title}, a conceptual ${selected.category.toLowerCase()} event`} eager />
              <div className="lightbox__caption">
                <p className="eyebrow eyebrow--light">Demo event story · {selected.location}</p>
                <h2>{selected.title}</h2>
                <p>{selected.note}</p>
                <span>{selected.category} · {selected.style}</span>
              </div>
            </div>
            <button className="lightbox__next" type="button" aria-label="Next portfolio story" onClick={() => move(1)}><ArrowRight aria-hidden="true" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
