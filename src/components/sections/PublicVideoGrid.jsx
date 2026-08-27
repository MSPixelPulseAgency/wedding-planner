import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { publicVideoStories } from '../../data/discoveryData'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { YouTubeFacade } from '../common/YouTubeFacade'

export function PublicVideoGrid({ showAction = false }) {
  return (
    <section className="section section--ivory destination-video-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Destination inspiration" title="Explore Toronto & Ontario." text="Official destination and public-realm videos offer a sense of place for guests and celebrations. These independent sources do not endorse LUMA." action={showAction ? <Link className="text-link" to="/videos">Explore the motion gallery <ArrowRight size={17} aria-hidden="true" /></Link> : undefined} /></Reveal>
        <div className="destination-video-grid">
          {publicVideoStories.map((video, index) => <Reveal key={video.id} delay={index * 0.06}><YouTubeFacade video={video} /></Reveal>)}
        </div>
        <p className="destination-video-note">External players load only when requested. Availability and destination information remain subject to the source organizations.</p>
      </div>
    </section>
  )
}
