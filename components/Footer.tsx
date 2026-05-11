import Link from 'next/link'
import LogoMark from './LogoMark'

const links = ['Work', 'Services', 'About', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-x-border py-11">
      <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <LogoMark size={30} href="/" />

          <nav className="flex gap-7 flex-wrap" aria-label="Footer navigation">
            {links.map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="font-sans text-[12px] text-x-light-gray hover:text-x-black transition-colors duration-200 tracking-[0.04em]"
              >
                {l}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:xitedevelopment@gmail.com"
            className="font-sans text-[12px] text-x-light-gray hover:text-x-black transition-colors duration-200"
          >
            xitedevelopment@gmail.com
          </a>

          <span className="font-sans text-[12px] text-x-light-gray">
            &copy; 2026 Xite. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
