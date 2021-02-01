const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.njk',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.svg',
    ],
    options: {
      whitelistPatternsChildren: [/prose$/],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
  theme: {
    colors,
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
}
