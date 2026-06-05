import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { useDocsPageContent } from './useDocsPageContent';
import { useDocsTopicBrowser } from './useDocsTopicBrowser';
import { useDocsTopicBrowserSections } from './useDocsTopicBrowserSections';
import { flattenTopicItems } from '../utils';

export function useDocumentationPage() {
  const { categoryId, slug } = useDocsRouteParams();
  const { topic, content, activeStream } = useDocsPageContent(categoryId, slug);
  const docsTopicBrowserSections = useDocsTopicBrowserSections();
  const topicBrowser = useDocsTopicBrowser(categoryId, docsTopicBrowserSections);
  const viewportRef = useScrollViewport();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const articleItems = useMemo(() => (topic ? flattenTopicItems(topic.items) : []), [topic]);
  const articleIndex = useMemo(
    () => (slug ? articleItems.findIndex((item) => item.id === slug) : -1),
    [articleItems, slug]
  );
  const prevArticle = articleIndex > 0 ? articleItems[articleIndex - 1] : null;
  const nextArticle =
    articleIndex >= 0 && articleIndex < articleItems.length - 1 ? articleItems[articleIndex + 1] : null;

  useEffect(() => {
    const el = viewportRef?.current;
    if (!el) return;

    const onScroll = () => setShowScrollTop(el.scrollTop > 480);
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [viewportRef, categoryId, slug]);

  const scrollToTop = useCallback(() => {
    const el = viewportRef?.current;
    if (el) el.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [viewportRef]);

  return {
    categoryId,
    slug,
    topic,
    content,
    activeStream,
    docsTopicBrowserSections,
    topicBrowser,
    prevArticle,
    nextArticle,
    showScrollTop,
    scrollToTop,
  };
}
