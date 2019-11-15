const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    './node.js',
    'plugin:react/recommended',
    'prettier/react',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/display-name': OFF,
    'react/no-multi-comp': [WARNING, { 'ignoreStateless': true }],
    'react/no-unused-prop-types': ERROR,
    'react/prop-types': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react/destructuring-assignment': [OFF, 'always'],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
