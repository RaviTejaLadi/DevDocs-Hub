import type { PresetConfig } from '../types';

export const HTML_PRESET: PresetConfig = {
  id: 'html',
  label: 'HTML',
  template: 'static',
  activeFile: '/index.html',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Live HTML Preview</title>
  </head>
  <body>
    <main style="font-family: sans-serif; padding: 1rem;">
      <h1>Hello HTML</h1>
      <p>Edit this file and see live updates.</p>
    </main>
  </body>
</html>`,
    },
  },
};

export const CSS_PRESET: PresetConfig = {
  id: 'css',
  label: 'CSS',
  template: 'static',
  activeFile: '/styles.css',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Live CSS Preview</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main class="card">
      <h1>CSS Playground</h1>
      <p>Update styles.css to restyle this card.</p>
    </main>
  </body>
</html>`,
    },
    '/styles.css': {
      code: `:root {
  color-scheme: light dark;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Inter, system-ui, sans-serif;
  background: radial-gradient(circle at top, #1f2937, #111827);
}

.card {
  width: min(560px, 92vw);
  padding: 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  color: #e5e7eb;
  border: 1px solid rgba(255, 255, 255, 0.18);
}`,
    },
  },
};

export const JAVASCRIPT_PRESET: PresetConfig = {
  id: 'javascript',
  label: 'JavaScript',
  template: 'static',
  activeFile: '/script.js',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Live JavaScript Preview</title>
    <style>
      body { font-family: Inter, system-ui, sans-serif; margin: 0; padding: 1rem; }
      button { padding: 0.5rem 0.9rem; border-radius: 8px; border: 1px solid #d1d5db; cursor: pointer; }
    </style>
  </head>
  <body>
    <h1>JavaScript Playground</h1>
    <p>Count: <strong id="count">0</strong></p>
    <button id="incrementBtn" type="button">Increment</button>
    <script src="./script.js"></script>
  </body>
</html>`,
    },
    '/script.js': {
      code: `const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
let count = 0;

incrementBtn?.addEventListener("click", () => {
  count += 1;
  if (countEl) countEl.textContent = String(count);
});`,
    },
  },
};

export const REACT_PRESET: PresetConfig = {
  id: 'react',
  label: 'React',
  template: 'react',
  activeFile: '/App.js',
  files: {
    '/App.js': {
      code: `import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>React Playground</h1>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount((v) => v + 1)}>Click me</button>
    </main>
  );
}`,
    },
    '/styles.css': {
      code: `* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
}
.app {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 0.75rem;
  text-align: center;
}
button {
  padding: 0.55rem 0.9rem;
  border-radius: 8px;
  border: 0;
  background: #3b82f6;
  color: white;
}`,
    },
  },
};

export const TAILWIND_PRESET: PresetConfig = {
  id: 'tailwind',
  label: 'Tailwind',
  template: 'static',
  activeFile: '/index.html',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Tailwind Playground</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-100 grid place-items-center p-4">
    <section class="w-full max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
      <h1 class="text-2xl font-bold text-cyan-400">Tailwind Playground</h1>
      <p class="mt-2 text-slate-300">Edit class names to instantly preview Tailwind styles.</p>
      <button class="mt-5 rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
        Try me
      </button>
    </section>
  </body>
</html>`,
    },
  },
};

export const PRESETS: PresetConfig[] = [HTML_PRESET, CSS_PRESET, JAVASCRIPT_PRESET, REACT_PRESET, TAILWIND_PRESET];
