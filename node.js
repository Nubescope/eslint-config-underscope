const restrictedGlobals = require('eslint-restricted-globals')
const OFF = 0
const WARNING = 1
const ERROR = 2

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
    'no-console': WARNING,

    'promise/prefer-await-to-then': WARNING,

    'import/extensions': OFF,
    'import/no-dynamic-require': OFF,
    'import/no-unresolved': ERROR,
    'import/prefer-default-export': OFF,
  },
};
