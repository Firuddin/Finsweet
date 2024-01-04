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
        'tartiary': "#707070",
        'pink':"#373FFF"
              }
    },
  },
  plugins: [],
}