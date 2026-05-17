import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { EAGER_MOUNT_COUNT, LAZY_ROOT_MARGIN } from '../constants';

export function useDocsFeedSectionMount(
  idx: number,
  isCurrentRoute: boolean,
  viewportRef: RefObject<HTMLDivElement | null>
) {
  const sectionRef = useRef<HTMLElement>(null);
  const [unlockedByIntersection, setUnlockedByIntersection] = useState(false);
  const [contentMounted, setContentMounted] = useState(() => idx < EAGER_MOUNT_COUNT || isCurrentRoute);

  useLayoutEffect(() => {
    setContentMounted((prev) => prev || idx < EAGER_MOUNT_COUNT || isCurrentRoute || unlockedByIntersection);
  }, [idx, isCurrentRoute, unlockedByIntersection]);

  useEffect(() => {
    if (contentMounted) return;

    let io: IntersectionObserver | null = null;
    let raf = 0;
    let cancelled = false;

    let attempts = 0;
    const maxAttempts = 300;

    const attach = () => {
      if (cancelled) return;
      const el = sectionRef.current;
      const root = viewportRef.current;
      if (!el || !root) {
        if (attempts < maxAttempts) {
          attempts += 1;
          raf = requestAnimationFrame(attach);
        }
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setUnlockedByIntersection(true);
              io?.disconnect();
              io = null;
              return;
            }
          }
        },
        { root, rootMargin: LAZY_ROOT_MARGIN, threshold: 0 }
      );
      io.observe(el);
    };

    attach();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [contentMounted, viewportRef]);

  return { sectionRef, contentMounted };
}
