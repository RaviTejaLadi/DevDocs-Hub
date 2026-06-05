import { useCallback, useEffect, useState } from 'react';
import type { DocsTopicBrowserSection } from '../components/DocsTopicBrowserSheet';

function resolveStreamForTopic(sections: DocsTopicBrowserSection[], topicId: string | undefined) {
  if (!topicId) return sections[0]?.stream.id ?? '';
  for (const { stream, categories } of sections) {
    for (const cat of categories) {
      if (cat.topics.some((t) => t.id === topicId)) return stream.id;
    }
  }
  return sections[0]?.stream.id ?? '';
}

function buildExpandedCategories(sections: DocsTopicBrowserSection[], streamId: string) {
  const expanded: Record<string, boolean> = {};
  const section = sections.find((s) => s.stream.id === streamId);
  if (!section) return expanded;

  for (const cat of section.categories) {
    expanded[`${streamId}::${cat.key}`] = true;
  }
  return expanded;
}

export function useDocsTopicBrowser(
  activeTopicId: string | undefined,
  sections: DocsTopicBrowserSection[]
) {
  const [topicBrowserOpen, setTopicBrowserOpen] = useState(false);
  const [activeStreamId, setActiveStreamId] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const root = document.documentElement;
    if (topicBrowserOpen) root.setAttribute('data-docs-topic-browser', 'open');
    else root.removeAttribute('data-docs-topic-browser');
    return () => root.removeAttribute('data-docs-topic-browser');
  }, [topicBrowserOpen]);

  const resetBrowserState = useCallback(() => {
    const streamId = resolveStreamForTopic(sections, activeTopicId);
    setActiveStreamId(streamId);
    setOpenCategories(buildExpandedCategories(sections, streamId));
  }, [activeTopicId, sections]);

  const onTopicBrowserOpenChange = useCallback(
    (open: boolean) => {
      if (open) resetBrowserState();
      setTopicBrowserOpen(open);
    },
    [resetBrowserState]
  );

  const setAllCategoriesInStream = useCallback(
    (streamId: string, open: boolean) => {
      const section = sections.find((s) => s.stream.id === streamId);
      if (!section) return;
      setOpenCategories((prev) => {
        const next = { ...prev };
        for (const cat of section.categories) {
          next[`${streamId}::${cat.key}`] = open;
        }
        return next;
      });
    },
    [sections]
  );

  const selectActiveStream = useCallback(
    (streamId: string) => {
      setActiveStreamId(streamId);
      setOpenCategories(buildExpandedCategories(sections, streamId));
    },
    [sections]
  );

  return {
    topicBrowserOpen,
    activeStreamId,
    selectActiveStream,
    openCategories,
    setOpenCategories,
    setAllCategoriesInStream,
    onTopicBrowserOpenChange,
    setTopicBrowserOpen,
  };
}
