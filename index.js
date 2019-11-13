const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    './react.js',
  ],
  env: {
    'react-native/react-native': true,
  },
  plugins: [
    'react-native',
  ],
  rules: {
    'react-native/split-platform-components': OFF,
    'react-native/no-inline-styles': WARNING,
    'react-native/no-color-literals': WARNING,
    'react-native/no-raw-text': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js', '.native.js'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
