/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","script.js"],
  theme: {
    extend: {
      backgroundImage:{
        people:'url(./images/background.jpg)',
      }
    },

  },
  plugins: [],
}

