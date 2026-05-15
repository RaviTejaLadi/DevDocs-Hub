import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: {
      resolveDependencies(_filename, deps) {
        return deps.filter(
          (dep) =>
            !dep.includes('mermaid') &&
            !dep.includes('sandpack') &&
            !dep.includes('codemirror') &&
            !dep.includes('syntax-highlighter') &&
            !dep.includes('katex')
        );
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('@codesandbox')) return 'sandpack';
          if (id.includes('@codemirror') || id.includes('@lezer') || id.includes('codemirror')) return 'codemirror';
          if (id.includes('mermaid')) return 'mermaid';
          if (id.includes('react-syntax-highlighter')) return 'syntax-highlighter';
          if (id.includes('react-dom')) return 'react-dom';
          if (id.includes('react-router')) return 'react-router';
        },
      },
    },
  },
  server: {
    open: true,
    port: 1234,
  },
});
