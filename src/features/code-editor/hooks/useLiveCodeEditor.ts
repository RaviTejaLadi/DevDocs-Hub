import { useMemo, useState } from 'react';
import { autocompletion, completeFromList } from '@codemirror/autocomplete';
import { cssLanguage } from '@codemirror/lang-css';
import { htmlLanguage } from '@codemirror/lang-html';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import type { Extension } from '@codemirror/state';
import type { Completion } from '@codemirror/autocomplete';
import { githubLight, amethyst } from '@codesandbox/sandpack-themes';
import { useTheme } from '@/hooks/useTheme';
import { PRESETS, REACT_PRESET } from '../constants/presets';
import {
  HTML_SUGGESTIONS,
  CSS_SUGGESTIONS,
  JAVASCRIPT_SUGGESTIONS,
  REACT_SUGGESTIONS,
  TAILWIND_SUGGESTIONS,
} from '../constants/autocompleteSuggestions';
import type { EditorPreset } from '../types';

export function useLiveCodeEditor(defaultPreset: EditorPreset = 'react') {
  const [activePreset, setActivePreset] = useState<EditorPreset>(defaultPreset);
  const { theme } = useTheme();

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

  const layoutStyle = useMemo(
    () => ({
      borderRadius: 10,
      overflow: 'hidden' as const,
      border: '1px solid hsl(var(--border))',
      boxShadow: resolvedTheme === 'dark' ? '0 8px 32px rgba(2, 6, 23, 0.4)' : '0 8px 24px rgba(15, 23, 42, 0.08)',
    }),
    [resolvedTheme]
  );

  return {
    activePreset,
    setActivePreset,
    selectedPreset,
    resolvedTheme,
    sandpackTheme,
    editorExtensions,
    layoutStyle,
  };
}
