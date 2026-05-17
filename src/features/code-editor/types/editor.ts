import type { SandpackFiles } from '@codesandbox/sandpack-react';

export type EditorPreset = 'html' | 'css' | 'javascript' | 'react' | 'tailwind';

export type PresetConfig = {
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
