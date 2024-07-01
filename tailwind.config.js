/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

