const { resolve } = require('node:path');
const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
  },
  extends: [
    require.resolve('./rules/base'),
    require.resolve('./configurations/_base'),
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:storybook/recommended',
    require.resolve('./configurations/typescript'),
    require.resolve('./configurations/vitest'),
  ],
  parserOptions: {
    project,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    JSX: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowExportNames: ['meta', 'links', 'headers', 'loader', 'action'] },
    ],
  },
};
