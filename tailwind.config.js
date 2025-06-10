/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2180px', // New screen size above 2xl
     
    },
    extend: {
       colors:{
        white:"#ffffff",
        red:'#fd2e35',
        black:"#1a0516",
        rose:"#ffebeb",
        slate:"#f7f4f2",
        purple:"#412742"
       }
      
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}