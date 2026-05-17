import { cn } from '@/lib/utils';

/** How many topic "chapters" to load per sentinel hit (global catalog, all streams). */
export const CHAIN_TOPICS_PREFETCH_BATCH = 2;

/** Fits one topic “screen” inside the ScrollArea viewport (navbar + outer py + safe areas — see App.tsx wrapper). */
export const DOC_FEED_TOPIC_CARD_CLASS = cn(
  'h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] min-h-[18rem]',
  'max-h-[calc(100dvh-9rem-env(safe-area-inset-bottom))]',
  'sm:h-[calc(100dvh-8.5rem-env(safe-area-inset-bottom))] sm:min-h-[20rem] sm:max-h-[calc(100dvh-8.5rem-env(safe-area-inset-bottom))]',
  'md:h-[calc(100dvh-8.85rem-env(safe-area-inset-bottom))] md:max-h-[calc(100dvh-8.85rem-env(safe-area-inset-bottom))]',
  'lg:h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] lg:min-h-[21rem]',
  'lg:max-h-[calc(100dvh-9rem-env(safe-area-inset-bottom))]'
);

/** Section shell: fixed viewport card height; inner post chrome lives in DocsFeedTopicSection. */
export const DOC_FEED_SECTION_SHELL_CLASS = cn(
  'not-prose doc-feed-post flex min-w-0 w-full max-w-full flex-col overflow-x-hidden',
  'scroll-mt-24 md:scroll-mt-28',
  DOC_FEED_TOPIC_CARD_CLASS
);
