import { useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import type { Location } from 'react-router-dom';
import { TOPICS } from '@/data/topics';
import { isDocsPreserveScrollState } from '@/lib/docsLocationState';
import { useScrollViewport } from '@/context/scrollViewportContext';
import type { FeedRange } from './types';

export function useDocsFeedRange(categoryId: string | undefined, location: Location) {
  const viewportRef = useScrollViewport();

  const [feedRange, setFeedRange] = useState<FeedRange>(() => {
    const i = categoryId ? TOPICS.findIndex((t) => t.id === categoryId) : -1;
    const ix = i >= 0 ? i : 0;
    return { start: ix, end: ix };
  });

  const feedRangeRef = useRef(feedRange);
  const prependSnapRef = useRef<{ sh: number; st: number } | null>(null);
  const prependPreserveOnlyRef = useRef(false);
  const pendingScrollWasPrependRef = useRef(false);
  const pendingScrollToDomIdRef = useRef<string | null>(null);
  const feedRowsCountBeforeMutationRef = useRef(0);
  const inViewSyncSuppressedUntilRef = useRef(0);
  const skipSlugScrollIntoViewRef = useRef(false);
  const routeTopicIdRef = useRef(categoryId);
  const slugRef = useRef<string | undefined>(undefined);
  const prependSentinelRef = useRef<HTMLDivElement | null>(null);
  const appendSentinelRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    feedRangeRef.current = feedRange;
  }, [feedRange]);

  useLayoutEffect(() => {
    routeTopicIdRef.current = categoryId;
  });

  /**
   * Keep `feedRange` consistent with the route *before paint*.
   * Critical: sidebar / search use `docsScroll: 'reset'` (or no state). Those navigations must collapse
   * to exactly the route topic. The old “only if outside range” rule broke when the chain already
   * included the target index (HTML…React) — the hero came from the URL but prior topics stayed mounted.
   */
  useLayoutEffect(() => {
    if (!categoryId) return;
    const newIdx = TOPICS.findIndex((t) => t.id === categoryId);
    if (newIdx < 0) return;

    const preserve = isDocsPreserveScrollState(location.state);
    const { start, end } = feedRangeRef.current;
    let didMutateRange = false;

    if (!preserve) {
      if (start !== newIdx || end !== newIdx) {
        prependSnapRef.current = null;
        prependPreserveOnlyRef.current = false;
        pendingScrollToDomIdRef.current = null;
        flushSync(() => setFeedRange({ start: newIdx, end: newIdx }));
        didMutateRange = true;
      }
    } else if (newIdx < start || newIdx > end) {
      prependSnapRef.current = null;
      prependPreserveOnlyRef.current = false;
      pendingScrollToDomIdRef.current = null;
      flushSync(() => setFeedRange({ start: newIdx, end: newIdx }));
      didMutateRange = true;
    }

    if (didMutateRange) {
      inViewSyncSuppressedUntilRef.current = Date.now() + 1200;
    }

    const vp = viewportRef?.current;
    if (!preserve && vp) {
      vp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      requestAnimationFrame(() => {
        vp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }, [categoryId, location.key, location.state, viewportRef]);

  return {
    feedRange,
    setFeedRange,
    feedRangeRef,
    prependSnapRef,
    prependPreserveOnlyRef,
    pendingScrollWasPrependRef,
    pendingScrollToDomIdRef,
    feedRowsCountBeforeMutationRef,
    inViewSyncSuppressedUntilRef,
    skipSlugScrollIntoViewRef,
    routeTopicIdRef,
    slugRef,
    prependSentinelRef,
    appendSentinelRef,
    viewportRef,
  };
}
