/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'krone-black': '#0D0E11',
        'krone-amber': '#C5893A',
        'krone-concrete': '#8C8880',
        'krone-white': '#F5F2EE',
        'krone-charcoal': '#1A1C20',
        'krone-amber-dim': '#C5893A1A',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
