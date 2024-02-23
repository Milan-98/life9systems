/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-hero': "url('/src/images/mainHeroBg.png')",
        'join-us':"url('/src/images/joinus.png')"
      },
       colors:{
        white:"#ffffff",
        red:'#fd2e35',
        black:"#1a0516",
        rose:"#ffebeb",
        slate:"#f7f4f2"
       },
       cursor: {
        'fancy': 'url(hand.cur), pointer',
      }

    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}