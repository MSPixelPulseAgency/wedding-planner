import { Link } from 'react-router-dom'

export function Logo({ light = false, onClick }) {
  return (
    <Link className={`brand-mark${light ? ' brand-mark--light' : ''}`} to="/" onClick={onClick} aria-label="LUMA Weddings and Events home">
      <span className="brand-mark__name">LUMA</span>
      <span className="brand-mark__descriptor">Weddings &amp; Events</span>
    </Link>
  )
}
