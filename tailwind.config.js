/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
      },
      backgroundColor: ['dark'], // Enable dark mode for background colors
      textColor: ['dark'], // Enable dark mode for text colors
    },
  },
  plugins: [],
};