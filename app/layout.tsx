import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Xite — Boutique Web Design Studio',
    template: '%s | Xite',
  },
  description:
    'Boutique web design studio delivering exceptional websites for professionals and businesses. Portfolio sites and business transformations.',
  openGraph: {
    title: 'Xite — Boutique Web Design Studio',
    description:
      'Boutique web design studio delivering exceptional websites for professionals and businesses.',
    type: 'website',
    url: 'https://xite.studio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-x-black bg-white antialiased overflow-x-hidden">
        <Nav />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
