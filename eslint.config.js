import config from '@lvce-editor/eslint-config'

export default [
  ...config,
  {
    rules: {
      'e18e/prefer-array-from-map': 'off',
      'e18e/prefer-array-to-sorted': 'off',
      'e18e/prefer-spread-syntax': 'off',
      'package-json/no-empty-fields': 'off',
      'package-json/sort-collections': 'off',
      'package-json/valid-author': 'off',
      'package-json/valid-description': 'off',
      'package-json/valid-main': 'off',
    },
  },
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
      '@cspell/spellchecker': 'off',
      'jest/no-disabled-tests': 'off',
      'jest/no-restricted-jest-methods': 'off',
      'no-useless-assignment': 'off',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-switch-case': 'off',
      'sonarjs/no-dead-store': 'off',
      'sonarjs/no-gratuitous-expressions': 'off',
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/no-redundant-jump': 'off',
      'unicorn/logical-assignment-operators': 'off',
      'unicorn/no-declarations-before-early-exit': 'off',
      'unicorn/no-duplicate-if-branches': 'off',
      'unicorn/no-unsafe-string-replacement': 'off',
      'unicorn/no-useless-template-literals': 'off',
      'unicorn/prefer-top-level-await': 'off',
    },
  },
]
