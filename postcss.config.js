/* eslint-disable global-require */

module.exports = () => ({
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
    }),
    require('postcss-nested'),
  ],
});
