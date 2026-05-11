interface WorkPlaceholderProps {
  label: string
  aspect?: string
  patternId: string
  angle?: number
  bg?: string
  lineColor?: string
}

export default function WorkPlaceholder({
  label,
  aspect = '4 / 3',
  patternId,
  angle = 45,
  bg = '#0D0D0D',
  lineColor = '#1A1A1A',
}: WorkPlaceholderProps) {
  return (
    <div
      className="relative overflow-hidden flex items-center justify-center w-full"
      style={{ aspectRatio: aspect }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${angle})`}
          >
            <line x1="0" y1="0" x2="0" y2="16" stroke={lineColor} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={bg} />
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span className="relative font-mono text-[11px] text-[#3A3A3A] tracking-[0.12em] uppercase text-center px-5">
        {label}
      </span>
    </div>
  )
}
