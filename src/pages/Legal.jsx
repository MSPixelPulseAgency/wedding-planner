import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'

const copy = {
  privacy: {
    title: 'Privacy',
    description: 'Privacy information for the LUMA wedding and event planning demo website.',
    updated: 'August 26, 2026',
    sections: [
      ['This is a demonstration website', 'LUMA is a fictional concept brand presented as a portfolio demo. The site does not claim a real office, active social accounts or an operating LUMA planning business.'],
      ['Inquiry information', 'When secure email delivery is configured, the inquiry endpoint validates your submission and sends it to the site owner through Resend. If delivery is not configured or does not confirm receipt, the site offers a prepared-email fallback that you review and send from your own email application.'],
      ['Feedback information', 'The feedback endpoint is designed to store genuine submissions privately in Supabase and send a private notification through Resend. It remains unavailable until both services are securely configured. Feedback is never published automatically, even when contact permission is selected.'],
      ['Security and retention', 'Provider credentials stay on the server. Forms use input validation, a honeypot and a short-window rate limit. A real operator must define retention and deletion practices before collecting production submissions.'],
      ['Local browser features', 'Interactive selections may be held temporarily in browser memory while you use a page. This demo does not intentionally set marketing cookies or install third-party analytics.'],
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
      ['No client relationship', 'Using the site, sending an inquiry or sharing feedback does not create a planner-client relationship. A real engagement would require a written agreement, confirmed scope and payment terms.'],
      ['Accuracy and outside resources', 'Planning guidance is general. Travel, legal, permit, insurance, pricing and venue requirements can change and should be confirmed with appropriate official or qualified sources.'],
      ['Intellectual property and media', 'The LUMA concept, interface and original copy are demo materials. Stock photographs and videos remain subject to the Pexels licence and do not imply endorsement by people pictured.'],
      ['Before real-world use', 'Replace remaining placeholders, configure and monitor approved form infrastructure, obtain professional legal review and verify every business claim before adapting this demonstration for a live client.'],
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
