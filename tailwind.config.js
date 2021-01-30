module.exports = {
  purge: {
    enabled: process.env.ELEVENTY_ENV === 'production',
    content: [
      './src/**/*.njk',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.svg',
    ],
    options: {
      whitelist: ['mode-dark'],
      whitelistPatternsChildren: [/prose$/],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-dark-mode')(),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter var", sans-serif;',
        interLegacy: '"Inter", sans-serif;',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
};
