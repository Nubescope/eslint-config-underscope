const restrictedGlobals = require('eslint-restricted-globals')
const OFF = 0
const WARNING = 1
const ERROR = 2
const JS = ['.js', '.jsx']
const TS = ['.ts', '.tsx', '.d.ts']

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    'babel',
    'jest',
    'prettier',
    'import',
    'simple-import-sort',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'babel/new-cap': WARNING,

    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'class-methods-use-this': OFF,
    'curly': [ERROR, 'all'],
    'spaced-comment': [ERROR, 'always'],
    'no-use-before-define': OFF,
    'no-unused-vars': ERROR,
    'one-var': [ERROR, { 'uninitialized': 'always', 'initialized': 'never' }],
    'object-curly-newline': OFF,
    'operator-linebreak': OFF,
    'one-var-declaration-per-line': OFF,
    'prefer-destructuring': [OFF, { 'object': true, 'array': false }],
    'padding-line-between-statements': [
      ERROR,
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
      { 'blankLine': 'always', 'prev': 'import', 'next': '*' },
      { 'blankLine': 'any', 'prev': 'import', 'next': 'import' }
    ],
    'no-console': ERROR,

    'promise/prefer-await-to-then': WARNING,

    'import/extensions': OFF,
    'import/no-dynamic-require': OFF,
    'import/no-unresolved': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,

    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Root imports with babel-plugin-root-import (~/).
          // Parent imports. Put `..` last.
          // Other relative imports. Put same-folder imports and `.` last.
          ['^~/', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
  },
   overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      settings: {
        'import/extensions': [...JS, ...TS],
        'import/parsers': {
          '@typescript-eslint/parser': TS,
        },
        'import/resolver': {
          node: {
            extensions: [...JS, ...TS],
          },
        },
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ERROR,
        '@typescript-eslint/prefer-optional-chain': ERROR,
        'no-dupe-class-members': OFF,
        'no-unused-vars': OFF,
      },
    },
  ],
};
