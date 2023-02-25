module.exports = {
  extends: require.resolve('./base'),
  plugins: ['unused-imports'],
  rules: {
    // https://eslint.vuejs.org/rules/no-unused-properties.html#vue-no-unused-properties
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'setup'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
};
