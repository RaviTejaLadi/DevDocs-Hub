# React TypeScript Setup from Scratch

## Step 1: Initialize the Project

Create a new directory and initialize npm:

```bash
mkdir my-react-app
cd my-react-app
npm init -y
```

## Step 2: Install Core Dependencies

Install React and React DOM:

```bash
npm install react react-dom
```

Install TypeScript and type definitions:

```bash
npm install -D typescript @types/react @types/react-dom
```

## Step 3: Install Build Tools

Install Webpack and related loaders:

```bash
npm install -D webpack webpack-cli webpack-dev-server
npm install -D html-webpack-plugin
npm install -D ts-loader
npm install -D css-loader style-loader
```

Install Babel for JSX transformation:

```bash
npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
npm install -D babel-loader
```

## Step 4: Create TypeScript Configuration

Create `tsconfig.json` in the root directory:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## Step 5: Create Babel Configuration

Create `.babelrc` in the root directory:

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}
```

## Step 6: Create Webpack Configuration

Create `webpack.config.js` in the root directory:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
```

## Step 7: Create Source Directory Structure

Create the following directory structure:

```
src/
├── index.html
├── index.tsx
├── App.tsx
└── App.css
```

## Step 8: Create HTML Template

Create `src/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React TypeScript App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## Step 9: Create Entry Point

Create `src/index.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Step 10: Create Main App Component

Create `src/App.tsx`:

```tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React TypeScript App</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    </div>
  );
};

export default App;
```

## Step 11: Add Basic Styling

Create `src/App.css`:

```css
.app {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.app-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  border-radius: 8px;
}

button {
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #21a1c4;
}
```

## Step 12: Update Package.json Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "type-check": "tsc --noEmit"
  }
}
```

## Step 13: Run the Application

Start the development server:

```bash
npm start
```

Your React TypeScript application should now be running at
`http://localhost:3000`.

## Step 14: Build for Production

To create a production build:

```bash
npm run build
```

This will create a `build` directory with optimized files.

## Additional Configuration (Optional)

### ESLint Setup

Install ESLint for code linting:

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

Create `.eslintrc.js`:

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
```

### Prettier Setup

Install Prettier for code formatting:

```bash
npm install -D prettier
```

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Final Project Structure

Your project structure should look like this:

```
my-react-app/
├── node_modules/
├── src/
│   ├── index.html
│   ├── index.tsx
│   ├── App.tsx
│   └── App.css
├── .babelrc
├── .eslintrc.js (optional)
├── .prettierrc (optional)
├── package.json
├── tsconfig.json
└── webpack.config.js
```

You now have a fully functional React TypeScript application set up from scratch
without using any scaffolding tools!
