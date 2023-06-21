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
      animation: {
        "appear-up": "moveUp 1s ease-out",
        "rotate-right": "rotateRight 1s ease-out",
        "move-right": "moveRight 1s ease-out",
        "hero-card1":
          "moveLeft 1s ease-out forwards , rotateLeft 1s ease-out forwards",
        "hero-card2":
          "moveRight 1s ease-out forwards , rotateRight 1s ease-out forwards",
      },
      keyframes: {
        moveUp: {
          "0%": { "margin-top": "300px" },
          "100%": { "margin-top": "100" },
        },
        rotateRight: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(20deg)" },
        },
        rotateLeft: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-20deg)" },
        },
        moveRight: {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "450px" },
        },
        moveLeft: {
          "0%": { marginRight: "0" },
          "100%": { marginRight: "450px" },
        },
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
