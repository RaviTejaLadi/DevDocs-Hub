# 📦 npm, Yarn & pnpm

npm, Yarn, and pnpm are JavaScript package managers used to install, update, and manage project dependencies.

They help developers:

- Install packages
- Manage versions
- Run scripts
- Share projects easily

---

## 🚀 What is a Package Manager?

Instead of manually downloading libraries:

lodash
axios
react

You can install them with a single command.

Example:

npm install axios

The package manager downloads and manages dependencies automatically.

---

## 📦 npm

npm comes bundled with Node.js.

Check version:

npm -v

Initialize project:

npm init

Skip prompts:

npm init -y

---

## 🧶 Yarn

Yarn was created to improve:

- Speed
- Reliability
- Dependency resolution

Check version:

yarn -v

Initialize project:

yarn init

---

## ⚡ pnpm

pnpm focuses on:

- Faster installs
- Less disk usage
- Better monorepo support

Check version:

pnpm -v

Create project:

pnpm init

---

## 📥 Installing Packages

### npm

npm install axios

### Yarn

yarn add axios

### pnpm

pnpm add axios

---

## 📤 Install Development Dependencies

### npm

npm install -D eslint

### Yarn

yarn add -D eslint

### pnpm

pnpm add -D eslint

Used for:

- ESLint
- Prettier
- TypeScript
- Testing libraries

---

## 🗑️ Remove Packages

### npm

npm uninstall axios

### Yarn

yarn remove axios

### pnpm

pnpm remove axios

---

## ⬆️ Update Packages

### npm

npm update

### Yarn

yarn upgrade

### pnpm

pnpm update

---

## 📋 Package.json

Central project configuration file.

Example:

{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}

Contains:

- Metadata
- Dependencies
- Scripts
- Versions

---

## 🔒 Lock Files

Package managers generate lock files.

### npm

package-lock.json

### Yarn

yarn.lock

### pnpm

pnpm-lock.yaml

Purpose:

- Consistent installs
- Reproducible builds
- Prevent version mismatches

Always commit lock files.

---

## ▶️ Running Scripts

package.json:

{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}

### npm

npm run dev

### Yarn

yarn dev

### pnpm

pnpm dev

---

## 🔍 List Installed Packages

### npm

npm list

### Yarn

yarn list

### pnpm

pnpm list

---

## 📂 Dependency Types

### Dependencies

Required in production.

Example:

react
axios

### Dev Dependencies

Needed during development.

Example:

eslint
typescript
prettier

---

## ⚛️ Create React App

### Vite + npm

npm create vite@latest

### Vite + Yarn

yarn create vite

### Vite + pnpm

pnpm create vite

---

## ⚡ Why pnpm is Fast

Traditional approach:

Project A
└── node_modules

Project B
└── node_modules

Same package downloaded multiple times.

pnpm:

Global Store
├── react
├── axios
└── vite

Projects use links to the store.

Benefits:

- Faster installs
- Reduced disk space
- Better performance

---

## 🏢 Monorepo Support

pnpm is widely used for:

- Turborepo
- Nx
- Large-scale applications

Example structure:

apps/
├── web
├── admin

packages/
├── ui
├── utils

pnpm handles shared dependencies efficiently.

---

## 🔥 Useful Commands

Check outdated packages:

npm outdated

yarn outdated

pnpm outdated

---

Audit vulnerabilities:

npm audit

pnpm audit

---

Clean install:

npm ci

Useful in CI/CD pipelines.

---

## 🚨 Common Issues

### node_modules Corruption

Fix:

rm -rf node_modules

Reinstall:

npm install

or

pnpm install

---

### Version Mismatch

Check:

node -v
npm -v

Use a version manager like:

- nvm
- fnm

---

### Dependency Conflicts

Check peer dependency warnings.

Keep package versions compatible.

---

## ⚛️ Recommended Setup for React

Install:

pnpm add react react-dom

Development tools:

pnpm add -D typescript
pnpm add -D eslint
pnpm add -D prettier

---

## 📊 Quick Command Comparison

Install Package

npm install axios
yarn add axios
pnpm add axios

Remove Package

npm uninstall axios
yarn remove axios
pnpm remove axios

Run Script

npm run dev
yarn dev
pnpm dev

Install Dependencies

npm install
yarn
pnpm install

---

## ⭐ Which One Should You Use?

### npm

Good for:

- Beginners
- Small projects
- Default Node.js setup

### Yarn

Good for:

- Existing Yarn projects
- Teams already using Yarn

### pnpm

Good for:

- React applications
- Monorepos
- Large codebases
- Faster installations

For modern React and Next.js projects, pnpm is often the preferred choice because of its performance, efficient storage usage, and excellent workspace support.