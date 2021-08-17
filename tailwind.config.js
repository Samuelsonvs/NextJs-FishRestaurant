const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "1px 7px 34px 2px rgba(0, 0, 0, 0.68)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    fill: (theme) => ({
      red: theme("colors.red.500"),
      yellow: theme("colors.yellow.500"),
      green: theme("colors.green.500"),
      blue: theme("colors.blue.500"),
      gray: theme("colors.gray.500"),
      "gray-1": theme("colors.gray.100"),
    }),
    extend: {
      backgroundImage: (theme) => ({
        "plate-fish": "url(/images/content/orderfoodonline.jpg)",
        "plate-fish-mobil": "url(/images/content/orderfoodonlinemobil.jpg)",
      }),
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
