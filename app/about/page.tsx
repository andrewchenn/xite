import type { Metadata } from 'next'
import RevealBlock from '@/components/RevealBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Xite is a boutique web design studio. Not an agency — a studio. Direct collaboration, full attention, exceptional results.',
}

const beliefs = [
  'Your website is your most important sales asset.',
  'Design without purpose is decoration.',
  'Speed is not a feature. It is a prerequisite.',
  'Every word on a page should earn its place.',
  'You should never have to explain your website to a visitor.',
]

export default function AboutPage() {
  return (
    <>
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <div className="py-20 border-b border-x-border">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
              About
            </span>
            <h1
              className="font-serif font-normal text-x-black leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(38px, 5.2vw, 76px)' }}
            >
              Not an agency.<br />A studio.
            </h1>
          </RevealBlock>
        </div>
      </div>

      <section className="py-[120px] max-md:py-[88px] max-sm:py-[72px]">
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
          <div className="grid grid-cols-2 gap-x-20 max-[900px]:grid-cols-1 max-[900px]:gap-y-14">
            <RevealBlock>
              <div className="font-sans text-[17px] leading-[1.8] text-x-black font-light [&>p+p]:mt-7">
                <p>
                  Xite exists because too many good professionals and businesses have websites that actively work against them. Slow, generic, embarrassing to share.
                </p>
                <p>
                  I started Xite to fix that. My name is Andrew, and I have spent the past decade building digital products for companies that care about quality. What I noticed was that the gap between good enough and genuinely exceptional was not as wide as agencies make it seem. It just requires focus, craft, and the discipline to say no to shortcuts.
                </p>
                <p>
                  Xite operates differently. We take a small number of projects at a time. Every site gets my full attention. No account managers, no handoffs, no meetings that could have been emails. Just direct collaboration between you and the person actually building your site.
                </p>
                <p>
                  The result is agency-quality work at a fraction of the price and timeline, delivered by someone professionally invested in the outcome.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={100}>
              <div>
                <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
                  What we believe
                </span>
                {beliefs.map((b, i) => (
                  <div
                    key={i}
                    className="border-t border-x-border py-[18px] font-sans text-[14px] text-x-black leading-[1.5] font-normal"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      <CTABanner
        headline="If this sounds like the kind of studio you want to work with"
        cta="Let's talk"
        href="/contact"
        headlineSizeClass="text-[clamp(28px,4vw,52px)] max-w-[560px]"
      />
    </>
  )
}
