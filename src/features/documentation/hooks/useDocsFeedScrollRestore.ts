import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import type { FeedRow } from '../types';

export function useDocsFeedScrollRestore(
  feedRows: FeedRow[],
  viewportRef: RefObject<HTMLDivElement | null> | undefined,
  prependSnapRef: RefObject<{ sh: number; st: number } | null>,
  prependPreserveOnlyRef: RefObject<boolean>,
  pendingScrollWasPrependRef: RefObject<boolean>,
  pendingScrollToDomIdRef: RefObject<string | null>,
  feedRowsCountBeforeMutationRef: RefObject<number>,
  skipSlugScrollIntoViewRef: RefObject<boolean>
) {
  /** After prepending or appending feed rows: restore scroll or scroll to pending section. */
  useLayoutEffect(() => {
    const applyPrependScrollPreserve = () => {
      const snap = prependSnapRef.current;
      prependSnapRef.current = null;
      const vp = viewportRef?.current;
      if (vp && snap) {
        vp.scrollTop = snap.st + (vp.scrollHeight - snap.sh);
      }
    };

    const pending = pendingScrollToDomIdRef.current;
    if (pending) {
      if (feedRows.length <= feedRowsCountBeforeMutationRef.current) return;
      pendingScrollToDomIdRef.current = null;
      const wasPrepend = pendingScrollWasPrependRef.current;
      pendingScrollWasPrependRef.current = false;
      if (wasPrepend) applyPrependScrollPreserve();
      const el = document.getElementById(pending);
      if (el) {
        skipSlugScrollIntoViewRef.current = true;
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      return;
    }

    if (prependPreserveOnlyRef.current) {
      prependPreserveOnlyRef.current = false;
      if (feedRows.length <= feedRowsCountBeforeMutationRef.current) return;
      applyPrependScrollPreserve();
    }
  }, [
    feedRows.length,
    feedRows,
    viewportRef,
    prependSnapRef,
    prependPreserveOnlyRef,
    pendingScrollWasPrependRef,
    pendingScrollToDomIdRef,
    feedRowsCountBeforeMutationRef,
    skipSlugScrollIntoViewRef,
  ]);
}
