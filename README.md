# eslint-config-underscope

Underscope ESLint config using Prettier, React and React Native.

## How to use

```
$ yarn add @underscope/eslint-config
```

#### .eslintrc:

```
{
    "extends": "@underscope/eslint-config",
    "rules" {
        ...
    }
}

```

## Integrating with VSCode

Open the command pallete by pressing CMD + SHIFT + P and type "Open Settings (JSON)", then make sure you have the following config:

```json
{
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"]
}
```
