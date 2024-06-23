/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'K2D': ['K2D', 'sans-serif'],
      'MontaguSlab': ['Montagu Slab', 'serif'],
      'Montserrat': ['Montserrat', 'sans-serif;']
    },
    extend: {},
  },
  plugins: [],
}