import { useLocation } from 'react-router-dom';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';
import { useDocsPageContent } from './useDocsPageContent';
import { useDocsFeedRange } from './useDocsFeedRange';
import { useDocsFeedDerived } from './useDocsFeedDerived';
import { useDocsTopicBrowser } from './useDocsTopicBrowser';
import { useDocsFeedScrollTop } from './useDocsFeedScrollTop';
import { useDocsFeedRouteSync } from './useDocsFeedRouteSync';
import { useDocsFeedScrollRestore } from './useDocsFeedScrollRestore';
import { useDocsFeedInViewObserver } from './useDocsFeedInViewObserver';
import { useDocsFeedPrefetch } from './useDocsFeedPrefetch';
import { useDocsFeedNavigation } from './useDocsFeedNavigation';

export function useDocumentationPage() {
  const { categoryId, slug } = useDocsRouteParams();
  const location = useLocation();

  const { topic, content, activeStream } = useDocsPageContent(categoryId, slug);

  const feedRangeState = useDocsFeedRange(categoryId, location);
  const {
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
    viewportRef: scrollViewportRef,
  } = feedRangeState;

  const viewportRef = scrollViewportRef ?? undefined;

  const derived = useDocsFeedDerived(feedRange);
  const {
    catalogBounds,
    feedRows,
    docsTopicBrowserSections,
    chainHasMoreBelow,
    chainHasMoreAbove,
    feedOrdinalByDomId,
  } = derived;

  const topicBrowser = useDocsTopicBrowser(categoryId, docsTopicBrowserSections);
  const { showScrollTop, scrollFeedToTop } = useDocsFeedScrollTop(viewportRef, categoryId, feedRows.length);

  const { inViewFeedKey, setInViewFeedKey } = useDocsFeedRouteSync(
    categoryId,
    slug,
    feedRows,
    viewportRef,
    skipSlugScrollIntoViewRef,
    slugRef
  );

  useDocsFeedScrollRestore(
    feedRows,
    viewportRef,
    prependSnapRef,
    prependPreserveOnlyRef,
    pendingScrollWasPrependRef,
    pendingScrollToDomIdRef,
    feedRowsCountBeforeMutationRef,
    skipSlugScrollIntoViewRef
  );

  useDocsFeedInViewObserver({
    feedRows,
    feedOrdinalByDomId,
    viewportRef,
    feedRangeRef,
    routeTopicIdRef,
    slugRef,
    inViewSyncSuppressedUntilRef,
    skipSlugScrollIntoViewRef,
    setInViewFeedKey,
  });

  useDocsFeedPrefetch({
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
  });

  const { feedNav, navigateToFeedItem } = useDocsFeedNavigation({
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
  });

  return {
    categoryId,
    slug,
    topic,
    content,
    activeStream,
    feedRows,
    feedNav,
    navigateToFeedItem,
    inViewFeedKey,
    chainHasMoreBelow,
    chainHasMoreAbove,
    prependSentinelRef,
    appendSentinelRef,
    viewportRef: scrollViewportRef,
    docsTopicBrowserSections,
    topicBrowser,
    showScrollTop,
    scrollFeedToTop,
  };
}
