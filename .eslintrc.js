module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
        ],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': ['off'],
  },
};
