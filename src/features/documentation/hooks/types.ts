import type { RefObject } from 'react';

export type FeedRange = { start: number; end: number };

export type DocsFeedMutationRefs = {
  feedRangeRef: RefObject<FeedRange>;
  prependSnapRef: RefObject<{ sh: number; st: number } | null>;
  prependPreserveOnlyRef: RefObject<boolean>;
  pendingScrollWasPrependRef: RefObject<boolean>;
  pendingScrollToDomIdRef: RefObject<string | null>;
  feedRowsCountBeforeMutationRef: RefObject<number>;
  inViewSyncSuppressedUntilRef: RefObject<number>;
  skipSlugScrollIntoViewRef: RefObject<boolean>;
  routeTopicIdRef: RefObject<string | undefined>;
  slugRef: RefObject<string | undefined>;
};
