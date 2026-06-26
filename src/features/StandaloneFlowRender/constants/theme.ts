export const THEME = {
  canvas: '#f8fafc',
  canvasGrid: '#e2e8f0',
  titleText: '#0f172a',
  topicFill: '#dbeafe',
  topicStroke: '#2563eb',
  topicText: '#1e3a8a',
  subtopicFill: '#ffffff',
  subtopicStroke: '#cbd5e1',
  subtopicText: '#334155',
  bodyText: '#475569',
  edgeSolid: '#64748b',
  edgeDashed: '#94a3b8',
  legendFill: '#ffffff',
  legendStroke: '#cbd5e1',
  legendText: '#334155',
  buttonPrimaryFill: '#1d4ed8',
  buttonPrimaryText: '#ffffff',
  buttonSecondaryFill: '#334155',
  buttonSecondaryText: '#ffffff',
  paragraphFill: '#ffffff',
  paragraphStroke: '#cbd5e1',
  verticalStroke: '#94a3b8',
  accentRecommended: '#7c3aed',
  accentAlternative: '#059669',
  accentOptional: '#64748b',
  selectedStroke: '#2563eb',
} as const;

export const FONT_FAMILY = 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif';

export const DEFAULT_FONT_SIZE = 14;
export const TITLE_FONT_SIZE = 24;
export const TOPIC_FONT_SIZE = 15;

export const LEGEND_DOT_RADIUS = 5;

export const HANDLE_RATIOS: Record<string, number> = {
  '1': 0.2,
  '2': 0.5,
  '3': 0.8,
};

export const EDGE_CORNER_RADIUS = 8;

export const LEGEND_COLORS: Record<string, string> = {
  'NJhQIvMyMD1Cu-JA1UCmJ': THEME.accentRecommended,
  'DMx7rAjVBWMbzjSde-tvp': THEME.accentAlternative,
  R9WLhURhPdVNXP7AUTDvR: THEME.accentOptional,
};
