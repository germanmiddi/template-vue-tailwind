module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#f5f5f5',
          lightfa: '#fafafa',
        },
        dark: {
          default: '#263238',
          light: '#324144',
          800: '#202b30',
        },
        black: {
          333: '#333',
          666: '#666',
        },
        primary: {
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
        },   
        secondary: {
          300: '#9575CD',
          400: '#7E57C2',
          500: '#673AB7',
          600: '#5E35B1',
          700: '#512DA8',
          800: '#4527A0',
        },        
      },
      fontFamily: {
        body: ['Roboto'],
      },
      fontSize: {
        tiny: '.8125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
