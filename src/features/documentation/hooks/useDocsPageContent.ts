import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS, getStreamByTopicId } from '@/data/topics';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { findTopicItem } from '../utils';

export function useDocsPageContent(categoryId: string | undefined, slug: string | undefined) {
  const navigate = useNavigate();
  const [resolvedContent, setResolvedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const topic = useMemo(() => TOPICS.find((t) => t.id === categoryId), [categoryId]);
  const contentItem = useMemo(() => {
    if (!topic || !slug) return undefined;
    return findTopicItem(topic.items, slug);
  }, [topic, slug]);

  const activeStream = useMemo(() => (categoryId ? getStreamByTopicId(categoryId) : undefined), [categoryId]);

  useEffect(() => {
    if (!contentItem) {
      setResolvedContent(null);
      return;
    }

    if (contentItem.content) {
      setResolvedContent(typeof contentItem.content === 'string' ? contentItem.content : '');
      return;
    }

    if (contentItem.contentLoader) {
      setIsLoading(true);
      contentItem
        .contentLoader()
        .then((mod) => {
          setResolvedContent(mod.default);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setResolvedContent(null);
    }
  }, [contentItem]);

  useEffect(() => {
    if (contentItem && !contentItem.content && !contentItem.contentLoader && contentItem.items?.[0]) {
      navigate(`/docs/${categoryId}/${contentItem.items[0].id}`, { replace: true, state: DOCS_NAV_RESET_SCROLL });
    }
  }, [contentItem, categoryId, navigate]);

  const content = useMemo(() => {
    if (!contentItem) return undefined;
    return { ...contentItem, content: resolvedContent };
  }, [contentItem, resolvedContent]);

  return { topic, content, activeStream, isLoading };
}
