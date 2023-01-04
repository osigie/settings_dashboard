/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["inter", ...defaultTheme.fontFamily.sans],
      colors: {
        "brand-white-1": "#F5F5F5",
        "brand-grey-1": "#F9FAFB",
        "brand-grey-2": " #667085",
        "brand-grey-3": " #D0D5DD",
        "brand-grey-4": "#EAECF0",
        "brand-dark-1": "#101828",
        "brand-dark-2": "#344054",
        "brand-background-1": "#F9FAFB",
        "brand-background-2": "#F9F5FF",
        "brand-background-3": "#ECFDF3",
        "brand-border-1": "#D6BBFB",
        "brand-card-1": "#53389E",
        "brand-card-2": "#6941C6",
        "brand-card-3": "#7F56D9",
        "brand-card-4": "#9E77ED",
        "brand-card-5": "#027A48",
        "brand-card-6": "#475467",
      },
      boxShadow: {
        darker:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
