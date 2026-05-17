import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useDocsFeedScrollTop(
  viewportRef: RefObject<HTMLDivElement | null> | undefined,
  categoryId: string | undefined,
  feedRowCount: number
) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const vp = viewportRef?.current;
    if (!vp) return;
    let ticking = false;
    let lastShown = vp.scrollTop > 360;
    queueMicrotask(() => {
      setShowScrollTop(lastShown);
    });

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const nextShown = vp.scrollTop > 360;
        if (nextShown !== lastShown) {
          lastShown = nextShown;
          setShowScrollTop(nextShown);
        }
      });
    };

    vp.addEventListener('scroll', onScroll, { passive: true });
    return () => vp.removeEventListener('scroll', onScroll);
  }, [viewportRef, categoryId, feedRowCount]);

  const scrollFeedToTop = () => {
    viewportRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { showScrollTop, scrollFeedToTop };
}
