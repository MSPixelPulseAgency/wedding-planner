const attempts = new Map()
const allowedFields = ['firstName', 'lastName', 'email', 'phone', 'preferredContact', 'eventType', 'eventDate', 'dateFlexibility', 'location', 'guestCount', 'service', 'budget', 'referral', 'vision']
const clean = (value, max = 2000) => String(value ?? '').trim().slice(0, max)
const escapeHtml = (value) => clean(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;')

function sameOrigin(request) {
  const origin = request.headers.origin
  if (!origin) return true
  const host = request.headers['x-forwarded-host'] || request.headers.host
  try { return new URL(origin).host === host } catch { return false }
}

function rateLimited(request) {
  const key = request.headers['x-forwarded-for']?.split(',')[0]?.trim() || request.socket?.remoteAddress || 'unknown'
  const now = Date.now()
  const recent = (attempts.get(key) || []).filter((time) => now - time < 10 * 60 * 1000)
  recent.push(now)
  attempts.set(key, recent)
  return recent.length > 5
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') return response.status(405).json({ message: 'Use POST to submit an inquiry.' })
  if (!sameOrigin(request)) return response.status(403).json({ message: 'This form must be submitted from the LUMA website.' })
  if (rateLimited(request)) return response.status(429).json({ message: 'Too many attempts. Please wait a few minutes and try again.' })

  const body = request.body || {}
  if (clean(body.website, 120)) return response.status(200).json({ ok: true })
  const data = Object.fromEntries(allowedFields.map((field) => [field, clean(body[field], field === 'vision' ? 4000 : 300)]))
  if (!data.firstName || !data.lastName || !/^\S+@\S+\.\S+$/.test(data.email) || !data.eventType || !data.location || !data.service || data.vision.length < 20 || body.consent !== true) {
    return response.status(400).json({ message: 'Please complete the required fields and confirm consent.' })
  }
  if (!process.env.RESEND_API_KEY) return response.status(503).json({ code: 'EMAIL_NOT_CONFIGURED', message: 'Secure email delivery is not configured yet. Please use the prepared-email option below.' })

  const rows = allowedFields.map((field) => `<tr><th style="padding:8px;text-align:left;vertical-align:top">${escapeHtml(field)}</th><td style="padding:8px">${escapeHtml(data[field] || 'Not provided')}</td></tr>`).join('')
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL || 'LUMA Website <onboarding@resend.dev>',
      to: [process.env.INQUIRY_TO_EMAIL || 'mspixelpulse@gmail.com'],
      reply_to: data.email,
      subject: `LUMA inquiry: ${data.eventType} — ${data.firstName} ${data.lastName}`,
      html: `<h1>New LUMA website inquiry</h1><p>Submitted with explicit reply consent.</p><table style="border-collapse:collapse">${rows}</table>`,
    }),
  })
  if (!resendResponse.ok) {
    console.error('Resend inquiry error', resendResponse.status, await resendResponse.text())
    return response.status(502).json({ message: 'The email service could not accept this inquiry. Please use the prepared-email option below.' })
  }
  return response.status(200).json({ ok: true, message: 'Your inquiry was sent securely.' })
}
