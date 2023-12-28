/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#303036",
        secondaryColor: "#51B845",
        textColor: "#fffaff",
        primary3: "#495057",
        primary4: "#343a40",
        primaryDark: "#050401",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
