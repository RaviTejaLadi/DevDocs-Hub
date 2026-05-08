# ESLint Integration

## Install

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Config

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
```

## Interview Angle

Lint + TypeScript together enforce consistency and catch unsafe patterns early.
