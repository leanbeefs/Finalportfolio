/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark': '#1f2937', // Example dark background color
      }),
      textColor: theme => ({
        ...theme('colors'),
        'dark': '#ffffff', // Example dark text color
      }),
      margin: {
        '410': '410px',
      },
    },
  },
  plugins: [],
};