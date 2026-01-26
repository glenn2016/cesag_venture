/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0f',
          light: '#12121a',
          card: '#1a1a25',
          hover: '#222230',
        },
        accent: {
          green: '#00d991',
          'green-dim': 'rgba(0, 217, 145, 0.2)',
          gold: '#ffd700',
          'gold-dim': 'rgba(255, 215, 0, 0.13)',
          blue: '#00a3ff',
          'blue-dim': 'rgba(0, 163, 255, 0.13)',
          purple: '#a855f7',
          'purple-dim': 'rgba(168, 85, 247, 0.13)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0b0',
          muted: '#606070',
        },
        border: {
          DEFAULT: '#2a2a3a',
          glass: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}