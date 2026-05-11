'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xgodrakz')

  if (state.succeeded) {
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
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          name="name"
          className={inputClass}
          type="text"
          placeholder="Your full name"
          autoComplete="name"
          required
        />
        <ValidationError field="name" errors={state.errors} className={errorClass} />
      </div>

      <div className={fieldClass}>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          name="email"
          className={inputClass}
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          required
        />
        <ValidationError field="email" errors={state.errors} className={errorClass} />
      </div>

      <div className={fieldClass}>
        <label htmlFor="projType" className={labelClass}>Project type</label>
        <select
          id="projType"
          name="projType"
          className={`${inputClass} cursor-pointer appearance-none`}
          defaultValue=""
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="portfolio">Portfolio website</option>
          <option value="business">Business transformation</option>
          <option value="other">Something else</option>
        </select>
        <ValidationError field="projType" errors={state.errors} className={errorClass} />
      </div>

      <div className={`${fieldClass} border-b border-x-border`}>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          className={`${inputClass} resize-none leading-[1.65] min-h-[100px]`}
          placeholder="Tell us about your project, your timeline, and any context that would help."
          rows={5}
          required
        />
        <ValidationError field="message" errors={state.errors} className={errorClass} />
      </div>

      <ValidationError errors={state.errors} className={`${errorClass} mt-4 block`} />

      <div className="mt-8">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-block font-sans text-[12px] font-medium text-white bg-x-black px-7 py-[14px] tracking-[0.07em] uppercase hover:opacity-80 transition-opacity duration-200 disabled:opacity-60"
        >
          {state.submitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
