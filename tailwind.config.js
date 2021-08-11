const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.500"),
      yellow: theme("colors.yellow.500"),
      green: theme("colors.green.500"),
      blue: theme("colors.blue.500"),
      gray: theme("colors.gray.500"),
      "gray-1": theme("colors.gray.100"),
    }),
    extend: {
      screens: {
        "3xl": "1920px",
        sx: "550px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
        playfair: ["Playfair Display", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
