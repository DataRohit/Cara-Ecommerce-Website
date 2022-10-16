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
        "home-banner-1": "url('/banner/b2.jpg')",
        "home-banner-2": "url('/banner/b17.jpg')",
        "home-banner-3": "url('/banner/b10.jpg')",
        "home-banner-4": "url('/banner/b7.jpg')",
        "home-banner-5": "url('/banner/b4.jpg')",
        "home-banner-6": "url('/banner/b18.jpg')",
        "shop-page-header": "url('/banner/b1.jpg')",
        "blog-page-header": "url('/banner/b19.jpg')",
      },

      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },

    backgroundPosition: {
      "hero-position-pc": "top 50% right 0",
      "hero-position-medium": "top 30% right 30%",
      "hero-position-small": "0%",
    },

    boxShadow: {
      header: "0 5px 15px rgba(0, 0, 0, 0.06)",
      header2: "0 40px 60px rgba(0, 0, 0, 0.3)",
      "feature-sm": "10px 10px 54px rgba(0, 0, 0, 0.05)",
      "feature-lg": "20px 20px 34px rgba(0, 0, 0, 0.07)",
      "product-sm": "20px 20px 30px rgba(0, 0, 0, 0.05)",
      "product-lg": "20px 20px 30px rgba(0, 0, 0, 0.07)",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
