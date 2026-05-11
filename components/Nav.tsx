'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import LogoMark from './LogoMark'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center bg-white/[0.96] backdrop-blur-[10px] border-b transition-colors duration-300 ${
          scrolled ? 'border-x-border' : 'border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-14 max-md:px-8 max-sm:px-6 w-full flex items-center justify-between">
          <LogoMark size={36} href="/" />

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link-underline font-sans text-[12px] font-normal text-x-black tracking-[0.08em] uppercase${
                  pathname === l.href ? ' active' : ''
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-sans text-[12px] font-medium text-white bg-x-black px-[22px] py-[10px] tracking-[0.07em] uppercase hover:opacity-75 transition-opacity duration-200"
            >
              Start a project
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[1.5px] bg-x-black" />
            <span className="block w-[22px] h-[1.5px] bg-x-black" />
            <span className="block w-[22px] h-[1.5px] bg-x-black" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] bg-x-black flex flex-col justify-center px-6 py-20"
          >
            <button
              className="absolute top-[18px] right-5 bg-transparent border-none text-white text-[32px] cursor-pointer p-2 leading-none font-light"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &#215;
            </button>

            <div className="flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    className="block font-serif text-[clamp(36px,8vw,56px)] font-normal text-white py-[10px] opacity-35 hover:opacity-100 transition-opacity duration-200 tracking-[-0.02em] leading-[1.1]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-12 font-sans text-[12px] font-medium text-x-black bg-white px-7 py-[14px] tracking-[0.08em] uppercase w-fit"
            >
              Start a project
            </Link>

            <div className="absolute bottom-10 left-6">
              <span
                className="font-sans text-[12px] text-white/30 tracking-[0.08em]"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'block' }}
              >
                xitedevelopment@gmail.com
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
