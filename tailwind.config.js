
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dark: '#333233',
          heading:"#121012",
          bgDark:"#1E1E1E",
          Placeholder:"#B48F8F"
        },
        secondary:{
          dark: '#595659',
          black:"#1F1F1F"
        },
        HeadingBlack:"#060707"
      }
    },
  },
  plugins: [],
};
