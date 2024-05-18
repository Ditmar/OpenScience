import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['all'],
  {
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'no-unused-vars': 'error',
      'no-console': 'error',
      quotes: ['error', 'single'],
    },
  },
];
