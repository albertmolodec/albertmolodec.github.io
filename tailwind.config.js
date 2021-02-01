module.exports = {
  darkMode: false,
  purge: {
    enabled: process.env.ELEVENTY_ENV === 'production',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
  ],
  theme: {
    extend: {},
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
};
