import { guidePath } from '@/app/routes/paths';
import { jsGuides } from './content/javascript';

export type GuideType = 'textual' | 'question' | 'roadmap';

export type Guide = {
  slug: string;
  title: string;
  type: GuideType;
  publishedMonth: string;
  isNew?: boolean;
  description: string;
  contentLoader: () => Promise<{ default: string }>;
};

export const GUIDE_TYPE_LABELS: Record<GuideType, string> = {
  textual: 'Textual',
  question: 'Question',
  roadmap: 'Roadmap',
};

export const HOMEPAGE_GUIDES_LIMIT = 6;

export const GUIDES: Guide[] = [
  ...jsGuides,
  {
    slug: 'dsa-interview-prep',
    title: 'DSA Interview Preparation Guide',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description: 'A focused 4-week plan for revising data structures and algorithms before coding interviews.',
    contentLoader: () => import('./content/dsa-interview-prep.mdx?raw'),
  },
  {
    slug: 'system-design-interview-prep',
    title: 'System Design Interview Guide',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description: 'A structured framework for tackling system design interviews — from requirements to trade-offs.',
    contentLoader: () => import('./content/system-design-interview-prep.mdx?raw'),
  },
];

export const GUIDE_TYPE_OPTIONS: Array<{ value: GuideType | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'textual', label: 'Textual' },
  { value: 'question', label: 'Question' },
  { value: 'roadmap', label: 'Roadmap' },
];

export function getGuideBySlug(slug: string | undefined): Guide | undefined {
  if (!slug) return undefined;
  return GUIDES.find((guide) => guide.slug === slug);
}

export function getGuideHref(guide: Guide): string {
  return guidePath(guide.slug);
}

export const HOMEPAGE_GUIDES = GUIDES.slice(0, HOMEPAGE_GUIDES_LIMIT);
