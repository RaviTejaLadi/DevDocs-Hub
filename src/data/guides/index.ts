import { guidePath } from '@/app/routes/paths';
import { jsGuides } from './content/javascript';
import { reactGuides } from './content/react';
import { architectureGuides } from './content/architectures';

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

export type GuideCategory = {
  label: string;
  guides: Guide[];
};

export const GUIDE_CATEGORIES: GuideCategory[] = [
  { label: 'JavaScript', guides: jsGuides },
  { label: 'React', guides: reactGuides },
  { label: 'Architectures', guides: architectureGuides },
];

export const GUIDES: Guide[] = [
  ...jsGuides,
  ...reactGuides,
  ...architectureGuides,
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
