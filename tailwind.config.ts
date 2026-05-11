import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'x-black': '#0A0A0A',
        'x-off-white': '#FAFAFA',
        'x-gray': '#6B6B6B',
        'x-light-gray': '#9B9B9B',
        'x-border': '#E8E8E8',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: { content: '1280px' },
      padding: { page: '56px' },
      spacing: { nav: '72px' },
    },
  },
  plugins: [],
}

export default config
