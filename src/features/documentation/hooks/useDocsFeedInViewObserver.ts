import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { RefObject } from 'react';
import { TOPICS } from '@/data/topics';
import { DOCS_NAV_PRESERVE_SCROLL } from '@/lib/docsLocationState';
import { useDocsFeedSync } from '@/context/docsFeedSyncContext';
import { docFeedSectionDomId, parseDocFeedSectionDomId } from '../utils';
import type { FeedRow } from '../types';
import type { FeedRange } from './types';

type InViewObserverParams = {
  feedRows: FeedRow[];
  feedOrdinalByDomId: Map<string, number>;
  viewportRef: RefObject<HTMLDivElement | null> | undefined;
  feedRangeRef: RefObject<FeedRange>;
  routeTopicIdRef: RefObject<string | undefined>;
  slugRef: RefObject<string | undefined>;
  inViewSyncSuppressedUntilRef: RefObject<number>;
  skipSlugScrollIntoViewRef: RefObject<boolean>;
  setInViewFeedKey: (key: string) => void;
};

export function useDocsFeedInViewObserver({
  feedRows,
  feedOrdinalByDomId,
  viewportRef,
  feedRangeRef,
  routeTopicIdRef,
  slugRef,
  inViewSyncSuppressedUntilRef,
  skipSlugScrollIntoViewRef,
  setInViewFeedKey,
}: InViewObserverParams) {
  const navigate = useNavigate();
  const { setFeedOverlay, pathRevisionRef } = useDocsFeedSync();

  /** URL + sidebar sync: update overlay immediately; path `replace` at most once per frame. */
  useEffect(() => {
    const root = viewportRef?.current;
    if (!root || feedRows.length === 0) return;

    let obs: IntersectionObserver | null = null;
    let cancelled = false;
    let navRafId = 0;
    let pendingNav: { topicId: string; itemId: string } | null = null;

    const MIN_WINNER_RATIO = 0.14;
    const MAX_ORDINAL_JUMP = 36;

    const flushNav = () => {
      navRafId = 0;
      const p = pendingNav;
      pendingNav = null;
      if (!p || cancelled) return;

      const rt = routeTopicIdRef.current;
      const sl = slugRef.current;
      const { start: frStart, end: frEnd } = feedRangeRef.current;

      if (frStart === frEnd && p.topicId !== rt) return;

      if (p.itemId === sl && p.topicId === rt) return;

      if (p.itemId !== sl || p.topicId !== rt) {
        skipSlugScrollIntoViewRef.current = true;
        navigate(`/docs/${p.topicId}/${p.itemId}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
      }
    };

    const scheduleNav = (topicId: string, itemId: string) => {
      pendingNav = { topicId, itemId };
      if (navRafId) return;
      navRafId = requestAnimationFrame(flushNav);
    };

    const start = () => {
      if (cancelled) return;
      obs = new IntersectionObserver(
        (entries) => {
          if (Date.now() < inViewSyncSuppressedUntilRef.current) return;
          const hits = entries.filter((e) => e.isIntersecting && e.target.id.startsWith('doc-feed-'));
          if (!hits.length) return;
          const rr = root.getBoundingClientRect();
          const focusY = rr.top + rr.height * 0.36;
          const scored = hits.map((e) => {
            const rect = e.boundingClientRect;
            const mid = rect.top + rect.height / 2;
            const dist = Math.abs(mid - focusY);
            return {
              target: e.target as HTMLElement,
              intersectionRatio: e.intersectionRatio,
              score: e.intersectionRatio * 1.12 - (dist / Math.max(rr.height, 1)) * 0.42,
            };
          });
          scored.sort((a, b) => b.score - a.score);
          const best = scored[0];
          if (!best || best.intersectionRatio < MIN_WINNER_RATIO) return;

          const winner = best.target;
          const parsed = parseDocFeedSectionDomId(winner.id);
          if (!parsed) return;
          const { topicId, itemId } = parsed;

          const { start: frStart, end: frEnd } = feedRangeRef.current;
          const topicInMountedRange = TOPICS.slice(frStart, frEnd + 1).some((t) => t.id === topicId);
          if (!topicInMountedRange) return;

          const rt = routeTopicIdRef.current;
          if (frStart === frEnd && rt && topicId !== rt) return;

          const winnerOrd = feedOrdinalByDomId.get(winner.id);
          const sl = slugRef.current;
          if (rt && sl) {
            const curOrd = feedOrdinalByDomId.get(docFeedSectionDomId(rt, sl));
            if (
              winnerOrd !== undefined &&
              curOrd !== undefined &&
              Math.abs(winnerOrd - curOrd) > MAX_ORDINAL_JUMP &&
              best.intersectionRatio < 0.38
            ) {
              return;
            }
          }

          setFeedOverlay({ topicId, slug: itemId, pathRevision: pathRevisionRef.current });
          setInViewFeedKey(`${topicId}/${itemId}`);
          scheduleNav(topicId, itemId);
        },
        {
          root,
          threshold: [0.12, 0.28, 0.52],
          rootMargin: '-18% 0px -42% 0px',
        }
      );

      feedRows.forEach((row) => {
        const section = document.getElementById(docFeedSectionDomId(row.topic.id, row.item.id));
        if (section) obs!.observe(section);
      });
    };

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(start);
    });

    return () => {
      cancelled = true;
      if (navRafId) cancelAnimationFrame(navRafId);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      obs?.disconnect();
    };
  }, [
    feedRows,
    feedOrdinalByDomId,
    navigate,
    viewportRef,
    setFeedOverlay,
    pathRevisionRef,
    feedRangeRef,
    routeTopicIdRef,
    slugRef,
    inViewSyncSuppressedUntilRef,
    skipSlugScrollIntoViewRef,
    setInViewFeedKey,
  ]);
}
