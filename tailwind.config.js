/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'hover:scale-125',
    'hover:opacity-100',
    'hover:fill-current',
    'scale-125', 
    'opacity-100', 
    'fill-current'
  ],
}