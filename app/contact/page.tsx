import type { Metadata } from 'next'
import Script from 'next/script'
import RevealBlock from '@/components/RevealBlock'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Xite. Book a free discovery call or send a message about your project.',
}

export default function ContactPage() {
  return (
    <>
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <div className="py-20 border-b border-x-border">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
              Contact
            </span>
            <h1
              className="font-serif font-normal text-x-black leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(38px, 5.2vw, 76px)' }}
            >
              Start a conversation.
            </h1>
          </RevealBlock>
        </div>
      </div>

      <section className="py-[120px] max-md:py-[88px] max-sm:py-[72px]">
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
          <div className="grid grid-cols-[1.1fr_1fr] gap-x-20 max-[900px]:grid-cols-1 max-[900px]:gap-y-16">

            {/* Form */}
            <RevealBlock>
              <ContactForm />
            </RevealBlock>

            {/* Sidebar */}
            <RevealBlock delay={100}>
              <div>
                <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
                  Or book a call
                </span>
                <h3 className="font-serif text-[26px] font-normal text-x-black tracking-[-0.01em] leading-[1.2]">
                  Free 30-minute discovery call
                </h3>
                <p className="font-sans text-[14px] text-x-gray mt-[14px] leading-[1.7] font-light">
                  Not sure where to start? Book a no-obligation call. We will talk through what you are trying to achieve and whether Xite is the right fit.
                </p>

                <div className="mt-6">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/xitedevelopment/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                  <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                  />
                </div>

                <div className="mt-4 pt-6 border-t border-x-border">
                  <p className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase mb-[10px]">
                    Email directly
                  </p>
                  <a
                    href="mailto:xitedevelopment@gmail.com"
                    className="font-sans text-[16px] text-x-black tracking-[-0.01em] hover:opacity-60 transition-opacity duration-200"
                  >
                    xitedevelopment@gmail.com
                  </a>
                </div>
              </div>
            </RevealBlock>

          </div>
        </div>
      </section>
    </>
  )
}
