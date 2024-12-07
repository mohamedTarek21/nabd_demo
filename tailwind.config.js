/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        700: "#398fe6",
        600: "#1399fc",
      },
      danger: {
        700: "#a50000",
        600: "#F64C4C",
      },
      white: "#ffffff",
      lightGray: "#efefef",
    },
  },
  plugins: [],
};
