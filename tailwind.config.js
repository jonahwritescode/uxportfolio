const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Barlow', 'sans-serif'],
      'body': ['Lato', 'sans-serif'],
      'mono': ['Roboto', 'monospace'],
    },
    minWidth: {
      '0': '0',
      'xs' : '20rem',
      'sm' : '24rem',
      'md' : '28rem',
      'lg' : '32rem',
      'xl' : '36rem',
      '2xl' : '42rem',
      '3xl' : '48rem',
    },
    maxHeight: {
      '0': '0',
      'xs' : '20rem',
      'sm' : '24rem',
      'md' : '28rem',
      'lg' : '32rem',
      'xl' : '36rem',
      '2xl' : '42rem',
      '3xl' : '48rem',
    },
    extend: {
      inset: {
        '1/5': '20%',
        '2/5':'40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      colors: {
        brandGreen: {
          DEFAULT: "#00ff11",
          dark: '#00CC0E',
        },
        gray: colors.trueGray,
      },
      backgroundImage: theme => ({
        'headshot': "url('./images/jonah-picture.JPG')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
