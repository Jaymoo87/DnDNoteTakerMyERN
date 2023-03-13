module.exports = {
  content: ["./src/client/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["night"],
    fontFamily: {
      serif: ["DM Serif Display"],
    },
  },
};
