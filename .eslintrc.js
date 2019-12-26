module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2019,
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
    'react/no-danger': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 'off',
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
