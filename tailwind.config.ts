import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          deep:    '#060f1e',
          mid:     '#122845',
        },
        green: {
          DEFAULT: '#22A652',
          dark:    '#1a7d3e',
          light:   '#2fc465',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      letterSpacing: {
        industrial: '0.12em',
        wide2:      '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
