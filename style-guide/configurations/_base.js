const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./constants.js');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    require.resolve('eslint-config-turbo'),
    require.resolve('./ignorePattern'),
    require.resolve('./../rules/base'),
    require.resolve('./../rules/nomenclature'),
  ],
  env: {
    [`es${ECMA_VERSION}`]: true,
  },
  plugins: ['check-file'],
  ignorePatterns: ['!.*.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
      'astro-eslint-parser': ['.astro'],
    },
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        astro: 'never',
        svelte: 'never',
        '': 'never',
      },
    ],
    'import/resolver': {
      typescript: true,
    },
  },
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        requireConfigFile: false,
      },
    },
  ],
};
