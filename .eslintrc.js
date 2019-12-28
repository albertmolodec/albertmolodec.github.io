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
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    graphql: true,
  },
  rules: {
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
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
