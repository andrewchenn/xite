import type { Metadata } from 'next'
import Link from 'next/link'
import RevealBlock from '@/components/RevealBlock'
import WorkCard from '@/components/WorkCard'
import CTABanner from '@/components/CTABanner'
import HeroCycler from '@/components/HeroCycler'
import HeroArt from '@/components/HeroArt'

export const metadata: Metadata = {
  title: 'Xite — Boutique Web Design Studio',
  description:
    'Boutique web design studio delivering exceptional websites for professionals and businesses. Portfolio sites and business transformations.',
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col justify-end pb-24 pt-[calc(72px+60px)]">
      <HeroArt />
      <HeroCycler />
      <div className="relative z-10 max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6 w-full">
        <div className="flex justify-between items-end">
          <div className="max-w-[820px]">
            <RevealBlock>
              <h1
                className="font-serif font-normal text-x-black leading-[1.04] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(48px, 7.2vw, 104px)' }}
              >
                Websites that work as hard as you do.
              </h1>
            </RevealBlock>
            <RevealBlock delay={80}>
              <div className="w-12 h-px bg-x-border my-8" />
              <p className="font-sans text-[15px] text-x-gray max-w-[420px] leading-[1.65] font-light">
                Boutique web design for professionals and businesses who take their online presence seriously.
              </p>
            </RevealBlock>
            <RevealBlock delay={160}>
              <div className="flex items-center gap-8 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block font-sans text-[12px] font-medium text-white bg-x-black px-7 py-[14px] tracking-[0.07em] uppercase hover:opacity-80 transition-opacity duration-200"
                >
                  Start a project
                </Link>
                <Link
                  href="/work"
                  className="btn-ghost-arrow font-sans text-[14px] font-normal text-x-black"
                >
                  View our work <span>&#8594;</span>
                </Link>
              </div>
            </RevealBlock>
          </div>

          <div className="hidden md:block pb-1 flex-shrink-0 ml-10">
            <span
              className="font-sans text-[11px] text-[#CACACA] tracking-[0.1em] uppercase block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Est. 2026 — Sydney
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services Teaser ───────────────────────────────────────────────────────────

function ServicesTeaser() {
  return (
    <section className="border-t border-x-border py-[120px] max-md:py-[88px] max-sm:py-[72px]">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <RevealBlock className="mb-[52px]">
          <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase">
            Services
          </span>
        </RevealBlock>

        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <RevealBlock>
            <div className="pr-20 max-md:pr-0 max-md:pb-12">
              <h3 className="font-serif text-[26px] font-normal text-x-black tracking-[-0.01em]">
                For Professionals
              </h3>
              <p className="font-sans text-[14px] text-x-gray mt-[14px] leading-[1.7] max-w-[360px] font-light">
                Portfolio websites for lawyers, consultants, coaches, architects, and creatives. A credible online presence that converts visitors into clients.
              </p>
              <Link
                href="/services"
                className="btn-ghost-arrow inline-flex items-center font-sans text-[12px] text-x-black mt-6 font-medium tracking-[0.06em] uppercase"
              >
                Explore <span>&#8594;</span>
              </Link>
            </div>
          </RevealBlock>

          <RevealBlock delay={100}>
            <div className="pl-20 border-l border-x-border max-md:pl-0 max-md:border-l-0 max-md:border-t max-md:pt-12">
              <h3 className="font-serif text-[26px] font-normal text-x-black tracking-[-0.01em]">
                For Businesses
              </h3>
              <p className="font-sans text-[14px] text-x-gray mt-[14px] leading-[1.7] max-w-[360px] font-light">
                Small business transformations — rebuilding outdated sites into fast, SEO-optimised, lead-generating presences that match your ambitions.
              </p>
              <Link
                href="/services"
                className="btn-ghost-arrow inline-flex items-center font-sans text-[12px] text-x-black mt-6 font-medium tracking-[0.06em] uppercase"
              >
                Explore <span>&#8594;</span>
              </Link>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  )
}

// ── Selected Work ─────────────────────────────────────────────────────────────

const projects = [
  {
    label: 'Portfolio Website',
    name: 'Faded by Shreyash',
    desc: 'Personal brand site for Sydney barber Shreyash — precision fades, private sessions, and a presence that matches the craft.',
    angle: 90,
    bg: '#0C0C0C',
    href: 'https://fadedstudio.com.au',
    image: '/work/faded.png',
  },
]

function SelectedWork() {
  return (
    <section className="bg-x-off-white border-t border-b border-x-border py-[120px] max-md:py-[88px] max-sm:py-[72px]">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <RevealBlock className="mb-14">
          <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-3">
            Selected Work
          </span>
          <h2
            className="font-serif font-normal text-x-black leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
          >
            Recent work.
          </h2>
        </RevealBlock>

        <div className="grid grid-cols-3 gap-x-10 gap-y-12 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {projects.map((p, i) => (
            <RevealBlock key={p.name} delay={i * 80}>
              <WorkCard
                label={p.label}
                name={p.name}
                desc={p.desc}
                angle={p.angle}
                bg={p.bg}
                patternId={`sh${i}`}
                aspect="4 / 3"
                href={p.href}
                image={(p as { image?: string }).image}
              />
            </RevealBlock>
          ))}
        </div>

        <RevealBlock>
          <div className="mt-14 pt-8 border-t border-x-border flex justify-end">
            <Link href="/work" className="btn-ghost-arrow font-sans text-[14px] font-normal text-x-black">
              All work <span>&#8594;</span>
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}

// ── Differentiators ───────────────────────────────────────────────────────────

const differentiators = [
  {
    statement: 'Fixed price.\nNo surprises.',
    detail:
      'Every project is scoped and quoted upfront. You know exactly what you\'re paying before a single wireframe is drawn.',
  },
  {
    statement: 'Boutique quality,\nwithout the wait.',
    detail:
      'No 12-week agency timelines. Most projects are live within four to six weeks of kickoff.',
  },
  {
    statement: 'Built for results,\nnot just aesthetics.',
    detail:
      'Beautiful design that\'s also fast, accessible, and optimised to turn visitors into enquiries.',
  },
  {
    statement: 'Powered by AI,\nrefined by craft.',
    detail:
      'AI-augmented production means we deliver more, faster — without compromising the details that matter.',
  },
]

function Differentiators() {
  return (
    <section className="py-[120px] max-md:py-[88px] max-sm:py-[72px]">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <RevealBlock className="mb-14">
          <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-3">
            Why Xite
          </span>
          <h2
            className="font-serif font-normal text-x-black leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
          >
            The difference is in the details.
          </h2>
        </RevealBlock>

        <div className="grid grid-cols-2 max-md:grid-cols-1">
          {differentiators.map((d, i) => (
            <RevealBlock key={i} delay={i * 60}>
              <div
                className={`py-12 border-t border-x-border ${
                  i % 2 === 0
                    ? 'pr-20 max-md:pr-0'
                    : 'pl-20 border-l border-x-border max-md:pl-0 max-md:border-l-0'
                }`}
              >
                <h3
                  className="font-serif text-[22px] font-normal text-x-black leading-[1.25] tracking-[-0.01em] whitespace-pre-line"
                >
                  {d.statement}
                </h3>
                <p className="font-sans text-[14px] text-x-gray mt-3 leading-[1.65] font-light">
                  {d.detail}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ───────────────────────────────────────────────────────────────────

const steps = [
  { num: '01', name: 'Discovery', desc: 'A focused conversation about your goals, audience, and what the site needs to do.' },
  { num: '02', name: 'Design', desc: 'Full visual design delivered for review before a single line of code is written.' },
  { num: '03', name: 'Build', desc: 'Clean, fast, accessible code. Mobile-first, SEO-ready, and built to perform.' },
  { num: '04', name: 'Launch', desc: 'Smooth deployment, post-launch testing, and a site you\'re proud to share.' },
]

function Process() {
  return (
    <section className="bg-x-off-white border-t border-b border-x-border py-[120px] max-md:py-[88px] max-sm:py-[72px]">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <RevealBlock className="mb-14">
          <span className="font-sans text-[11px] font-medium text-x-light-gray tracking-[0.13em] uppercase block mb-3">
            Process
          </span>
          <h2
            className="font-serif font-normal text-x-black leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
          >
            Four steps to launch.
          </h2>
        </RevealBlock>

        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {steps.map((s, i) => (
            <RevealBlock key={i} delay={i * 80}>
              <div className="pr-10 pt-10 pb-10 border-t border-x-border max-[900px]:last:border-b-0">
                <span className="font-serif text-[44px] font-normal text-[#DEDEDE] leading-none tracking-[-0.03em]">
                  {s.num}
                </span>
                <h3 className="font-serif text-[19px] font-normal text-x-black mt-5">{s.name}</h3>
                <p className="font-sans text-[13px] text-x-gray mt-[10px] leading-[1.65] font-light">
                  {s.desc}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <SelectedWork />
      <Differentiators />
      <Process />
      <CTABanner
        headline={"Ready to build\nsomething exceptional?"}
        cta="Get in touch"
        href="/contact"
      />
    </>
  )
}
