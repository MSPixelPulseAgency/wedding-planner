import { useState } from 'react'

export function MediaImage({ src, alt, className = '', eager = false, position, sizes = '100vw' }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={`media-frame ${className}${failed ? ' media-frame--failed' : ''}`} style={{ '--image-position': position || 'center' }}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          sizes={sizes}
          onError={() => setFailed(true)}
        />
      )}
      {failed && <span className="media-frame__fallback" aria-label={`${alt} image unavailable`}>LUMA</span>}
    </span>
  )
}
