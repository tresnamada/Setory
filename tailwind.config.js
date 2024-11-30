module.exports = {
  content: [
    './index.html',
    'bangunan.html',
    'makanan.html',
    'loginpage.html',
    'quiz.html',
    'video.html',
    'makanan.html',
    'komunitas.html',
    './src/**/*.html',  // atau direktori HTML lainnya
  ],
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
