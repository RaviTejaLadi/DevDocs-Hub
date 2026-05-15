import { useMemo, useState } from 'react';
import { autocompletion, completeFromList, type Completion } from '@codemirror/autocomplete';
import { cssLanguage } from '@codemirror/lang-css';
import { htmlLanguage } from '@codemirror/lang-html';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import type { Extension } from '@codemirror/state';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
  type SandpackFiles,
} from '@codesandbox/sandpack-react';
import { githubLight, amethyst } from '@codesandbox/sandpack-themes';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

type EditorPreset = 'html' | 'css' | 'javascript' | 'react' | 'tailwind';

type PresetConfig = {
  id: EditorPreset;
  label: string;
  template: 'static' | 'react';
  files: SandpackFiles;
  activeFile: string;
};

export type LiveCodeEditorProps = {
  className?: string;
  defaultPreset?: EditorPreset;
};

const HTML_PRESET: PresetConfig = {
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

const CSS_PRESET: PresetConfig = {
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

const JAVASCRIPT_PRESET: PresetConfig = {
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

const REACT_PRESET: PresetConfig = {
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

const TAILWIND_PRESET: PresetConfig = {
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

const PRESETS: PresetConfig[] = [HTML_PRESET, CSS_PRESET, JAVASCRIPT_PRESET, REACT_PRESET, TAILWIND_PRESET];
const HTML_SUGGESTIONS: Completion[] = [
  { label: 'div', type: 'keyword' },
  { label: 'section', type: 'keyword' },
  { label: 'article', type: 'keyword' },
  { label: 'main', type: 'keyword' },
  { label: 'button', type: 'keyword' },
  { label: 'input', type: 'keyword' },
  { label: 'img', type: 'keyword' },
  { label: 'a', type: 'keyword' },
];

const CSS_SUGGESTIONS: Completion[] = [
  { label: 'display', type: 'property' },
  { label: 'position', type: 'property' },
  { label: 'padding', type: 'property' },
  { label: 'margin', type: 'property' },
  { label: 'background', type: 'property' },
  { label: 'border-radius', type: 'property' },
  { label: 'justify-content', type: 'property' },
  { label: 'align-items', type: 'property' },
];

const JAVASCRIPT_SUGGESTIONS: Completion[] = [
  { label: 'const', type: 'keyword' },
  { label: 'let', type: 'keyword' },
  { label: 'function', type: 'keyword' },
  { label: 'if', type: 'keyword' },
  { label: 'for', type: 'keyword' },
  { label: 'map', type: 'method' },
  { label: 'filter', type: 'method' },
  { label: 'addEventListener', type: 'method' },
];

const REACT_SUGGESTIONS: Completion[] = [
  { label: 'useState', type: 'function' },
  { label: 'useEffect', type: 'function' },
  { label: 'useMemo', type: 'function' },
  { label: 'onClick', type: 'property' },
  { label: 'className', type: 'property' },
  { label: 'return', type: 'keyword' },
];

const TAILWIND_SUGGESTIONS: Completion[] = [
  { label: 'flex', type: 'keyword' },
  { label: 'grid', type: 'keyword' },
  { label: 'gap-4', type: 'keyword' },
  { label: 'p-4', type: 'keyword' },
  { label: 'rounded-lg', type: 'keyword' },
  { label: 'text-sm', type: 'keyword' },
  { label: 'bg-slate-900', type: 'keyword' },
  { label: 'text-white', type: 'keyword' },
];

export const LiveCodeEditor = ({ className, defaultPreset = 'react' }: LiveCodeEditorProps) => {
  const [activePreset, setActivePreset] = useState<EditorPreset>(defaultPreset);
  const { theme } = useTheme();
  const editorHeight = 680;

  const selectedPreset = useMemo(
    () => PRESETS.find((preset) => preset.id === activePreset) ?? REACT_PRESET,
    [activePreset]
  );
  const resolvedTheme = useMemo<'light' | 'dark'>(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return theme;
  }, [theme]);

  const sandpackTheme = resolvedTheme === 'dark' ? amethyst : githubLight;
  const presetSuggestions = useMemo<Completion[]>(() => {
    if (selectedPreset.id === 'html') return HTML_SUGGESTIONS;
    if (selectedPreset.id === 'css') return CSS_SUGGESTIONS;
    if (selectedPreset.id === 'javascript') return JAVASCRIPT_SUGGESTIONS;
    if (selectedPreset.id === 'tailwind') return TAILWIND_SUGGESTIONS;

    return REACT_SUGGESTIONS;
  }, [selectedPreset.id]);

  const languageExtension = useMemo<Extension>(() => {
    if (selectedPreset.id === 'html' || selectedPreset.id === 'tailwind') {
      return htmlLanguage.data.of({
        autocomplete: completeFromList(presetSuggestions),
      });
    }

    if (selectedPreset.id === 'css') {
      return cssLanguage.data.of({
        autocomplete: completeFromList(presetSuggestions),
      });
    }

    return javascriptLanguage.data.of({
      autocomplete: completeFromList(presetSuggestions),
    });
  }, [presetSuggestions, selectedPreset.id]);

  const editorExtensions = useMemo<Extension[]>(
    () => [
      languageExtension,
      autocompletion({
        activateOnTyping: true,
        defaultKeymap: true,
        icons: true,
        maxRenderedOptions: 16,
      }),
    ],
    [languageExtension]
  );

  return (
    <section className={`live-code-editor ${className ?? ''}`}>
      <div className="rounded-xl border border-border/60 bg-card/40 p-2 shadow-sm backdrop-blur-sm">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border/50 bg-muted/35 px-2 py-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-1 hidden text-xs font-medium text-foreground/90 sm:inline">
              {selectedPreset.label} Playground
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            {PRESETS.map((preset) => (
              <Button
                key={preset.id}
                type="button"
                variant={preset.id === selectedPreset.id ? 'default' : 'ghost'}
                onClick={() => setActivePreset(preset.id)}
                className="h-7 rounded-md px-2.5 text-xs font-medium"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </div>

        <SandpackProvider
          key={selectedPreset.id}
          template={selectedPreset.template}
          files={selectedPreset.files}
          options={{
            activeFile: selectedPreset.activeFile,
            autorun: true,
            recompileMode: 'immediate',
          }}
        >
          <SandpackThemeProvider theme={sandpackTheme}>
            <SandpackLayout
              style={{
                borderRadius: 10,
                overflow: 'hidden',
                minHeight: editorHeight,
                border: '1px solid hsl(var(--border))',
                boxShadow:
                  resolvedTheme === 'dark' ? '0 8px 32px rgba(2, 6, 23, 0.4)' : '0 8px 24px rgba(15, 23, 42, 0.08)',
              }}
            >
              <SandpackCodeEditor
                showTabs
                showLineNumbers
                closableTabs={false}
                style={{ height: editorHeight, flex: 1 }}
                wrapContent
                extensions={editorExtensions}
              />
              <SandpackPreview style={{ height: editorHeight, flex: 1 }} showOpenInCodeSandbox={false} />
            </SandpackLayout>
          </SandpackThemeProvider>
        </SandpackProvider>
      </div>
    </section>
  );
};

export default LiveCodeEditor;
