/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#adb5bd",
        primary2: "#6c757d",
        primary3: "#495057",
        primary4: "#343a40",
        primaryDark: "#212529",
      },
    },
  },
  plugins: [],
};
