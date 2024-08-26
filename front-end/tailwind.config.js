/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pentagono-blue': "url('/src/assets/imgs/pentagono-blue.svg')",
      },
      boxShadow: {
        '3xl': '0 5px 15px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}