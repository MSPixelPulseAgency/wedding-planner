import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'

const copy = {
  privacy: {
    title: 'Privacy',
    description: 'Privacy information for the LUMA wedding and event planning demo website.',
    updated: 'August 26, 2026',
    sections: [
      ['This is a demonstration website', 'LUMA is a fictional concept brand presented as a portfolio demo. The site does not claim a real office, active social accounts or an operating LUMA planning business.'],
      ['Inquiry information', 'The inquiry form runs in your browser. It does not send data to a server, CRM or analytics provider. If you choose “Open prepared email,” your device opens its configured email application and you decide whether to send the message.'],
      ['Local browser features', 'Interactive selections may be held temporarily in browser memory while you use a page. This demo does not intentionally set marketing cookies or store inquiry data.'],
      ['Third-party links and media', 'External links open services controlled by other organizations. Locally hosted stock media is used under its source licence; credits are documented in the project repository.'],
      ['Contact', 'Questions about this demo can be directed to the placeholder agency contact at hello@mspixelpulse.com. Replace this policy with qualified, business-specific language before using the site for a real organization.'],
    ],
  },
  terms: {
    title: 'Terms',
    description: 'Terms for using the LUMA concept wedding and event planning website.',
    updated: 'August 26, 2026',
    sections: [
      ['Concept content only', 'All packages, portfolio stories, testimonials and service descriptions are illustrative. Nothing on this website is an offer, booking confirmation, guarantee of availability or professional advice.'],
      ['No client relationship', 'Using the site or preparing an email does not create a planner-client relationship. A real engagement would require a written agreement, confirmed scope and payment terms.'],
      ['Accuracy and outside resources', 'Planning guidance is general. Travel, legal, permit, insurance, pricing and venue requirements can change and should be confirmed with appropriate official or qualified sources.'],
      ['Intellectual property and media', 'The LUMA concept, interface and original copy are demo materials. Stock photographs and videos remain subject to the Pexels licence and do not imply endorsement by people pictured.'],
      ['Before real-world use', 'Replace placeholders, connect approved form infrastructure, obtain professional legal review and verify every business claim before adapting this demonstration for a live client.'],
    ],
  },
}

export default function Legal({ type }) {
  const page = copy[type]
  const path = `/${type}`
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: page.title, to: path }]
  return (
    <>
      <SEO title={`${page.title} | LUMA Weddings & Events Demo`} description={page.description} path={path} breadcrumbs={breadcrumbs} />
      <header className="legal-header container"><Breadcrumbs items={breadcrumbs} /><p className="eyebrow">LUMA demo website</p><h1>{page.title}</h1><p>Last updated {page.updated}</p></header>
      <section className="legal-body container">{page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</section>
    </>
  )
}
