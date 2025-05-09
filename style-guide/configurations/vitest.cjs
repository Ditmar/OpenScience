const { TEST_FILES } = require('./constants.js');
module.exports = {
  overrides: [
    {
      files: TEST_FILES,
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/*.test.[jt]s?(x)', '**/*.spec.[jt]s?(x)'] },
        ],
      },
    },
  ],
};
