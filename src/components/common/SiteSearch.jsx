import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { popularSearches, searchSite } from '../../data/discoveryData'

export function SiteSearch({ showPopular = false, className = '' }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const deferredQuery = useDeferredValue(query)
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const listId = useId()
  const results = useMemo(() => searchSite(deferredQuery), [deferredQuery])

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!searchRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsidePointer)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer)
  }, [])

  const choose = (item) => {
    setOpen(false)
    setQuery('')
    navigate(item.to)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((value) => (value + 1) % Math.max(results.length, 1))
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((value) => (value <= 0 ? results.length - 1 : value - 1))
    }
    if (event.key === 'Enter' && open && activeIndex >= 0 && results[activeIndex]) {
      event.preventDefault()
      choose(results[activeIndex])
    }
  }

  const submit = (event) => {
    event.preventDefault()
    const selected = results[activeIndex] || results[0]
    if (selected) choose(selected)
    else setOpen(true)
  }

  return (
    <div className={`site-search ${className}`.trim()} ref={searchRef}>
      <form role="search" onSubmit={submit}>
        <label className="sr-only" htmlFor={`${listId}-input`}>Search weddings, events, services and inspiration</label>
        <Search size={21} aria-hidden="true" />
        <input
          ref={inputRef}
          id={`${listId}-input`}
          type="search"
          role="combobox"
          value={query}
          placeholder="Search weddings, events, services, locations..."
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={open}
          aria-activedescendant={activeIndex >= 0 && results[activeIndex] ? `${listId}-${results[activeIndex].id}` : undefined}
          onFocus={() => setOpen(true)}
          onChange={(event) => { setQuery(event.target.value); setActiveIndex(-1); setOpen(true) }}
          onKeyDown={onKeyDown}
        />
        {query && <button className="site-search__clear" type="button" aria-label="Clear search" onClick={() => { setQuery(''); setActiveIndex(-1); setOpen(true); inputRef.current?.focus() }}><X size={18} aria-hidden="true" /></button>}
        <button className="site-search__submit" type="submit" aria-label="Open the first matching result"><ArrowUpRight size={19} aria-hidden="true" /></button>
      </form>
      {open && (
        <div className="site-search__results glass-surface" id={listId} role="listbox" aria-label="Search suggestions">
          {results.length ? results.map((item, index) => (
            <button
              id={`${listId}-${item.id}`}
              type="button"
              role="option"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? 'active' : ''}
              key={`${item.to}-${item.label}`}
              onMouseEnter={() => setActiveIndex(index)}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => choose(item)}
            >
              <span>{item.category}</span>
              <strong>{item.label}</strong>
              <small>{item.description}</small>
            </button>
          )) : <div className="site-search__empty"><strong>No direct match yet.</strong><span>Try “Toronto,” “wedding décor,” “conference” or “destination.”</span></div>}
        </div>
      )}
      {showPopular && <div className="site-search__popular" aria-label="Popular searches"><span>Popular</span>{popularSearches.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>}
    </div>
  )
}
