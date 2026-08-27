import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { MediaImage } from './MediaImage'

export function CinematicVideo({ src, poster, posterAlt, className = '', priority = false, autoPlay = true, showControl = false }) {
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const element = videoRef.current
    if (!element || failed) return undefined
    const markReady = () => setReady(true)
    element.addEventListener('loadeddata', markReady)
    element.addEventListener('canplay', markReady)
    if (element.readyState >= 2) markReady()
    return () => {
      element.removeEventListener('loadeddata', markReady)
      element.removeEventListener('canplay', markReady)
    }
  }, [failed, src])

  useEffect(() => {
    const element = videoRef.current
    if (!element || failed || !autoPlay) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData
    if (reduced || saveData) return undefined
    let observer
    const observe = () => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) element.play().catch(() => {})
        else element.pause()
      }, { threshold: 0.15 })
      observer.observe(element)
    }
    const delay = priority ? 0 : 1000
    const timer = window.setTimeout(observe, delay)
    return () => { window.clearTimeout(timer); observer?.disconnect() }
  }, [autoPlay, failed, priority])

  const togglePlayback = () => {
    const element = videoRef.current
    if (!element) return
    if (element.paused) element.play().catch(() => {})
    else element.pause()
  }

  return (
    <div className={`cinematic-video${showControl ? ' cinematic-video--controlled' : ''} ${className}`.trim()}>
      <MediaImage src={poster} alt={posterAlt} className="cinematic-video__poster" eager={priority} />
      {!failed && (
        <video className={ready ? 'cinematic-video__media--ready' : ''} ref={videoRef} muted loop playsInline preload={priority ? 'metadata' : 'none'} poster={poster} onCanPlay={() => setReady(true)} onError={() => setFailed(true)} onPlay={() => { setPlaying(true); setReady(true) }} onPause={() => setPlaying(false)} aria-label={posterAlt}>
          <source src={src} type="video/mp4" />
        </video>
      )}
      {showControl && !failed && <button className="cinematic-video__control" type="button" onClick={togglePlayback} aria-label={playing ? 'Pause hero video' : 'Play hero video'}>{playing ? <Pause fill="currentColor" aria-hidden="true" /> : <Play fill="currentColor" aria-hidden="true" />}</button>}
    </div>
  )
}
