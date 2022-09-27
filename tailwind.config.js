const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    fontFamily: {
      display: ["Anton", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {},
      aspectRatio: {
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};
