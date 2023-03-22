module.exports = {
  content: ["./src/client/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        mytheme: {
          neutral: "#788585",
          secondary: "#9CAEA9",
          accent: "#CCDAD1",
          primary: "#6F6866",
          warning: "#38302E",
          textColor: "#54a7ba",
        },
      },
    ],
    fontFamily: {
      serif: ["DM Serif Display"],
    },
  },
};
