import config from '@lvce-editor/eslint-config'

export default [
  ...config,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'no-console': 'off',
      'no-constant-condition': 'off',

      '@typescript-eslint/no-deprecated': 'off',
    },
  },
]
