const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        lightOrange: {
          50: "#fcf6ef",
          100: "#f3edeb",
          800: "#d36651",
        },
        dark: "#162317",
        lightTeal: "#9ab1ac",
      },
      fontFamily: {
        arsenal: "'Arsenal', 'sans-serif'",
      },
      fontSize: {
        "2xs": ".50rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
