import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { useDocsFeedSync } from '@/context/docsFeedSyncContext';
import { docFeedSectionDomId } from '../utils';
import type { FeedRow } from '../types';

export function useDocsFeedRouteSync(
  categoryId: string | undefined,
  slug: string | undefined,
  feedRows: FeedRow[],
  viewportRef: RefObject<HTMLDivElement | null> | undefined,
  skipSlugScrollIntoViewRef: RefObject<boolean>,
  slugRef: RefObject<string | undefined>
) {
  const { setFeedOverlay, pathRevisionRef } = useDocsFeedSync();
  const [inViewFeedKey, setInViewFeedKey] = useState(() => (categoryId && slug ? `${categoryId}/${slug}` : ''));
  const prevCatSlugForScrollSyncRef = useRef<{ c?: string; s?: string }>({});

  useLayoutEffect(() => {
    slugRef.current = slug;
  });

  useLayoutEffect(() => {
    if (!categoryId || !slug) return;
    setFeedOverlay({ topicId: categoryId, slug, pathRevision: pathRevisionRef.current });
  }, [categoryId, slug, setFeedOverlay, pathRevisionRef]);

  useEffect(() => {
    if (!categoryId || !slug) return;
    const id = requestAnimationFrame(() => {
      setInViewFeedKey(`${categoryId}/${slug}`);
    });
    return () => cancelAnimationFrame(id);
  }, [categoryId, slug]);

  /** Scroll viewport to the route’s card when the *target doc* changes within the same topic. */
  useEffect(() => {
    if (!slug || !categoryId || !viewportRef?.current) return;

    if (skipSlugScrollIntoViewRef.current) {
      skipSlugScrollIntoViewRef.current = false;
      prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };
      return;
    }

    const prev = prevCatSlugForScrollSyncRef.current;
    if (prev.c !== categoryId) {
      prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };
      return;
    }

    const routeUnchanged = prev.s === slug;
    if (routeUnchanged) {
      return;
    }

    const el = document.getElementById(docFeedSectionDomId(categoryId, slug));
    if (!el) {
      return;
    }

    prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };

    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [slug, categoryId, feedRows.length, viewportRef, skipSlugScrollIntoViewRef]);

  return { inViewFeedKey, setInViewFeedKey };
}
