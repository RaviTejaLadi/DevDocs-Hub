import { GUIDES } from '@/data/guides';
import { INTERVIEW_TOPICS } from '@/data/interviewQuestions';
import type { TopicItem } from '@/data/topics';
import { TOPICS } from '@/data/topics';
import {
  docsPath,
  guidePath,
  guidesPath,
  interviewQuestionsPath,
  playgroundPath,
  ROUTE_PATHS,
  topicsPath,
  visualizationPath,
} from '@/app/routes/paths';
import { getPlaygrounds } from '@/features/playground/constants';
import { getVisualizations } from '@/features/visualization/constants';
import { SITE_URL } from './config';

export type SitemapEntry = {
  loc: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

function flattenDocItems(items: TopicItem[]): TopicItem[] {
  const result: TopicItem[] = [];
  for (const item of items) {
    if (item.items?.length) {
      result.push(...flattenDocItems(item.items));
    } else if (item.content || item.contentLoader) {
      result.push(item);
    }
  }
  return result;
}

export function collectSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { loc: absoluteLoc(ROUTE_PATHS.home), changefreq: 'weekly', priority: 1 },
    { loc: absoluteLoc(topicsPath()), changefreq: 'weekly', priority: 0.95 },
    { loc: absoluteLoc(guidesPath()), changefreq: 'weekly', priority: 0.9 },
    { loc: absoluteLoc(interviewQuestionsPath()), changefreq: 'weekly', priority: 0.9 },
    { loc: absoluteLoc(visualizationPath()), changefreq: 'weekly', priority: 0.8 },
    { loc: absoluteLoc(playgroundPath()), changefreq: 'weekly', priority: 0.8 },
    { loc: absoluteLoc(ROUTE_PATHS.codeEditor), changefreq: 'monthly', priority: 0.7 },
    { loc: absoluteLoc(ROUTE_PATHS.terms), changefreq: 'yearly', priority: 0.3 },
  ];

  for (const guide of GUIDES) {
    entries.push({
      loc: absoluteLoc(guidePath(guide.slug)),
      changefreq: 'monthly',
      priority: 0.8,
    });
  }

  for (const topic of TOPICS) {
    for (const item of flattenDocItems(topic.items)) {
      entries.push({
        loc: absoluteLoc(docsPath(topic.id, item.id)),
        changefreq: 'monthly',
        priority: 0.7,
      });
    }
  }

  for (const topic of INTERVIEW_TOPICS) {
    entries.push({
      loc: absoluteLoc(interviewQuestionsPath(topic.id)),
      changefreq: 'monthly',
      priority: 0.75,
    });
  }

  for (const visualization of getVisualizations()) {
    if (!visualization.available) continue;
    entries.push({
      loc: absoluteLoc(visualizationPath(visualization.id)),
      changefreq: 'monthly',
      priority: 0.65,
    });
  }

  for (const playground of getPlaygrounds()) {
    if (!playground.available) continue;
    entries.push({
      loc: absoluteLoc(playgroundPath(playground.id)),
      changefreq: 'monthly',
      priority: 0.65,
    });
  }

  return entries;
}

function absoluteLoc(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const urlNodes = entries
    .map((entry) => {
      const parts = [`    <loc>${escapeXml(entry.loc)}</loc>`];
      if (entry.changefreq) parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      if (entry.priority !== undefined) parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
