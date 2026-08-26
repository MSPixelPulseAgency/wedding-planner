import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Mail } from 'lucide-react'
import { contact } from '../../data/siteData'

const eventTypes = ['Wedding', 'Destination Wedding', 'Engagement', 'Anniversary', 'Birthday', 'Shower', 'Corporate Event', 'Gala', 'Brand Event', 'Private Dinner', 'Other']
const serviceOptions = ['Full Planning', 'Partial Planning', 'Coordination', 'Event Design', 'Destination Planning', 'Corporate Production', 'Not Sure Yet']
const initial = {
  firstName: '', lastName: '', email: '', phone: '', preferredContact: 'Email',
  eventType: '', eventDate: '', dateFlexibility: '', location: '', guestCount: '',
  service: '', budget: '', referral: '', vision: '', consent: false,
}

function validateStep(step, data) {
  const errors = {}
  if (step === 0) {
    if (!data.firstName.trim()) errors.firstName = 'Please enter your first name.'
    if (!data.lastName.trim()) errors.lastName = 'Please enter your last name.'
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Please enter a valid email address.'
  }
  if (step === 1) {
    if (!data.eventType) errors.eventType = 'Please choose an event type.'
    if (!data.location.trim()) errors.location = 'Please share the event location or venue status.'
    if (!data.service) errors.service = 'Please choose the support you are considering.'
  }
  if (step === 2) {
    if (data.vision.trim().length < 20) errors.vision = 'Please tell us a little more (at least 20 characters).'
    if (!data.consent) errors.consent = 'Please confirm that LUMA may use these details to respond.'
  }
  return errors
}

export function InquiryForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [prepared, setPrepared] = useState(false)
  const progress = ((step + 1) / 3) * 100

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`LUMA demo inquiry — ${data.eventType || 'Event'} — ${data.firstName} ${data.lastName}`)
    const body = encodeURIComponent([
      'This inquiry was prepared on the LUMA demo website. No data was transmitted by the site.', '',
      `Name: ${data.firstName} ${data.lastName}`, `Email: ${data.email}`, `Phone: ${data.phone || 'Not provided'}`,
      `Preferred contact: ${data.preferredContact}`, `Event type: ${data.eventType}`, `Event date: ${data.eventDate || 'Not set'}`,
      `Date flexibility: ${data.dateFlexibility || 'Not provided'}`, `Location / venue: ${data.location}`,
      `Estimated guests: ${data.guestCount || 'Not provided'}`, `Service: ${data.service}`,
      `Approximate budget: ${data.budget || 'Not provided'}`, `How they heard about LUMA: ${data.referral || 'Not provided'}`, '',
      'Vision:', data.vision,
    ].join('\n'))
    return `mailto:${contact.email}?subject=${subject}&body=${body}`
  }, [data])

  const update = (event) => {
    const { name, value, type, checked } = event.target
    setData((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setPrepared(false)
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const next = () => {
    const nextErrors = validateStep(step, data)
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setStep((current) => Math.min(2, current + 1))
  }

  const prepare = (event) => {
    event.preventDefault()
    const nextErrors = validateStep(2, data)
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setPrepared(true)
  }

  const fieldError = (name) => errors[name] ? <span className="field-error" id={`${name}-error`} role="alert">{errors[name]}</span> : null
  const errorProps = (name) => ({ 'aria-invalid': Boolean(errors[name]), 'aria-describedby': errors[name] ? `${name}-error` : undefined })

  return (
    <form className="inquiry-form" onSubmit={prepare} noValidate>
      <div className="inquiry-form__status">
        <span>Step {step + 1} of 3</span><span>{['About you', 'Event details', 'Your vision'][step]}</span>
      </div>
      <div className="inquiry-form__progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <div className="sr-only" aria-live="polite">Step {step + 1}: {['About you', 'Event details', 'Your vision'][step]}</div>

      {step === 0 && (
        <fieldset>
          <legend>Let’s begin with you.</legend>
          <p>Required fields are marked.</p>
          <div className="form-grid form-grid--two">
            <label>First name *<input name="firstName" value={data.firstName} onChange={update} autoComplete="given-name" {...errorProps('firstName')} />{fieldError('firstName')}</label>
            <label>Last name *<input name="lastName" value={data.lastName} onChange={update} autoComplete="family-name" {...errorProps('lastName')} />{fieldError('lastName')}</label>
            <label>Email *<input type="email" name="email" value={data.email} onChange={update} autoComplete="email" {...errorProps('email')} />{fieldError('email')}</label>
            <label>Phone <span>(optional)</span><input type="tel" name="phone" value={data.phone} onChange={update} autoComplete="tel" /></label>
            <label className="form-grid__wide">Preferred contact method<select name="preferredContact" value={data.preferredContact} onChange={update}><option>Email</option><option>Phone</option><option>Text message</option></select></label>
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend>What are you planning?</legend>
          <p>Estimates are welcome. This demo never claims live date availability.</p>
          <div className="form-grid form-grid--two">
            <label>Event type *<select name="eventType" value={data.eventType} onChange={update} {...errorProps('eventType')}><option value="">Choose one</option>{eventTypes.map((item) => <option key={item}>{item}</option>)}</select>{fieldError('eventType')}</label>
            <label>Event date<input type="date" name="eventDate" value={data.eventDate} onChange={update} /></label>
            <label>Date flexibility<input name="dateFlexibility" value={data.dateFlexibility} onChange={update} placeholder="Fixed, flexible, or still exploring" /></label>
            <label>Estimated guest count<input type="number" min="1" name="guestCount" value={data.guestCount} onChange={update} inputMode="numeric" /></label>
            <label className="form-grid__wide">Location / venue status *<input name="location" value={data.location} onChange={update} placeholder="City, venue, or still exploring" {...errorProps('location')} />{fieldError('location')}</label>
            <label>Planning service *<select name="service" value={data.service} onChange={update} {...errorProps('service')}><option value="">Choose one</option>{serviceOptions.map((item) => <option key={item}>{item}</option>)}</select>{fieldError('service')}</label>
            <label>Approximate event budget<input name="budget" value={data.budget} onChange={update} placeholder="A range is helpful" /></label>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Tell us what you want it to feel like.</legend>
          <p>A few honest details are more useful than a perfect brief.</p>
          <div className="form-grid">
            <label>How did you hear about us?<input name="referral" value={data.referral} onChange={update} /></label>
            <label>Your vision *<textarea name="vision" rows="7" value={data.vision} onChange={update} placeholder="Share what matters most, what has already been decided, and where you want support." {...errorProps('vision')} />{fieldError('vision')}</label>
            <label className="checkbox-label"><input type="checkbox" name="consent" checked={data.consent} onChange={update} {...errorProps('consent')} /><span>I agree that these details may be used to respond to my inquiry. This demo does not store or submit the form.</span></label>
            {fieldError('consent')}
          </div>
        </fieldset>
      )}

      <div className="inquiry-form__actions">
        {step > 0 && <button className="button button--ghost" type="button" onClick={() => { setStep((current) => current - 1); setPrepared(false) }}><ArrowLeft size={17} aria-hidden="true" />Back</button>}
        {step < 2 ? <button className="button button--dark" type="button" onClick={next}>Continue<ArrowRight size={17} aria-hidden="true" /></button> : <button className="button button--dark" type="submit">Prepare email<Mail size={17} aria-hidden="true" /></button>}
      </div>

      {prepared && (
        <div className="inquiry-form__prepared" role="status">
          <Check aria-hidden="true" />
          <div><strong>Your email is ready.</strong><p>No data has been sent or stored. Use the link below to open your email app and review the message.</p><a className="button button--dark" href={mailto}>Open prepared email</a></div>
        </div>
      )}
    </form>
  )
}
