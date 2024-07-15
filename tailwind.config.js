/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playwrite: ["Playwrite DK Uloopet", "cursive"],
      lato: ["Lato", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        "black-2b": "#2B2B2D",
        "black-21": "#212529",
        "black-25": "#253D4E",
        "gray-7a": "#7A7A7A",
        "gray-ad": "#ADADAD",
        "gray-77": "#777777",
        "gray-b6": "#B6B6B6",
        "green-64": "#64B496",
        "green-3b": "#3BB77E",
        "orange-f5": "#F53E32",
        "deep-orange-f7": "#F7E8AA",
        "border-color": "#E1DFDF",
        "footer-bg": "#F7F7F8",
      },
      // backgroundImage: {
      //   "hero-background": "url('/images/hero-background.jpg')",
      // },
    },
  },
  plugins: [],
};
