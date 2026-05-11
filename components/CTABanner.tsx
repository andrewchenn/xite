import Link from 'next/link'
import RevealBlock from './RevealBlock'

interface CTABannerProps {
  headline: string
  subtext?: string
  cta: string
  href?: string
  headlineSizeClass?: string
}

export default function CTABanner({
  headline,
  subtext,
  cta,
  href = '/contact',
  headlineSizeClass,
}: CTABannerProps) {
  return (
    <section className="bg-x-black py-[120px]">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <RevealBlock>
          <h2
            className={`font-serif font-normal text-white leading-[1.1] tracking-[-0.025em] ${headlineSizeClass ?? 'text-[clamp(34px,4.8vw,68px)]'}`}
          >
            {headline}
          </h2>
          {subtext && (
            <p className="font-sans text-[15px] text-white/45 mt-[18px] max-w-[380px] leading-[1.65] font-light">
              {subtext}
            </p>
          )}
        </RevealBlock>
        <RevealBlock delay={100}>
          <div className="mt-11">
            <Link
              href={href}
              className="inline-block font-sans text-[12px] font-medium text-x-black bg-white px-7 py-[14px] tracking-[0.07em] uppercase hover:opacity-80 transition-opacity duration-200"
            >
              {cta}
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
