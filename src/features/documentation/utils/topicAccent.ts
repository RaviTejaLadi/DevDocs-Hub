import type { CSSProperties } from 'react';

/** Curated hues for well-known topics; everything else gets a stable palette slot. */
const TOPIC_HUE_OVERRIDES: Record<string, number> = {
  html: 24,
  css: 217,
  js: 48,
  javascript: 48,
  typescript: 239,
  react: 199,
  nextjs: 210,
  vue: 152,
  node: 142,
  express: 160,
  dsa: 280,
  'system-design': 262,
  mongodb: 142,
  mysql: 24,
  python: 48,
  physics: 199,
  chemistry: 330,
  mathematics: 262,
  biology: 152,
};

/** Distinct hues for auto-assigned topics (golden-angle spacing avoids muddy neighbors). */
const PALETTE_HUES = [
  12, 28, 45, 62, 78, 95, 112, 128, 145, 162, 178, 195, 212, 228, 245, 262, 278, 295, 312, 328, 345,
];

function hashTopicId(topicId: string): number {
  let h = 0;
  for (let i = 0; i < topicId.length; i++) {
    h = (h * 31 + topicId.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function getTopicHue(topicId: string): number {
  const override = TOPIC_HUE_OVERRIDES[topicId];
  if (override !== undefined) return override;
  return PALETTE_HUES[hashTopicId(topicId) % PALETTE_HUES.length]!;
}

export type TopicAccent = {
  hue: number;
  /** Inline CSS custom properties for zone surfaces and accents. */
  style: CSSProperties;
};

export function getTopicAccent(topicId: string): TopicAccent {
  const hue = getTopicHue(topicId);
  return {
    hue,
    style: {
      ['--topic-h' as string]: String(hue),
    },
  };
}
