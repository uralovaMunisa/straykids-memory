/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skz: {
          black: '#070709',
          dark: '#0d0d12',
          card: '#13131a',
          surface: '#181824',
          border: '#272738',
          red: '#e50914',
          'red-bright': '#ff1744',
          'red-dark': '#8b0000',
          'red-glow': 'rgba(229, 9, 20, 0.45)',
          crimson: '#9b111e',
          gold: '#f59e0b',
          silver: '#94a3b8',
          text: '#f1f5f9',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'red-sm': '0 0 15px rgba(229, 9, 20, 0.25)',
        'red-md': '0 0 25px rgba(229, 9, 20, 0.4)',
        'red-lg': '0 0 45px rgba(229, 9, 20, 0.55)',
        'inner-red': 'inset 0 0 20px rgba(229, 9, 20, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(229, 9, 20, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}

