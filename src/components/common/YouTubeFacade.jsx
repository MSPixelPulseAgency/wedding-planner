import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { MediaImage } from './MediaImage'

export function YouTubeFacade({ video }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <article className="youtube-facade">
      <div className="youtube-facade__media">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
            title={`${video.title} — ${video.source}`}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            <MediaImage src={video.poster} alt={video.posterAlt} sizes="(max-width: 760px) 100vw, 33vw" />
            <button type="button" onClick={() => setLoaded(true)} aria-label={`Load ${video.title} from ${video.source}`}>
              <span><Play fill="currentColor" aria-hidden="true" /></span>
              Load video
            </button>
          </>
        )}
      </div>
      <div className="youtube-facade__copy">
        <span>Official source · {video.source}</span>
        <h3>{video.title}</h3>
        <p>{video.text}</p>
        <a href={video.sourceUrl} target="_blank" rel="noreferrer">Visit source <ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </article>
  )
}
