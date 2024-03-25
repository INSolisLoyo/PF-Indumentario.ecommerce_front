// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" ,
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c17b60',  // Preservamos el color primario definido.
        'secondary': '#ff5757' // Y también el color secundario.
      },
      fontFamily: {
        'RedHat': ["Red Hat Display", "sans-serif"] // Agregamos la familia de fuentes personalizada.
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};