/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.js",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF0F5',
          100: '#FCE7F0',
          500: '#FF69B4',
          600: '#E05DA0',
        },
        beige: {
          50: '#F5F5DC',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // Puedes cambiar esta fuente si quieres
      },
    },
  },
  plugins: [],
}