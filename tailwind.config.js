/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9cf4d0",

          secondary: "#9ffc49",

          accent: "#e2a383",

          neutral: "#191320",

          "base-100": "#FFFFFF",

          info: "#7FB0E1",

          success: "#1C824D",

          warning: "#FAD20A",

          error: "#E7275E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
