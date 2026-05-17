import type { Topic, TopicItem } from '@/topics';

export type FeedRow = { topic: Topic; item: TopicItem };

/** Options for jumping to a doc in the feed (topic browser vs in-feed navigation behave differently). */
export type NavigateToFeedItemOptions = {
  scrollBehavior?: ScrollBehavior;
  /** When true, collapse the chain to this topic only and reset scroll to the feed start (no in-section alignment). */
  scrollToTopicStart?: boolean;
};

export const normalizeNavigateToFeedItemOptions = (
  third?: ScrollBehavior | NavigateToFeedItemOptions
): NavigateToFeedItemOptions => {
  if (third === undefined) return {};
  if (typeof third === 'string') return { scrollBehavior: third };
  return third;
};
