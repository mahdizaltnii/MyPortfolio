/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
        changa: ['Changa', 'sans-serif'],
        
      },
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        blur:'#1D2043'
      }
    },  
  },
  plugins: [],
}

