const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#222",
        "secondary-dark": "#666",
        "primary-light": "#fff",
      },
      animation: {
        "fade-in": "fadeIn 3s",
        "fade-out": "fadeOut 5s",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translate(-35%, 0%)" },
          "50%": { opacity: 0.5, transform: "translate(15%, 0%)" },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
