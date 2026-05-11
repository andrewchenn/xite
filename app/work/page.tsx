import type { Metadata } from 'next'
import RevealBlock from '@/components/RevealBlock'
import WorkCard from '@/components/WorkCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects from Xite — boutique web design for professionals and businesses.',
}

const projects = [
  {
    label: 'Portfolio Website',
    name: 'Harrison & Webb',
    year: '2026',
    desc: 'A partner-level digital presence for a boutique law firm. Clean, authoritative, and built to earn trust in seconds.',
    angle: 45,
    bg: '#0B0B0B',
  },
  {
    label: 'Business Transformation',
    name: 'The Anchor',
    year: '2026',
    desc: 'Complete rebuild for a hospitality group. Responsive, fast, and conversion-optimised. Reservations up 40% in Q1.',
    angle: 135,
    bg: '#0E0E0E',
  },
  {
    label: 'Portfolio Website',
    name: 'Studio Mercer',
    year: '2026',
    desc: 'Architecture practice website. Every page as considered and deliberate as the buildings they design.',
    angle: 90,
    bg: '#0C0C0C',
  },
]

export default function WorkPage() {
  return (
    <>
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <div className="py-20 border-b border-x-border">
          <RevealBlock>
            <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-5">
              Work
            </span>
            <h1
              className="font-serif font-normal text-x-black leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(38px, 5.2vw, 76px)' }}
            >
              Selected projects.
            </h1>
          </RevealBlock>
        </div>
      </div>

      <section className="py-[120px] max-md:py-[88px] max-sm:py-[72px]">
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 max-sm:grid-cols-1">
            {projects.map((p, i) => (
              <RevealBlock key={p.name} delay={i * 80}>
                <WorkCard
                  label={p.label}
                  name={p.name}
                  desc={p.desc}
                  angle={p.angle}
                  bg={p.bg}
                  patternId={`wp${i}`}
                  aspect="3 / 2"
                  year={p.year}
                />
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Working on something new?"
        cta="Start a project"
        href="/contact"
        headlineSizeClass="text-[clamp(28px,4vw,52px)]"
      />
    </>
  )
}
