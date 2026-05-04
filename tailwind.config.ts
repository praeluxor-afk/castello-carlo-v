import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B3A0F',
        'primary-light': '#B5511A',
        gold: '#C4A265',
        'gold-light': '#D4BC8A',
        dark: '#0A0806',
        'dark-2': '#111009',
        surface: '#1A1510',
        'surface-2': '#221C15',
        parchment: '#F5F0E8',
        muted: '#A89880',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        'cinzel-decorative': ['var(--font-cinzel-decorative)', 'serif'],
        garamond: ['var(--font-garamond)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'draw-line': 'drawLine 2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
