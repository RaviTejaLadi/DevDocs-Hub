export const STREAM_EMOJI: Record<string, string> = {
  'computer-science': '💻',
  'mechanical-engineering': '⚙️',
  'basic-science': '🔬',
  'electrical-engineering': '⚡',
  'electronics-communication': '📡',
  'civil-engineering': '🏗️',
  'chemical-engineering': '🧪',
  'data-science-ai': '🤖',
  cybersecurity: '🛡️',
  'aptitude-placement': '🎯',
};

const CATEGORY_KEYWORDS: Array<{ match: RegExp; emoji: string; accent: string; ring: string }> = [
  {
    match: /frontend|web|ui|react|css|html/i,
    emoji: '🎨',
    accent: 'from-blue-500/12 via-blue-500/4 to-transparent',
    ring: 'border-blue-500/20',
  },
  {
    match: /backend|server|api|node|database|sql|mongo/i,
    emoji: '🗄️',
    accent: 'from-emerald-500/12 via-emerald-500/4 to-transparent',
    ring: 'border-emerald-500/20',
  },
  {
    match: /cloud|aws|azure|devops|deploy/i,
    emoji: '☁️',
    accent: 'from-blue-500/12 via-blue-500/4 to-transparent',
    ring: 'border-blue-500/20',
  },
  {
    match: /dsa|algorithm|data.?structure|system.?design|architecture/i,
    emoji: '🧩',
    accent: 'from-violet-500/12 via-violet-500/4 to-transparent',
    ring: 'border-violet-500/20',
  },
  {
    match: /math|physics|chemistry|biology|science/i,
    emoji: '📐',
    accent: 'from-amber-500/12 via-amber-500/4 to-transparent',
    ring: 'border-amber-500/20',
  },
  {
    match: /machine|thermo|fluid|mechanic|material|manufactur/i,
    emoji: '🔧',
    accent: 'from-orange-500/12 via-orange-500/4 to-transparent',
    ring: 'border-orange-500/20',
  },
  {
    match: /circuit|power|electrical|electronic|signal/i,
    emoji: '🔌',
    accent: 'from-yellow-500/12 via-yellow-500/4 to-transparent',
    ring: 'border-yellow-500/20',
  },
  {
    match: /security|crypto|hack/i,
    emoji: '🔐',
    accent: 'from-rose-500/12 via-rose-500/4 to-transparent',
    ring: 'border-rose-500/20',
  },
  {
    match: /aptitude|placement|interview|reasoning/i,
    emoji: '📝',
    accent: 'from-pink-500/12 via-pink-500/4 to-transparent',
    ring: 'border-pink-500/20',
  },
];

const DEFAULT_CATEGORY_VISUAL = {
  emoji: '📚',
  accent: 'from-primary/10 via-primary/4 to-transparent',
  ring: 'border-primary/20',
};

export function getCategoryVisual(category: string) {
  const normalized = category.replace(/-/g, ' ');
  for (const entry of CATEGORY_KEYWORDS) {
    if (entry.match.test(normalized)) {
      return { emoji: entry.emoji, accent: entry.accent, ring: entry.ring };
    }
  }
  return DEFAULT_CATEGORY_VISUAL;
}

export function getStreamEmoji(streamId: string) {
  return STREAM_EMOJI[streamId] ?? '📖';
}
