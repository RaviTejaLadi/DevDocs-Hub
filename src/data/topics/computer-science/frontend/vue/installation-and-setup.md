# Installation & Setup (Latest 2026)

# Prerequisites

Install:

- Node.js (LTS version recommended)
- npm / pnpm / yarn

Check installation:

```bash
node -v
npm -v
```

---

# Install Node.js

Download from:

```txt
https://nodejs.org
```

Install the latest **LTS** version.

Verify:

```bash
node -v
npm -v
```

---

# Recommended Stack

| Tool | Recommended |
|---|---|
| Framework | Vue 3 |
| Build Tool | Vite |
| Package Manager | pnpm |
| State Management | Pinia |
| Routing | Vue Router |
| Styling | Tailwind CSS |

---

# Create Vue Project

## Using npm

```bash
npm create vue@latest
```

---

## Using pnpm (Recommended)

```bash
pnpm create vue
```

---

## Using yarn

```bash
yarn create vue
```

---

# Setup Options

During installation select:

```txt
✔ Project name: my-vue-app
✔ TypeScript: Yes (Recommended)
✔ JSX Support: No
✔ Vue Router: Yes
✔ Pinia: Yes
✔ ESLint: Yes
✔ Prettier: Yes
✔ Vitest: Optional
✔ Cypress: Optional
```

---

# Enter Project

```bash
cd my-vue-app
```

---

# Install Dependencies

## npm

```bash
npm install
```

---

## pnpm

```bash
pnpm install
```

---

# Start Development Server

## npm

```bash
npm run dev
```

---

## pnpm

```bash
pnpm dev
```

---

# Output

```txt
VITE v6 ready in 300ms

➜ Local: http://localhost:5173/
```

Open:

```txt
http://localhost:5173
```

---

# Project Structure

```txt
my-vue-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── stores/
│   ├── App.vue
│   └── main.js
│
├── package.json
├── vite.config.js
└── index.html
```

---

# Install Tailwind CSS

## Install

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

# Update vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

---

# Create CSS File

```txt
src/assets/main.css
```

Add:

```css
@import "tailwindcss";
```

---

# Import CSS

## main.js

```js
import './assets/main.css'
```

---

# Install Vue Router

```bash
npm install vue-router
```

---

# Router Setup

## src/router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
```

---

# Register Router

## main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(router)
  .mount('#app')
```

---

# Install Pinia

```bash
npm install pinia
```

---

# Setup Pinia

## main.js

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
```

---

# Build for Production

```bash
npm run build
```

Output:

```txt
dist/
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Environment Variables

## Create

```txt
.env
```

---

## Example

```env
VITE_API_URL=https://api.example.com
```

---

# Access Variables

```js
const apiUrl = import.meta.env.VITE_API_URL
```

---

# Useful Commands

| Command | Purpose |
|---|---|
| npm run dev | Start development |
| npm run build | Production build |
| npm run preview | Preview production |
| npm run lint | Run ESLint |

---

# Recommended VS Code Extensions

| Extension | Purpose |
|---|---|
| Vue Official (Volar) | Vue support |
| ESLint | Linting |
| Prettier | Formatting |
| Tailwind CSS IntelliSense | Tailwind autocomplete |

---

# Common Errors

## Port Already Used

```bash
npm run dev -- --port 3000
```

---

## Tailwind Not Working

Check:

- CSS imported
- Plugin added
- Restart dev server

---

# Final Recommended Setup

```txt
Vue 3
Vite
Pinia
Vue Router
Tailwind CSS
ESLint
Prettier
```