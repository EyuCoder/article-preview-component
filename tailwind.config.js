/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Manrope', 'sans'],
    },
    extend: {
      colors: {
        blue: {
          dark: '#6d7f97',
        },
        gray: {
          'grayish-blue': '#9eafc2',
          'dark-grayish-blue': '#48556a',
          'light-grayish-blue': '#ecf2f8',
        }
      },
    },
  },
  plugins: [],
}
