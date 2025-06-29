import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{ts,tsx}', // For Shadcn components
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefefc',
          100: '#fefefc',
          200: '#fcfbf9',
          300: '#faf8f5',
        },
        mocha: {
          100: '#e0d9cd',
          400: '#9e8d69',
          600: '#7d6c51',
          700: '#5c4d38',
          800: '#3b2c1f',
          900: '#1a1006',
        },
        caramel: {
          300: '#ec924c',
          400: '#e77d2b',
          500: '#d66a1a',
          600: '#c55e17',
        },
        mint: {
          50: '#e8f5e9',
          500: '#4caf50',
        },
        rose: {
          400: '#e57373',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;