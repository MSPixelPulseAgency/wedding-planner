import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { PageHero } from '../components/common/PageHero'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { Reveal } from '../components/common/Reveal'
import { faqGroups, image } from '../data/siteData'

export default function FAQ() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'FAQ', to: '/faq' }]
  return (
    <>
      <SEO title="Wedding Planner FAQ | LUMA Toronto" description="Answers about wedding planning scope, coordination, investment, destination logistics and working together." path="/faq" breadcrumbs={breadcrumbs} />
      <PageHero eyebrow="Frequently asked questions" title="Clear answers before a proposal." text="Planning works best when scope, responsibilities, timing and limitations are visible from the beginning." image={image('romantic-table-setting')} imageAlt="Elegant floral table setting with candlelight" breadcrumbs={breadcrumbs} compact />
      <section className="section faq-page"><div className="container faq-page__grid"><aside><p className="eyebrow">Explore by topic</p>{faqGroups.map((group, index) => <a key={group.title} href={`#faq-group-${index}`}>{group.title}</a>)}<Link className="button button--dark" to="/contact">Ask about your event <ArrowRight size={16} aria-hidden="true" /></Link></aside><div>{faqGroups.map((group, index) => <Reveal as="section" key={group.title} className="faq-group"><p className="eyebrow">0{index + 1}</p><h2 id={`faq-group-${index}`}>{group.title}</h2><FAQAccordion items={group.items} idPrefix={`faq-${index}`} /></Reveal>)}</div></div></section>
    </>
  )
}
