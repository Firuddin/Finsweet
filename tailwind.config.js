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
        'secondary': "#9A7AF1",
        'tartiary': "#707070",
        'pink':"#EE9AE5"
              }
    },
  },
  plugins: [],
}