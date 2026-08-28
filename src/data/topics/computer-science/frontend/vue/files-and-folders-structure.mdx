# Files & Folder Structure (Vue 3 + Vite)

# Introduction

A good folder structure helps with:

- Scalability
- Maintainability
- Reusability
- Team collaboration
- Clean architecture
- Easier debugging

Modern Vue applications usually follow a **feature-driven + modular structure**.

---

# Default Vue Project Structure

After creating a Vue app using Vite:

```txt
my-vue-app/
│
├── node_modules/
├── public/
├── src/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Root Level Files & Folders

---

# node_modules/

Contains all installed dependencies.

```txt
node_modules/
```

Examples:

- vue
- vite
- pinia
- vue-router
- axios

---

## Important

- Automatically generated
- Never edit manually
- Never push to Git

Ignored using:

```txt
.gitignore
```

---

# public/

Contains static files.

```txt
public/
```

Files inside `public` are copied directly during build.

---

## Example

```txt
public/
├── favicon.ico
├── robots.txt
└── images/
```

---

## Use Cases

| File Type     | Example     |
| ------------- | ----------- |
| Favicons      | favicon.ico |
| Static images | logo.png    |
| robots.txt    | SEO         |
| manifest.json | PWA         |

---

## Accessing Public Files

```html
<img src="/images/logo.png" />
```

---

# src/

Main application source code.

Most development happens here.

```txt
src/
```

---

# Typical Professional Structure

```txt
src/
│
├── api/
├── assets/
├── components/
├── composables/
├── constants/
├── layouts/
├── pages/
├── router/
├── services/
├── stores/
├── styles/
├── types/
├── utils/
├── views/
│
├── App.vue
└── main.js
```

---

# src/main.js

Application entry point.

This is where Vue app starts.

---

## Responsibilities

- Create Vue app
- Register plugins
- Mount application
- Import global CSS

---

## Example

```js
import { createApp } from 'vue';
import App from './App.vue';

import './styles/main.css';

const app = createApp(App);

app.mount('#app');
```

---

# src/App.vue

Root component of the application.

Every component renders inside this component.

---

## Example

```vue
<template>
  <router-view />
</template>
```

---

## Responsibilities

| Responsibility  | Description      |
| --------------- | ---------------- |
| Root Layout     | Base app wrapper |
| Shared UI       | Navbar/Footer    |
| Route Rendering | router-view      |

---

# assets/

Contains processed assets.

```txt
assets/
```

---

## Examples

```txt
assets/
├── images/
├── icons/
├── fonts/
└── styles/
```

---

## Use Cases

| Asset Type | Example       |
| ---------- | ------------- |
| Images     | PNG, JPG, SVG |
| Fonts      | Custom fonts  |
| CSS        | Global styles |
| Icons      | SVG icons     |

---

## Import Example

```js
import logo from '@/assets/images/logo.png';
```

---

# components/

Reusable UI components.

---

# Purpose

Build modular UI.

---

## Example Structure

```txt
components/
│
├── ui/
├── common/
├── forms/
├── tables/
└── cards/
```

---

# ui/

Reusable low-level components.

---

## Examples

```txt
ui/
├── Button.vue
├── Input.vue
├── Modal.vue
└── Dialog.vue
```

---

## Characteristics

- Highly reusable
- Generic
- No business logic

---

# common/

Shared components used across application.

---

## Examples

```txt
common/
├── Navbar.vue
├── Sidebar.vue
├── Footer.vue
└── Loader.vue
```

---

# Feature Components Example

```txt
components/
└── users/
    ├── UserCard.vue
    ├── UserTable.vue
    └── UserForm.vue
```

---

# views/ or pages/

Page-level components.

---

## Purpose

Represent routes/pages.

---

## Example

```txt
views/
├── HomeView.vue
├── AboutView.vue
├── LoginView.vue
└── DashboardView.vue
```

---

# Difference Between components and views

| components          | views          |
| ------------------- | -------------- |
| Reusable            | Route-specific |
| Small UI parts      | Full page      |
| Used multiple times | Usually once   |

---

# router/

Contains routing configuration.

---

# Example Structure

```txt
router/
├── index.js
└── routes.js
```

---

# router/index.js

Creates Vue Router instance.

---

## Example

```js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

---

# stores/

Contains Pinia stores.

---

# Purpose

Global state management.

---

## Example

```txt
stores/
├── authStore.js
├── userStore.js
└── cartStore.js
```

---

# Example Store

```js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
});
```

---

# composables/

Vue Composition API reusable logic.

Equivalent to React custom hooks.

---

# Purpose

Reuse business logic.

---

## Examples

```txt
composables/
├── useAuth.js
├── useFetch.js
├── useTheme.js
└── useDebounce.js
```

---

# Example

```js
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
}
```

---

# services/

Contains API and external service logic.

---

# Example Structure

```txt
services/
├── api.js
├── auth.service.js
└── user.service.js
```

---

# Purpose

Separate:

- API calls
- Backend logic
- HTTP requests

from UI components.

---

# Example

```js
import axios from 'axios';

export async function getUsers() {
  return axios.get('/api/users');
}
```

---

# api/

Sometimes used separately for API clients.

---

## Example

```txt
api/
├── axios.js
├── endpoints.js
└── interceptors.js
```

---

# Example Axios Instance

```js
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

# layouts/

Application layouts.

---

## Examples

```txt
layouts/
├── DefaultLayout.vue
├── AuthLayout.vue
└── DashboardLayout.vue
```

---

# Purpose

Different page structures.

---

## Example

```txt
Auth Pages
→ No sidebar

Dashboard Pages
→ Sidebar + Navbar
```

---

# utils/

Utility/helper functions.

---

# Examples

```txt
utils/
├── formatDate.js
├── debounce.js
├── currency.js
└── validators.js
```

---

# Example

```js
export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);
}
```

---

# constants/

Application constants.

---

## Example

```txt
constants/
├── routes.js
├── roles.js
└── config.js
```

---

# Why Use Constants

Avoid hardcoded values.

Bad:

```js
if (role === 'admin')
```

Better:

```js
if (role === ROLES.ADMIN)
```

---

# styles/

Global styles.

---

## Example

```txt
styles/
├── main.css
├── variables.css
└── animations.css
```

---

# Purpose

- Global CSS
- Tailwind imports
- CSS variables
- Themes

---

# types/

TypeScript types/interfaces.

---

## Example

```txt
types/
├── user.ts
├── api.ts
└── auth.ts
```

---

# Example

```ts
export interface User {
  id: number;
  name: string;
  email: string;
}
```

---

# index.html

Main HTML file.

Located outside `src`.

---

# Purpose

Vite injects app here.

---

## Example

```html
<div id="app"></div>
```

Vue mounts application into:

```txt
#app
```

---

# package.json

Most important project configuration file.

---

# Contains

| Property     | Purpose      |
| ------------ | ------------ |
| dependencies | Packages     |
| scripts      | Commands     |
| version      | App version  |
| name         | Project name |

---

# Example

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

---

# vite.config.js

Vite configuration file.

---

# Responsibilities

- Plugins
- Aliases
- Build configuration
- Environment setup

---

## Example

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
});
```

---

# .env Files

Environment variables.

---

# Examples

```txt
.env
.env.development
.env.production
```

---

# Example

```env
VITE_API_URL=https://api.example.com
```

---

# Important Rule

Vite environment variables must start with:

```txt
VITE_
```

---

# Professional Large Scale Structure

```txt
src/
│
├── api/
├── assets/
├── components/
│   ├── ui/
│   ├── common/
│   └── feature/
│
├── composables/
├── constants/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── users/
│
├── layouts/
├── router/
├── services/
├── stores/
├── styles/
├── types/
├── utils/
│
├── App.vue
└── main.js
```

---

# Feature-Based Structure

Modern scalable architecture.

---

# Example

```txt
features/
└── auth/
    ├── components/
    ├── composables/
    ├── services/
    ├── stores/
    └── pages/
```

---

# Benefits

| Benefit            | Description        |
| ------------------ | ------------------ |
| Better scalability | Large applications |
| Easier maintenance | Isolated features  |
| Cleaner imports    | Organized code     |
| Team collaboration | Clear ownership    |

---

# Best Practices

---

# Keep Components Small

Each component should do one thing well.

---

# Use Feature-Based Architecture

Better for medium-large apps.

---

# Avoid Deep Nesting

Bad:

```txt
components/common/ui/shared/base/
```

Good:

```txt
components/ui/
```

---

# Separate Business Logic

Use:

- composables
- services
- stores

instead of putting everything inside components.

---

# Use Aliases

Instead of:

```js
../../../components/Button.vue
```

Use:

```js
@/components/Button.vue
```

---

# Recommended Structure for Most Projects

```txt
src/
│
├── assets/
├── components/
├── composables/
├── layouts/
├── pages/
├── router/
├── services/
├── stores/
├── styles/
├── utils/
│
├── App.vue
└── main.js
```

---

# Folder Responsibilities Summary

| Folder      | Responsibility          |
| ----------- | ----------------------- |
| assets      | Static processed assets |
| components  | Reusable UI             |
| composables | Reusable logic          |
| views/pages | Route pages             |
| router      | Routing                 |
| stores      | Global state            |
| services    | API calls               |
| utils       | Helper functions        |
| layouts     | Page layouts            |
| styles      | Global styling          |
| constants   | App constants           |
| types       | TypeScript types        |
