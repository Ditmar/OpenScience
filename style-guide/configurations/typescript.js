const { TYPESCRIPT_FILES } = require('./constants.js');
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
        'airbnb-typescript',
        'prettier',
      ],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};