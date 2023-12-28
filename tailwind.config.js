/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#d8e1e9",
        secondaryColor: "#d8e1e9",
        textColor: "#fffaff",

        primaryDark: "#3d314a",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
