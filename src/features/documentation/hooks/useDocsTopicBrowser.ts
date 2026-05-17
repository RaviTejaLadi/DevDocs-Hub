import { useCallback, useEffect, useState } from 'react';
import type { Stream, Topic } from '@/data/topics';

type TopicBrowserSection = {
  stream: Stream;
  categories: { key: string; label: string; topics: Topic[] }[];
};

export function useDocsTopicBrowser(
  categoryId: string | undefined,
  docsTopicBrowserSections: TopicBrowserSection[]
) {
  const [topicBrowserOpen, setTopicBrowserOpen] = useState(false);
  const [topicBrowserOpenCats, setTopicBrowserOpenCats] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const root = document.documentElement;
    if (topicBrowserOpen) root.setAttribute('data-docs-topic-browser', 'open');
    else root.removeAttribute('data-docs-topic-browser');
    return () => root.removeAttribute('data-docs-topic-browser');
  }, [topicBrowserOpen]);

  const buildTopicBrowserExpandedMap = useCallback((): Record<string, boolean> => {
    const initial: Record<string, boolean> = {};
    for (const { stream, categories } of docsTopicBrowserSections) {
      for (const cat of categories) {
        const ck = `${stream.id}::${cat.key}`;
        initial[ck] = Boolean(categoryId && cat.topics.some((t) => t.id === categoryId));
      }
    }
    return initial;
  }, [categoryId, docsTopicBrowserSections]);

  const onTopicBrowserOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        setTopicBrowserOpenCats(buildTopicBrowserExpandedMap());
      }
      setTopicBrowserOpen(open);
    },
    [buildTopicBrowserExpandedMap]
  );

  return {
    topicBrowserOpen,
    topicBrowserOpenCats,
    setTopicBrowserOpenCats,
    onTopicBrowserOpenChange,
    setTopicBrowserOpen,
  };
}
