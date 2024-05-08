/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2E854B",
        secondaryGreen: "#5CB85C",
        primaryGray: "#909090",
        veryLightGray: "#F5F5F5",
        transparentBlack: "rgba(0,0,0,.08)",
        transparent: "rgba(0,0,0,.05)",
        
      },
      backgroundColor: {
        transparentBlack: "rgba(0,0,0,.4)",
      },
      boxShadow: {
        mainShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        mainShadowB: "0px 4px 8px rgba(99, 99, 99, 0.2)",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
