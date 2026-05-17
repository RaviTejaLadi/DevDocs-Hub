import type { Completion } from '@codemirror/autocomplete';

export const HTML_SUGGESTIONS: Completion[] = [
  { label: 'div', type: 'keyword' },
  { label: 'section', type: 'keyword' },
  { label: 'article', type: 'keyword' },
  { label: 'main', type: 'keyword' },
  { label: 'button', type: 'keyword' },
  { label: 'input', type: 'keyword' },
  { label: 'img', type: 'keyword' },
  { label: 'a', type: 'keyword' },
];

export const CSS_SUGGESTIONS: Completion[] = [
  { label: 'display', type: 'property' },
  { label: 'position', type: 'property' },
  { label: 'padding', type: 'property' },
  { label: 'margin', type: 'property' },
  { label: 'background', type: 'property' },
  { label: 'border-radius', type: 'property' },
  { label: 'justify-content', type: 'property' },
  { label: 'align-items', type: 'property' },
];

export const JAVASCRIPT_SUGGESTIONS: Completion[] = [
  { label: 'const', type: 'keyword' },
  { label: 'let', type: 'keyword' },
  { label: 'function', type: 'keyword' },
  { label: 'if', type: 'keyword' },
  { label: 'for', type: 'keyword' },
  { label: 'map', type: 'method' },
  { label: 'filter', type: 'method' },
  { label: 'addEventListener', type: 'method' },
];

export const REACT_SUGGESTIONS: Completion[] = [
  { label: 'useState', type: 'function' },
  { label: 'useEffect', type: 'function' },
  { label: 'useMemo', type: 'function' },
  { label: 'onClick', type: 'property' },
  { label: 'className', type: 'property' },
  { label: 'return', type: 'keyword' },
];

export const TAILWIND_SUGGESTIONS: Completion[] = [
  { label: 'flex', type: 'keyword' },
  { label: 'grid', type: 'keyword' },
  { label: 'gap-4', type: 'keyword' },
  { label: 'p-4', type: 'keyword' },
  { label: 'rounded-lg', type: 'keyword' },
  { label: 'text-sm', type: 'keyword' },
  { label: 'bg-slate-900', type: 'keyword' },
  { label: 'text-white', type: 'keyword' },
];
