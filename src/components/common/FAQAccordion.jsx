import { useState } from 'react'
import { Plus } from 'lucide-react'

export function FAQAccordion({ items, idPrefix = 'faq' }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index
        const panelId = `${idPrefix}-panel-${index}`
        return (
          <article className={`faq-item${expanded ? ' faq-item--open' : ''}`} key={item.question}>
            <h3>
              <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? -1 : index)}>
                <span>{item.question}</span><Plus size={20} aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-item__answer" id={panelId} hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
