const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
