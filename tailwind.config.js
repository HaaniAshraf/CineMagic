/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:['Dynalight']
    },
    boxShadow: {
      customShadow: '-10px -12px 15px 8px #ffffff', // Assuming 'white' is meant to be '#ffffff'
    }
  },
  plugins: [],
}