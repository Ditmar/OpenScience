module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-svelte'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    { files: '*.svelte', options: { parser: 'svelte' } },
  ],
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 100,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
};
