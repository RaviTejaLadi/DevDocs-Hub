import { useMemo } from 'react';
import { STREAMS, TOPICS, type Topic } from '@/data/topics';
import { flattenTopicItems, docFeedSectionDomId } from '../utils';
import { formatTopicTrackLabel } from '../utils/formatTopicTrackLabel';
import type { FeedRow } from '../types';
import type { FeedRange } from './types';

export function useDocsFeedDerived(feedRange: FeedRange) {
  const catalogBounds = useMemo(() => ({ start: 0, end: Math.max(0, TOPICS.length - 1) }), []);

  const visibleTopics = useMemo(() => {
    const { start, end } = feedRange;
    const { start: c0, end: c1 } = catalogBounds;
    if (start > c1 || end < c0) return [];
    const lo = Math.max(c0, start);
    const hi = Math.min(c1, end);
    if (hi < lo) return [];
    return TOPICS.slice(lo, hi + 1);
  }, [feedRange, catalogBounds]);

  const feedRows = useMemo((): FeedRow[] => {
    return visibleTopics.flatMap((visTopic) =>
      flattenTopicItems(visTopic.items).map((item) => ({ topic: visTopic, item }))
    );
  }, [visibleTopics]);

  const docsTopicBrowserSections = useMemo(() => {
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

  const chainHasMoreBelow = useMemo(() => {
    if (visibleTopics.length === 0) return false;
    return feedRange.end < catalogBounds.end;
  }, [feedRange.end, catalogBounds.end, visibleTopics.length]);

  const chainHasMoreAbove = useMemo(() => {
    if (visibleTopics.length === 0) return false;
    return feedRange.start > catalogBounds.start;
  }, [feedRange.start, catalogBounds.start, visibleTopics.length]);

  const feedOrdinalByDomId = useMemo(() => {
    const m = new Map<string, number>();
    feedRows.forEach((row, i) => {
      m.set(docFeedSectionDomId(row.topic.id, row.item.id), i);
    });
    return m;
  }, [feedRows]);

  return {
    catalogBounds,
    visibleTopics,
    feedRows,
    docsTopicBrowserSections,
    chainHasMoreBelow,
    chainHasMoreAbove,
    feedOrdinalByDomId,
  };
}
