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
          150: "#e2ddd7",
          200: "#dad5d3",
          800: "#d36651",
        },
        dark: "#162317",
        lightTeal: "#9ab1ac",
        googleBlue: "#4285f4",
      },
      fontFamily: {
        arsenal: "'Arsenal', 'sans-serif'",
      },
      fontSize: {
        "2xs": ".50rem",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
