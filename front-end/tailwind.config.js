/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0F5AEC",
        secondary: "#25B0FF",
        darker: "#000A6B",
        dark: "#1324BE",
        light: "#8CD5FF",
        white: "#F6FCFF",
      },
      colors: {
        primary: "#0F5AEC",
        secondary: "#25B0FF",
        darker: "#000A6B",
        dark: "#1324BE",
        light: "#8CD5FF",
        white: "#F6FCFF",
      },
      borderColor: {
        primary: "#0F5AEC",
        secondary: "#25B0FF",
        darker: "#000A6B",
        dark: "#1324BE",
        light: "#8CD5FF",
        white: "#F6FCFF",
      },
     
    },
  },
  variants: {
    extend: {
      display: ['hover'],
    },
  },
  plugins: [],
};
