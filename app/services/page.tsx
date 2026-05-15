import type { Metadata } from 'next'
import RevealBlock from '@/components/RevealBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Two services, one standard of quality. Portfolio websites and business transformations from Xite.',
}

interface Tier {
  name: string
  price: string
  desc: string
  features: string[]
}

function TierGrid({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="grid grid-cols-3 border border-x-border mt-12 max-[900px]:grid-cols-1">
      {tiers.map((t, i) => (
        <RevealBlock key={i} delay={i * 70}>
          <div
            className={`p-11 max-md:p-8 h-full ${
              i < tiers.length - 1
                ? 'border-r border-x-border max-[900px]:border-r-0 max-[900px]:border-b'
                : ''
            }`}
          >
            <p className="font-sans text-[11px] font-medium tracking-[0.13em] uppercase text-x-light-gray">
              {t.name}
            </p>
            <p className="font-serif text-[38px] font-normal text-x-black mt-[14px] tracking-[-0.02em]">
              {t.price}
            </p>
            <p className="font-sans text-[13px] text-x-gray mt-[14px] leading-[1.65] font-light">
              {t.desc}
            </p>
            <div className="mt-6 flex flex-col gap-[9px]">
              {t.features.map((f, j) => (
                <div key={j} className="flex items-baseline gap-[10px] font-sans text-[13px] text-x-black">
                  <span className="text-x-light-gray flex-shrink-0">—</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      ))}
    </div>
  )
}

const portfolioTiers: Tier[] = [
  {
    name: 'Essential',
    price: 'From $500',
    desc: 'Single-page portfolio. Fast, mobile-first, and ready to convert.',
    features: ['One-page design', 'Mobile responsive', 'Contact form', 'Google Analytics', '2 revision rounds'],
  },
  {
    name: 'Professional',
    price: 'From $800',
    desc: 'Multi-page portfolio with blog and full SEO optimisation.',
    features: ['Up to 6 pages', 'Blog / journal', 'SEO optimisation', 'Performance audit', '3 revision rounds', 'Launch support'],
  },
  {
    name: 'Premium',
    price: 'From $1,200',
    desc: 'Fully bespoke design, custom interactions, CMS, built to grow.',
    features: ['Custom design', 'CMS integration', 'Animations', 'Accessibility audit', 'Unlimited revisions', '3-month support'],
  },
]

const businessTiers: Tier[] = [
  {
    name: 'Refresh',
    price: 'From $600',
    desc: 'Visual redesign of your existing site without a full rebuild.',
    features: ['Design overhaul', 'Mobile optimisation', 'Copy editing', 'Basic SEO', '2 revision rounds'],
  },
  {
    name: 'Rebuild',
    price: 'From $900',
    desc: 'Full rebuild on a modern stack. Faster, better-ranked, built to convert.',
    features: ['Full rebuild', 'New architecture', 'SEO and performance', 'CMS for easy edits', 'Lead gen setup', 'Launch support'],
  },
  {
    name: 'Growth',
    price: 'From $1,500',
    desc: 'E-commerce, booking systems, or complex integrations built to scale.',
    features: ['E-commerce / booking', 'Custom integrations', 'Analytics setup', 'Dedicated support', 'Quarterly reviews'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <div className="py-20 border-b border-x-border">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
              Services
            </span>
            <h1
              className="font-serif font-normal text-x-black leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(38px, 5.2vw, 76px)' }}
            >
              Two services.<br />One standard of quality.
            </h1>
          </RevealBlock>
        </div>
      </div>

      <section className="py-[120px] max-md:py-[88px] max-sm:py-[72px]">
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-3">
              Service 01
            </span>
            <h2
              className="font-serif font-normal text-x-black leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
            >
              Portfolio Websites
            </h2>
            <p className="font-sans text-[15px] text-x-gray mt-4 max-w-[540px] leading-[1.7] font-light">
              For lawyers, consultants, coaches, architects, and any professional who needs a credible online presence that converts visitors into clients.
            </p>
          </RevealBlock>
          <TierGrid tiers={portfolioTiers} />
        </div>
      </section>

      <section className="bg-x-off-white border-t border-b border-x-border py-[120px] max-md:py-[88px] max-sm:py-[72px]">
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-3">
              Service 02
            </span>
            <h2
              className="font-serif font-normal text-x-black leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
            >
              Business Transformations
            </h2>
            <p className="font-sans text-[15px] text-x-gray mt-4 max-w-[540px] leading-[1.7] font-light">
              For small businesses with outdated sites that deserve better. We rebuild them into fast, SEO-optimised, lead-generating presences.
            </p>
          </RevealBlock>
          <TierGrid tiers={businessTiers} />
        </div>
      </section>

      <CTABanner
        headline="Not sure which fits?"
        subtext="Most clients start with a conversation. Get in touch and we will figure it out together."
        cta="Get in touch"
        href="/contact"
        headlineSizeClass="text-[clamp(28px,4vw,52px)]"
      />
    </>
  )
}
