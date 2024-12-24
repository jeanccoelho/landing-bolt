/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00579f',
        secondary: '#5dc4b8',
        holiday: {
          gold: '#E3B04B',
          red: '#D42D2D',
          green: '#0F5132'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        snowfall: 'snowfall 10s linear infinite',
        twinkle: 'twinkle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};