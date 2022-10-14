/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/hero2.png')",
        "hero-btn-bg": "url('/button.png')",
      },

      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },

    boxShadow: {
      header: "0 5px 15px rgba(0, 0, 0, 0.06)",
    },

    backgroundPosition: {
      "hero-position": "top 50% right 0",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
