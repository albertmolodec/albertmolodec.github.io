module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    graphql: true,
  },
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
  },
};
