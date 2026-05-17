import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { TOPICS, type TopicItem } from '@/data/topics';
import { DOCS_NAV_PRESERVE_SCROLL, DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { useDocsFeedSync } from '@/context/docsFeedSyncContext';
import { flattenTopicItems, docFeedSectionDomId } from '../utils';
import type { DocsFeedNavHandlers, FeedRow, NavigateToFeedItemOptions } from '../types';
import { normalizeNavigateToFeedItemOptions } from '../types';
import type { FeedRange } from './types';

type NavigationParams = {
  feedRange: FeedRange;
  setFeedRange: Dispatch<SetStateAction<FeedRange>>;
  feedRows: FeedRow[];
  catalogBounds: { start: number; end: number };
  viewportRef: RefObject<HTMLDivElement | null> | undefined;
  prependSnapRef: RefObject<{ sh: number; st: number } | null>;
  prependPreserveOnlyRef: RefObject<boolean>;
  pendingScrollWasPrependRef: RefObject<boolean>;
  pendingScrollToDomIdRef: RefObject<string | null>;
  feedRowsCountBeforeMutationRef: RefObject<number>;
  inViewSyncSuppressedUntilRef: RefObject<number>;
  skipSlugScrollIntoViewRef: RefObject<boolean>;
  setInViewFeedKey: (key: string) => void;
};

export function useDocsFeedNavigation({
  feedRange,
  setFeedRange,
  feedRows,
  catalogBounds,
  viewportRef,
  prependSnapRef,
  prependPreserveOnlyRef,
  pendingScrollWasPrependRef,
  pendingScrollToDomIdRef,
  feedRowsCountBeforeMutationRef,
  inViewSyncSuppressedUntilRef,
  skipSlugScrollIntoViewRef,
  setInViewFeedKey,
}: NavigationParams) {
  const navigate = useNavigate();
  const { setFeedOverlay, pathRevisionRef } = useDocsFeedSync();

  const feedNav = useMemo<DocsFeedNavHandlers>(
    () => ({
      goToNextFrom: (i) => {
        if (!viewportRef?.current) return;
        const nextRow = feedRows[i + 1];
        if (nextRow) {
          skipSlugScrollIntoViewRef.current = true;
          setFeedOverlay({
            topicId: nextRow.topic.id,
            slug: nextRow.item.id,
            pathRevision: pathRevisionRef.current,
          });
          document
            .getElementById(docFeedSectionDomId(nextRow.topic.id, nextRow.item.id))
            ?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${nextRow.topic.id}/${nextRow.item.id}`, {
            replace: true,
            state: DOCS_NAV_PRESERVE_SCROLL,
          });
          setInViewFeedKey(`${nextRow.topic.id}/${nextRow.item.id}`);
          return;
        }
        const nextTopicIx = feedRange.end + 1;
        if (nextTopicIx > catalogBounds.end) return;
        const nextTopic = TOPICS[nextTopicIx];
        const first = flattenTopicItems(nextTopic.items)[0];
        if (!first) return;
        pendingScrollWasPrependRef.current = false;
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        pendingScrollToDomIdRef.current = docFeedSectionDomId(nextTopic.id, first.id);
        setFeedRange((r) => ({ ...r, end: r.end + 1 }));
        skipSlugScrollIntoViewRef.current = true;
        setFeedOverlay({ topicId: nextTopic.id, slug: first.id, pathRevision: pathRevisionRef.current });
        navigate(`/docs/${nextTopic.id}/${first.id}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
        setInViewFeedKey(`${nextTopic.id}/${first.id}`);
      },
      goToPrevFrom: (i) => {
        if (!viewportRef?.current) return;
        if (i > 0) {
          const prevRow = feedRows[i - 1];
          skipSlugScrollIntoViewRef.current = true;
          setFeedOverlay({
            topicId: prevRow.topic.id,
            slug: prevRow.item.id,
            pathRevision: pathRevisionRef.current,
          });
          document
            .getElementById(docFeedSectionDomId(prevRow.topic.id, prevRow.item.id))
            ?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${prevRow.topic.id}/${prevRow.item.id}`, {
            replace: true,
            state: DOCS_NAV_PRESERVE_SCROLL,
          });
          setInViewFeedKey(`${prevRow.topic.id}/${prevRow.item.id}`);
          return;
        }
        if (feedRange.start <= catalogBounds.start) return;
        const prevTopicIx = feedRange.start - 1;
        const prevTopic = TOPICS[prevTopicIx];
        const prevItems = flattenTopicItems(prevTopic.items);
        const lastItem = prevItems[prevItems.length - 1];
        if (!lastItem) return;
        const vp = viewportRef.current;
        if (vp) prependSnapRef.current = { sh: vp.scrollHeight, st: vp.scrollTop };
        pendingScrollWasPrependRef.current = true;
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        pendingScrollToDomIdRef.current = docFeedSectionDomId(prevTopic.id, lastItem.id);
        setFeedRange((r) => ({ ...r, start: prevTopicIx }));
        skipSlugScrollIntoViewRef.current = true;
        setFeedOverlay({ topicId: prevTopic.id, slug: lastItem.id, pathRevision: pathRevisionRef.current });
        navigate(`/docs/${prevTopic.id}/${lastItem.id}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
        setInViewFeedKey(`${prevTopic.id}/${lastItem.id}`);
      },
    }),
    [
      feedRange.end,
      feedRange.start,
      feedRows,
      navigate,
      viewportRef,
      catalogBounds.end,
      catalogBounds.start,
      setFeedOverlay,
      pathRevisionRef,
      setFeedRange,
      setInViewFeedKey,
      skipSlugScrollIntoViewRef,
      pendingScrollWasPrependRef,
      pendingScrollToDomIdRef,
      feedRowsCountBeforeMutationRef,
      prependSnapRef,
    ]
  );

  const navigateToFeedItem = useCallback(
    (item: TopicItem, itemTopicId: string, third?: ScrollBehavior | NavigateToFeedItemOptions) => {
      if (!viewportRef?.current) return;

      const { scrollBehavior = 'auto', scrollToTopicStart = false } = normalizeNavigateToFeedItemOptions(third);
      const newIdx = TOPICS.findIndex((t) => t.id === itemTopicId);
      if (newIdx >= 0) {
        prependSnapRef.current = null;
        prependPreserveOnlyRef.current = false;
        pendingScrollToDomIdRef.current = null;
      }

      inViewSyncSuppressedUntilRef.current = Date.now() + (scrollToTopicStart ? 1800 : 1000);
      skipSlugScrollIntoViewRef.current = true;

      if (!scrollToTopicStart) {
        document
          .getElementById(docFeedSectionDomId(itemTopicId, item.id))
          ?.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      }

      navigate(`/docs/${itemTopicId}/${item.id}`, { replace: true, state: DOCS_NAV_RESET_SCROLL });
      setInViewFeedKey(`${itemTopicId}/${item.id}`);
    },
    [
      navigate,
      viewportRef,
      prependSnapRef,
      prependPreserveOnlyRef,
      pendingScrollToDomIdRef,
      inViewSyncSuppressedUntilRef,
      skipSlugScrollIntoViewRef,
      setInViewFeedKey,
    ]
  );

  return { feedNav, navigateToFeedItem };
}
