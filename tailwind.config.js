/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        xxmd: "900px",
        xmd: "700px",
        xsm: "402px",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
