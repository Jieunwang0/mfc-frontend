/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        twinkle1: "twinkling 0.5s infinite",
        twinkle2: "twinkling 1.1s infinite",
        twinkle3: "twinkling 1.3s infinite",
        twinkle4: "twinklingWithoutBoxShadow 3s infinite",
      },
      keyframes: {
        twinkling: {
          "0%, 100%": {
            boxShadow: "0 0 10px 0px rgb(255, 255, 255, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 10px 2px rgb(255, 255, 255, 0.6)",
          },
        },
        twinklingWithoutBoxShadow: {
          "0%": {
            backgroundColor: "#ffffff",
            boxShadow: "0 0 10px 0px rgba(255, 255, 255, 1)",
          },
          "20%": {
            backgroundColor: "#ffc4c4",
            boxShadow: "0 0 10px 0px rgba(255, 196, 196, 1)",
          },
          "80%": {
            backgroundColor: "#c4cfff",
            boxShadow: "0 0 10px 0px rgba(196, 207, 255, 1)",
          },
          "100%": {
            backgroundColor: "#ffffff",
            boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.2)",
          },
        },
      },
    },
  },
  plugins: [],
};
