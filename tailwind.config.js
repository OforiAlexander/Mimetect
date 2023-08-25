/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'lato': "'Lato', sans-serif",
        'oswald': "'Oswald', sans-serif",
      },
      colors: {
        'dark-gray' : "#353535"
      },
      backgroundColor:{
        'semi-white': '#494947',
        'dm' : '#22272E'
      }
    },
  },
  plugins: [],
}

