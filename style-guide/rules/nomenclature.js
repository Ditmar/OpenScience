module.exports = {
  rules: {
    'check-file/no-index': 'off',
    'check-file/filename-blocklist': ['error', {}],
    'check-file/folder-match-with-fex': [
      'off',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '{**/!(index|main).{jsx,tsx,svelte},**/!(*pages*)/!/^[A-Z]([A-Za-z0-9]+)?([w+])?.astro$/':
          'PASCAL_CASE',
        '{**/!(index|main).{js,ts}}': 'KEBAB_CASE',
      },
      { ignoreMiddleExtensions: true },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '**/!(__tests__|.)': 'KEBAB_CASE',
      },
    ],
  },
};
