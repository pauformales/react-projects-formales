/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#3b5897",
        primary: "#daa625",
        mygreen: "#008542",
        lime: "#28941e",
      },
      fontFamily: {
        "fa-solid": ["FontAwesomeSolid"],
        "fa-brands": ["FontAwesomeBrands"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
