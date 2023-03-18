/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#515182", dim: "#f8f5ff" },
      },
    },
  },
  plugins: [],
};
