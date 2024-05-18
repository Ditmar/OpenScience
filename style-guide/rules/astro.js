module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@/*'],
      },
    ], // Disable no-unresolved rule for .astro files
    'react/jsx-filename-extension': [1, { extensions: ['.astro'] }], // Accept jsx in astro files
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': 'off',
    'react/no-unknown-property': 'off',
    'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    'react/require-default-props': 'off', // Allow non-defined react props as undefined
    'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
    '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
    '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
    'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: false,
      },
    ],
  },
};
