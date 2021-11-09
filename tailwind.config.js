const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      minHeight: (theme) => ({
        ...theme("spacing"),
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
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
      boxShadow: {
        "bottom-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut .8s ease-in-out",
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
      flex: {
        2: "2 2 0%",
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
