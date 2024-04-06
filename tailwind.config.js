/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2E854B",
        secondaryGreen: "#5CB85C",
      },
    },
  },
  plugins: [],
};
