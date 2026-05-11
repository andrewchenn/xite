'use client'

import { useState, useEffect } from 'react'

const HERO_CYCLE = [
  { kind: 'code',   prefix: '$',  text: 'npm run craft' },
  { kind: 'phrase', prefix: '//', text: 'design with intent' },
  { kind: 'code',   prefix: '>',  text: 'const intent = "clarity";' },
  { kind: 'phrase', prefix: '//', text: 'built to perform' },
  { kind: 'code',   prefix: '>',  text: 'await ship({ ttfb: "80ms" });' },
  { kind: 'phrase', prefix: '//', text: 'every pixel earns its place' },
  { kind: 'code',   prefix: '>',  text: '<section role="hero" />' },
  { kind: 'phrase', prefix: '//', text: 'accessible by default' },
  { kind: 'code',   prefix: '>',  text: 'aria-label="primary nav"' },
  { kind: 'phrase', prefix: '//', text: 'made to convert' },
]

type Phase = 'typing' | 'hold' | 'deleting' | 'gap'

export default function HeroCycler() {
  const [i, setI] = useState(0)
  const [out, setOut] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setOut(HERO_CYCLE[i].text)
      return
    }

    const item = HERO_CYCLE[i]

    if (phase === 'typing') {
      if (out.length < item.text.length) {
        const t = setTimeout(
          () => setOut(item.text.slice(0, out.length + 1)),
          45 + Math.random() * 35
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('hold'), 0)
      return () => clearTimeout(t)
    }

    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('deleting'), 1400)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (out.length > 0) {
        const t = setTimeout(
          () => setOut(item.text.slice(0, out.length - 1)),
          22
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('gap'), 0)
      return () => clearTimeout(t)
    }

    if (phase === 'gap') {
      const t = setTimeout(() => {
        setI((n) => (n + 1) % HERO_CYCLE.length)
        setPhase('typing')
      }, 320)
      return () => clearTimeout(t)
    }
  }, [phase, out, i])

  const item = HERO_CYCLE[i]
  const isPhrase = item.kind === 'phrase'

  return (
    <div className="hero-cycler" aria-hidden="true">
      <div className="hero-cycle-track">
        <span className={`hero-cycle-line${isPhrase ? ' is-phrase' : ''}`}>
          <span className="hero-cycle-prefix">{item.prefix}</span>
          {out}
          <span className="hero-cycle-caret" />
        </span>
      </div>
    </div>
  )
}
