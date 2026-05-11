export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg
        viewBox="0 0 600 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="heroLines"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(28)"
          >
            <line x1="0" y1="0" x2="0" y2="9" stroke="#0A0A0A" strokeWidth="0.6" />
          </pattern>
          <clipPath id="heroDiscClip">
            <circle cx="430" cy="380" r="240" />
          </clipPath>
        </defs>

        <g className="hero-art-drift">
          <g clipPath="url(#heroDiscClip)">
            <rect x="0" y="0" width="600" height="800" fill="#FAFAFA" />
            <rect x="0" y="0" width="600" height="800" fill="url(#heroLines)" opacity="0.5" />
          </g>
          <circle cx="430" cy="380" r="240" fill="none" stroke="#0A0A0A" strokeWidth="1" />

          <circle cx="430" cy="380" r="298" fill="none" stroke="#0A0A0A" strokeWidth="0.6" opacity="0.3" />

          <circle cx="178" cy="540" r="42" fill="#0A0A0A" />

          {Array.from({ length: 24 }).map((_, idx) => {
            const a = (idx / 24) * Math.PI * 2
            const r1 = 320, r2 = 332
            const x1 = 430 + Math.cos(a) * r1
            const y1 = 380 + Math.sin(a) * r1
            const x2 = 430 + Math.cos(a) * r2
            const y2 = 380 + Math.sin(a) * r2
            return (
              <line
                key={idx}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#0A0A0A" strokeWidth="0.5" opacity="0.45"
              />
            )
          })}

          <line x1="430" y1="60"  x2="430" y2="100" stroke="#0A0A0A" strokeWidth="0.6" opacity="0.4" />
          <line x1="430" y1="660" x2="430" y2="700" stroke="#0A0A0A" strokeWidth="0.6" opacity="0.4" />

          <g
            fontFamily="'SF Mono', 'JetBrains Mono', monospace"
            fontSize="9"
            fill="#9B9B9B"
            letterSpacing="0.05em"
          >
            <text x="124" y="142">01 / xitedigital.online</text>
            <text x="540" y="142" textAnchor="end">— EST 2026</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
