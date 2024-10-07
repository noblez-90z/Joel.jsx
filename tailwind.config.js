/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },

          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
