const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./src/**/*.{js,jsx,ts,tsx,svg,md}'],
  theme: {
    colors,
  },
  plugins: [require('@tailwindcss/typography')],
}
