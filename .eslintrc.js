module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~src', './src'],
          ['~content', './content'],
          ['~static', './static'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
