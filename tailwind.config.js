
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c17b60',  // Preservamos el color primario definido.
        'secondary': '#ff5757' // Y también el color secundario.
      },
      fontFamily: {
        'RedHat': ["Red Hat Display", "sans-serif"] // Agregamos la familia de fuentes personalizada.
      },
      backgroundImage: {
        'landing-banner': "url('https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg')"
      }
    },
  },
  darkMode: "class",
};