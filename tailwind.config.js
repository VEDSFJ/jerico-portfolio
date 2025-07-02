/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'navy': '#0D1117',
          'light-navy': '#161B22',
          'brand-yellow': '#F59E0B', // A nice vibrant yellow/orange
      },
      fontFamily: {
        'russo': ['"Russo One"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

