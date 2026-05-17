import { useEffect } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { CHAIN_TOPICS_PREFETCH_BATCH } from '../constants';
import type { FeedRow } from '../types';
import type { FeedRange } from './types';

type PrefetchParams = {
  viewportRef: RefObject<HTMLDivElement | null> | undefined;
  chainHasMoreAbove: boolean;
  chainHasMoreBelow: boolean;
  feedRows: FeedRow[];
  feedRange: FeedRange;
  catalogBounds: { start: number; end: number };
  setFeedRange: Dispatch<SetStateAction<FeedRange>>;
  prependSentinelRef: RefObject<HTMLDivElement | null>;
  appendSentinelRef: RefObject<HTMLDivElement | null>;
  prependSnapRef: RefObject<{ sh: number; st: number } | null>;
  prependPreserveOnlyRef: RefObject<boolean>;
  feedRowsCountBeforeMutationRef: RefObject<number>;
};

export function useDocsFeedPrefetch({
  viewportRef,
  chainHasMoreAbove,
  chainHasMoreBelow,
  feedRows,
  feedRange,
  catalogBounds,
  setFeedRange,
  prependSentinelRef,
  appendSentinelRef,
  prependSnapRef,
  prependPreserveOnlyRef,
  feedRowsCountBeforeMutationRef,
}: PrefetchParams) {
  /** Prefetch older topics when the user scrolls up toward the hero. */
  useEffect(() => {
    const root = viewportRef?.current;
    const el = prependSentinelRef.current;
    if (!root || !el || !chainHasMoreAbove) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        const vp = viewportRef.current;
        if (vp) prependSnapRef.current = { sh: vp.scrollHeight, st: vp.scrollTop };
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        prependPreserveOnlyRef.current = true;
        setFeedRange((r) => {
          const nextStart = Math.max(catalogBounds.start, r.start - CHAIN_TOPICS_PREFETCH_BATCH);
          if (nextStart >= r.start) return r;
          return { ...r, start: nextStart };
        });
      },
      { root, rootMargin: '520px 0px 520px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [
    viewportRef,
    chainHasMoreAbove,
    feedRows.length,
    catalogBounds.start,
    feedRange.start,
    setFeedRange,
    prependSentinelRef,
    prependSnapRef,
    prependPreserveOnlyRef,
    feedRowsCountBeforeMutationRef,
  ]);

  /** Infinite chain: prefetch the next topic when the sentinel below the feed nears the viewport. */
  useEffect(() => {
    const root = viewportRef?.current;
    const el = appendSentinelRef.current;
    if (!root || !el || !chainHasMoreBelow) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        setFeedRange((r) => {
          const nextEnd = Math.min(catalogBounds.end, r.end + CHAIN_TOPICS_PREFETCH_BATCH);
          if (nextEnd <= r.end) return r;
          return { ...r, end: nextEnd };
        });
      },
      { root, rootMargin: '480px 0px 640px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [
    viewportRef,
    chainHasMoreBelow,
    feedRange.end,
    feedRows.length,
    catalogBounds.end,
    setFeedRange,
    appendSentinelRef,
  ]);
}
