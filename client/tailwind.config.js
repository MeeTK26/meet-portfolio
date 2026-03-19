/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#0f0f0f',
          card: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
