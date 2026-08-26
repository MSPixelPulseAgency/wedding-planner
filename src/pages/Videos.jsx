import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { CinematicVideo } from '../components/common/CinematicVideo'
import { Reveal } from '../components/common/Reveal'
import { image, videos } from '../data/siteData'

const videoStories = [
  { title: 'Candlelit Reception', category: 'Wedding design', src: videos.reception, poster: image('modern-candle-tablescape'), alt: 'Candlelit wedding reception table', text: 'A study in soft light, layered tabletops and a room ready to welcome guests.' },
  { title: 'Outdoor Procession', category: 'Ceremony', src: videos.ceremony, poster: image('garden-ceremony-aisle'), alt: 'Outdoor wedding procession and ceremony aisle', text: 'The pace and movement of an outdoor ceremony coming to life.' },
  { title: 'Beach Reception Setup', category: 'Destination', src: videos.destination, poster: image('sunset-beach-wedding'), alt: 'Beach wedding reception at sunset', text: 'Place-led styling and production along the shoreline.' },
  { title: 'A Celebration for Everyone', category: 'Inclusive weddings', src: videos.inclusive, poster: image('african-wedding-portrait'), alt: 'Joyful wedding party walking together', text: 'A joyful wedding party moving together through the day.' },
  { title: 'Illuminated Stage', category: 'Corporate production', src: videos.corporate, poster: image('conference-stage'), alt: 'Illuminated corporate event stage', text: 'Lighting, presentation and audience focus aligned on one stage.' },
  { title: 'Milestone Setup', category: 'Social events', src: videos.privateEvent, poster: image('sparkler-celebration'), alt: 'Milestone celebration setup with sparklers', text: 'A private celebration prepared before the doors open.' },
  { title: 'Beachfront Venue', category: 'Destination', src: videos.destinationVertical, poster: image('beach-wedding-vows'), alt: 'Beachfront wedding venue and ceremony', text: 'A vertical glimpse of a beachfront venue and its event setting.' },
  { title: 'Ceremony Entrance', category: 'Wedding moments', src: videos.ceremonyVertical, poster: image('ring-exchange-closeup'), alt: 'Wedding ceremony entrance before a ring exchange', text: 'The quiet anticipation just before a ceremony begins.' },
]

export default function Videos() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Videos', to: '/videos' }]
  return (
    <>
      <SEO title="Wedding & Event Video Gallery | LUMA" description="Explore eight locally hosted wedding, destination, social and corporate event video vignettes used in the LUMA demo." path="/videos" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Motion gallery" title="A sense of how the room moves." text="Eight short, locally hosted stock vignettes add atmosphere without autoplaying sound. They are inspiration for this fictional studio, not client work." image={image('conference-presentation')} imageAlt="Speaker on a modern event stage" breadcrumbs={breadcrumbs} />
      <section className="section video-gallery"><div className="container"><div className="video-gallery__grid">{videoStories.map((story, index) => <Reveal as="article" className={index === 0 || index === 5 ? 'video-story video-story--wide' : 'video-story'} key={story.title}><CinematicVideo src={story.src} poster={story.poster} posterAlt={story.alt} /><div><span><Play size={14} aria-hidden="true" />{story.category}</span><h2>{story.title}</h2><p>{story.text}</p></div></Reveal>)}</div></div></section>
      <section className="section section--olive video-cta"><div className="container"><p className="eyebrow">Build the atmosphere with intention</p><h2>Let movement, sound and timing serve the guest experience.</h2><Link className="button button--light" to="/contact">Plan your event <ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    </>
  )
}
