import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ items, light = false }) {
  return (
    <nav className={`breadcrumbs${light ? ' breadcrumbs--light' : ''}`} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.to}>
            {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {index === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link to={item.to}>{item.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
