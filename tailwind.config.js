/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'], // Pastikan ini mengarah ke file yang benar
  theme: {
    extend: {
      colors: {
        primary: "#312414",
        secondary: "#f3b664",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        garamond: ["EB Garamond", "serif"],
      },
    
    },
  },
  plugins: [],
}
