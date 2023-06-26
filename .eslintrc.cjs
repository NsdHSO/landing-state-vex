/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'max-line-length': [
      'error',
      {
        limit: 40,
        'ignore-pattern': '^import |^export {(.*?)}',
        'check-strings': true,
        'check-regex': true
      }
    ]
  }
}
