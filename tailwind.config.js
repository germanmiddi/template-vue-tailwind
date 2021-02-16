module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#f5f5f5',
        },
        dark: {
          default: '#263238',
          light: '#324144',
        },
      },
      fontFamily: {
        body: ['Roboto'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
