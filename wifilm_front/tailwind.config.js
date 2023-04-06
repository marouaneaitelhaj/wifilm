/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/.{html,js}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      brightness: {
        25: '.40',
        175: '1.75',
      }
    },
  },
}
