import type { Topic } from '@/data/topics';
import type { FeedRow } from '../types';

export type FeedTopicBlock = {
  topic: Topic;
  entries: { row: FeedRow; globalIdx: number }[];
};

/** Groups consecutive feed rows that share the same topic into scroll “chapters”. */
export function groupFeedRowsByTopic(feedRows: FeedRow[]): FeedTopicBlock[] {
  const blocks: FeedTopicBlock[] = [];
  feedRows.forEach((row, globalIdx) => {
    const last = blocks[blocks.length - 1];
    if (!last || last.topic.id !== row.topic.id) {
      blocks.push({ topic: row.topic, entries: [{ row, globalIdx }] });
    } else {
      last.entries.push({ row, globalIdx });
    }
  });
  return blocks;
}
