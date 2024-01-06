/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pirmary': "#1D2130",
        'secondary': "#E0E4FC",
        'tartiary': "#E0E4FC",
        'pink':"#373FFF",
        'one':"#1D2130"
              }
    },
  },
  plugins: [],
}