import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { MediaImage } from '../components/common/MediaImage'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { Reveal } from '../components/common/Reveal'
import { image, journalPosts, services } from '../data/siteData'

export function JournalIndex() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Journal', to: '/journal' }]
  return (
    <>
      <SEO title="Wedding & Event Planning Journal | LUMA" description="Practical guidance for wedding planning, budgets, venues, destinations, design and guest experience." path="/journal" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="The journal" title="Clear guidance for meaningful decisions." text="Planning notes on scope, budgets, venues, destination logistics, design and better guest experiences." image={image('white-rose-reception-table')} imageAlt="White rose floral centrepiece on a refined wedding table" breadcrumbs={breadcrumbs} />
      <section className="section journal-page"><div className="container"><Reveal className="journal-feature"><Link to={`/journal/${journalPosts[0].slug}`}><MediaImage src={journalPosts[0].image} alt={`${journalPosts[0].title} feature`} /><div><span>{journalPosts[0].category} · {journalPosts[0].readTime}</span><h2>{journalPosts[0].title}</h2><p>{journalPosts[0].dek}</p><strong>Read the guide <ArrowRight size={16} aria-hidden="true" /></strong></div></Link></Reveal><div className="journal-page__grid">{journalPosts.slice(1).map((post) => <Reveal as="article" className="journal-card journal-card--light" key={post.slug}><Link to={`/journal/${post.slug}`}><MediaImage src={post.image} alt={`${post.title} planning guide`} /><span>{post.category} · {post.readTime}</span><h2>{post.title}</h2><p>{post.dek}</p></Link></Reveal>)}</div></div></section>
    </>
  )
}

export function JournalArticle() {
  const { slug } = useParams()
  const post = journalPosts.find((item) => item.slug === slug)
  if (!post) return <Navigate to="/404" replace />
  const service = services.find((item) => item.slug === post.service)
  const related = journalPosts.filter((item) => item.slug !== post.slug && (item.category === post.category || item.service === post.service)).slice(0, 3)
  const path = `/journal/${post.slug}`
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Journal', to: '/journal' }, { label: post.title, to: path }]
  return (
    <article className="article-page">
      <SEO title={`${post.title} | LUMA Journal`} description={post.dek} path={path} type="article" image={`https://wedding-planner.vercel.app${post.image}`} breadcrumbs={breadcrumbs} article />
      <header className="article-header container"><Breadcrumbs items={breadcrumbs} /><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="article-header__dek">{post.dek}</p><span><Clock size={15} aria-hidden="true" />{post.readTime}</span></header>
      <div className="container article-hero"><MediaImage src={post.image} alt={`${post.title} article feature`} eager /></div>
      <div className="container article-layout">
        <aside className="article-toc"><span>In this guide</span><ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></aside>
        <div className="article-body">
          <p className="article-disclaimer">This article provides general planning information for a concept business. Requirements, pricing and professional obligations vary by location and supplier.</p>
          {post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><p className="eyebrow">0{index + 1}</p><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
          <div className="article-cta"><p className="eyebrow">Related support</p><h2>{service?.cardTitle}</h2><p>{service?.description}</p><Link className="button button--dark" to={`/services/${service?.slug}`}>Explore the service <ArrowRight size={16} aria-hidden="true" /></Link></div>
          <Link className="text-link" to="/journal"><ArrowLeft size={16} aria-hidden="true" />Back to the journal</Link>
        </div>
      </div>
      <section className="section section--ivory article-related"><div className="container"><p className="eyebrow">Continue reading</p><div>{related.map((item) => <Link key={item.slug} to={`/journal/${item.slug}`}><span>{item.category}</span><h2>{item.title}</h2><ArrowRight aria-hidden="true" /></Link>)}</div></div></section>
    </article>
  )
}
