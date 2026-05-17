import { useMemo, useState } from 'react';
import { autocompletion, completeFromList } from '@codemirror/autocomplete';
import { cssLanguage } from '@codemirror/lang-css';
import { htmlLanguage } from '@codemirror/lang-html';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import type { Extension } from '@codemirror/state';
import type { Completion } from '@codemirror/autocomplete';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from '@codesandbox/sandpack-react';
import { githubLight, amethyst } from '@codesandbox/sandpack-themes';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { PRESETS, REACT_PRESET } from '../constants/presets';
import {
  HTML_SUGGESTIONS,
  CSS_SUGGESTIONS,
  JAVASCRIPT_SUGGESTIONS,
  REACT_SUGGESTIONS,
  TAILWIND_SUGGESTIONS,
} from '../constants/autocompleteSuggestions';
import { useSandpackEditorHeight } from '../hooks';
import type { EditorPreset, LiveCodeEditorProps } from '../types';

export function LiveCodeEditor({ className, defaultPreset = 'react' }: LiveCodeEditorProps) {
  const [activePreset, setActivePreset] = useState<EditorPreset>(defaultPreset);
  const { theme } = useTheme();
  const editorHeight = useSandpackEditorHeight();

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
              className="live-code-editor-layout"
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
}

export default LiveCodeEditor;
