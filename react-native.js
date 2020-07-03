const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const JS = ['.js', '.jsx']
const TS = ['.ts', '.tsx', '.d.ts']
const ANDROID_JS = [ '.android.js', '.android.jsx']
const ANDROID_TS = ['.android.ts', '.android.tsx', '.android.d.ts']
const IOS_JS = ['.ios.js', '.ios.js']
const IOS_TS = ['.ios.ts', '.ios.tsx', '.ios.d.ts']
const ALL = [ ...JS, ...TS, ...ANDROID_JS, ...ANDROID_TS, ...IOS_JS, ...IOS_TS ]

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
    'react-native/no-unused-styles': ERROR,
    'react-native/no-color-literals': WARNING,
    'react-native/no-raw-text': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/extensions': ALL,
        'import/resolver': {
          node: {
            extensions: ALL,
          },
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/extensions': ALL,
        'import/parsers': {
          '@typescript-eslint/parser': [ ...TS, ...ANDROID_TS, ...IOS_TS ],
        },
        'import/resolver': {
          node: {
            extensions: ALL,
          },
        },
      },
    },
  ],
};
