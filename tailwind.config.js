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
    'ulasan.html',
    'quiz.html',
    'standby.html',
    'test.html',
    '404.html',
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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
