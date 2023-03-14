module.exports = {
  content: ["./src/client/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dark"],
    fontFamily: {
      serif: ["DM Serif Display"],
    },
  },
};
