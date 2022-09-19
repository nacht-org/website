const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Anton", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "floral-white": "#FFFCF2",
        "raisin-black": "#191923",
        cardinal: "#ad343e",
        "eerie-black": "#141414",
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};
