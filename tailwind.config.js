/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "wGrey": "#181B22"
        , "wmGrey": "#21242B"
      }
      , fontFamily: {
        "sans": ["poppins", ...defaultConfig.theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
