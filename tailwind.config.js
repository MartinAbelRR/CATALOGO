/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        'brown': '#401303',
        'orange': '#F2490C',
        'orange-dark': '#A63208',
        'skyblue': '#A3BFD9',
        'white-add': '#F2F0F0'
      },
      fontFamily: {        
        'roboto': ['Roboto', 'sans-serif']
      },
    }
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}