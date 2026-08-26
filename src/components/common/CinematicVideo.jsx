import { useEffect, useRef, useState } from 'react'
import { MediaImage } from './MediaImage'

export function CinematicVideo({ src, poster, posterAlt, className = '', priority = false }) {
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const element = videoRef.current
    if (!element || failed) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {})
      else element.pause()
    }, { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [failed])

  return (
    <div className={`cinematic-video ${className}`}>
      <MediaImage src={poster} alt={posterAlt} className="cinematic-video__poster" eager={priority} />
      {!failed && (
        <video ref={videoRef} muted loop playsInline preload={priority ? 'metadata' : 'none'} poster={poster} onError={() => setFailed(true)} aria-label={posterAlt}>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
