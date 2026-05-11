'use client'

import { useState, FormEvent } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Errors {
  name?: string
  email?: string
  projType?: string
  message?: string
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projType, setProjType] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const clearError = (key: keyof Errors) =>
    setErrors((e) => ({ ...e, [key]: undefined }))

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const e: Errors = {}
    if (!name.trim()) e.name = 'Required'
    if (!email.trim() || !EMAIL_RE.test(email)) e.email = 'A valid email is required'
    if (!projType) e.projType = 'Please select a project type'
    if (message.trim().length < 10) e.message = 'Please tell us a bit more'
    if (Object.keys(e).length) { setErrors(e); return }

    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1100)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center py-20">
        <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
          Message sent
        </span>
        <h2
          className="font-serif font-normal text-x-black leading-[1.08] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(38px, 5.2vw, 76px)' }}
        >
          We will be in touch<br />very soon.
        </h2>
        <p className="font-sans text-[15px] text-x-gray mt-6 max-w-[380px] leading-[1.7] font-light">
          Thank you for reaching out. We aim to respond within one business day.
        </p>
      </div>
    )
  }

  const fieldClass = 'border-t border-x-border py-[22px]'
  const labelClass = 'font-sans text-[11px] font-medium tracking-[0.13em] uppercase text-x-light-gray block mb-[10px]'
  const inputClass = 'font-sans text-[15px] text-x-black bg-transparent border-none outline-none w-full placeholder:text-[#C8C8C8] leading-[1.5]'
  const errorClass = 'font-sans text-[12px] text-[#CC3333] mt-[6px]'

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={fieldClass}>
        <label className={labelClass}>Name</label>
        <input
          className={inputClass}
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); clearError('name') }}
          placeholder="Your full name"
          autoComplete="name"
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div className={fieldClass}>
        <label className={labelClass}>Email</label>
        <input
          className={inputClass}
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); clearError('email') }}
          placeholder="your@email.com"
          autoComplete="email"
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div className={fieldClass}>
        <label className={labelClass}>Project type</label>
        <select
          className={`${inputClass} cursor-pointer appearance-none`}
          value={projType}
          onChange={(e) => { setProjType(e.target.value); clearError('projType') }}
          style={{ color: projType ? '#0A0A0A' : '#C8C8C8' }}
        >
          <option value="" disabled>Select a service</option>
          <option value="portfolio">Portfolio website</option>
          <option value="business">Business transformation</option>
          <option value="other">Something else</option>
        </select>
        {errors.projType && <p className={errorClass}>{errors.projType}</p>}
      </div>

      <div className={`${fieldClass} border-b border-x-border`}>
        <label className={labelClass}>Message</label>
        <textarea
          className={`${inputClass} resize-none leading-[1.65] min-h-[100px]`}
          value={message}
          onChange={(e) => { setMessage(e.target.value); clearError('message') }}
          placeholder="Tell us about your project, your timeline, and any context that would help."
          rows={5}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={submitting}
          className="inline-block font-sans text-[12px] font-medium text-white bg-x-black px-7 py-[14px] tracking-[0.07em] uppercase hover:opacity-80 transition-opacity duration-200 disabled:opacity-60"
        >
          {submitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
