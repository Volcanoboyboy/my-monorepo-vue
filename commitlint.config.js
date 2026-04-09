export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['web', 'docs', 'ui', 'utils', 'repo']],
  },
}
