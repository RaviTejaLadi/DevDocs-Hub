import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS, getStreamByTopicId } from '@/data/topics';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { findTopicItem } from '../utils';

export function useDocsPageContent(categoryId: string | undefined, slug: string | undefined) {
  const navigate = useNavigate();
  const topic = useMemo(() => TOPICS.find((t) => t.id === categoryId), [categoryId]);
  const content = useMemo(() => {
    if (!topic || !slug) return undefined;
    return findTopicItem(topic.items, slug);
  }, [topic, slug]);
  const activeStream = useMemo(() => (categoryId ? getStreamByTopicId(categoryId) : undefined), [categoryId]);

  useEffect(() => {
    if (content && !content.content && content.items?.[0]) {
      navigate(`/docs/${categoryId}/${content.items[0].id}`, { replace: true, state: DOCS_NAV_RESET_SCROLL });
    }
  }, [content, categoryId, navigate]);

  return { topic, content, activeStream };
}
