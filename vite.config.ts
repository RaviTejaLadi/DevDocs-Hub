import path from 'path';
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import remarkGfm from 'remark-gfm';

/** Keep `?raw` MDX imports as plain strings — @mdx-js/rollup otherwise compiles them. */
function mdxPluginSkipRaw(): Plugin {
  const plugin = mdx({ remarkPlugins: [remarkGfm], providerImportSource: '@mdx-js/react' });
  const transform = plugin.transform?.bind(plugin);

  return {
    ...plugin,
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('?raw')) return null;
      return transform?.(code, id);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdxPluginSkipRaw(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  /** Pre-bundle mermaid so lazy `MermaidRenderer` loads a stable chunk (avoids 504 Outdated Optimize Dep in dev). */
  optimizeDeps: {
    include: ['mermaid'],
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
          // Keep react, react-dom, and react-router in one chunk — splitting them causes a
          // circular dependency where react-dom imports React from react-router (undefined at runtime).
          if (
            id.includes('/react-dom/') ||
            id.includes('/react-router') ||
            id.includes('/scheduler/') ||
            /node_modules[/\\]react[/\\]/.test(id)
          ) {
            return 'react-vendor';
          }
        },
      },
    },
  },
  server: {
    open: true,
    port: 1234,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
