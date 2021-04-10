const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.njk',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.svg',
    ],
  },
  theme: {
    colors,
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
}
