import { useMemo } from 'react';
import { STREAMS, type Topic } from '@/data/topics';
import type { DocsTopicBrowserSection } from '../components/DocsTopicBrowserSheet';
import { formatTopicTrackLabel } from '../utils/formatTopicTrackLabel';

export function useDocsTopicBrowserSections(): DocsTopicBrowserSection[] {
  return useMemo(() => {
    type CategoryBlock = { key: string; label: string; topics: Topic[] };
    return STREAMS.map((stream) => {
      const categories: CategoryBlock[] = [];
      const byKey = new Map<string, CategoryBlock>();
      for (const top of stream.topics) {
        let block = byKey.get(top.category);
        if (!block) {
          block = {
            key: top.category,
            label: formatTopicTrackLabel(top.category) || top.category,
            topics: [],
          };
          byKey.set(top.category, block);
          categories.push(block);
        }
        block.topics.push(top);
      }
      return { stream, categories };
    });
  }, []);
}
