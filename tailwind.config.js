/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/js/*.js",
    "./components/*.html",
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      RobotoSlab: ["Roboto-Slab", "sans-serif"],
      DancingScript: ["DancingScript", "cursive"],
      LobsterTwo: ["LobsterTwo", "sans-serif"]
    },
    colors: {
      'sectionColor': '#556A58',
      'headerColor': '#268D14',
      'navColor': '#AFD0BF',
      ...require('tailwindcss/colors')
    },
  },
  plugins: [],
}

