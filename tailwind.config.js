/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0f1a",
        primary: "#38bdf8",
        secondary: "#818cf8",
      }
    },
  },
  plugins: [],
}
