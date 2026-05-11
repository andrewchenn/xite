import Link from 'next/link'

interface LogoMarkProps {
  size?: number
  href?: string
}

export default function LogoMark({ size = 36, href }: LogoMarkProps) {
  const mark = (
    <div
      className="bg-x-black text-white flex items-center justify-center font-serif font-normal tracking-[-0.02em] select-none flex-shrink-0 cursor-pointer"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.58) }}
    >
      X
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label="Xite home">
        {mark}
      </Link>
    )
  }

  return mark
}
