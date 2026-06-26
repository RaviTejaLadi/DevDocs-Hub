import { useEffect, useState } from 'react';
import type { FlowNode } from '../types';
import { buildTopicUrl, fetchTopicHtml } from '../utils/fetch-topic-content';
import { parseTopicHtml, type ParsedTopicContent, type TopicResourceLink } from '../utils/parse-topic-html';
import { buildTopicPath } from '../utils/slugify';

type TopicContentState = {
  isLoading: boolean;
  error: string;
  title: string;
  html: string;
  links: TopicResourceLink[];
  hasContent: boolean;
};

const emptyState: TopicContentState = {
  isLoading: false,
  error: '',
  title: '',
  html: '',
  links: [],
  hasContent: false,
};

type UseTopicContentOptions = {
  roadmapId?: string;
  node: FlowNode | null;
  isOpen: boolean;
  contentBaseUrl?: string;
};

export function useTopicContent(options: UseTopicContentOptions) {
  const { roadmapId, node, isOpen, contentBaseUrl = '' } = options;
  const [state, setState] = useState<TopicContentState>(emptyState);

  useEffect(() => {
    if (!isOpen || !node || !roadmapId) {
      return;
    }

    const label = node.data.label?.trim();
    if (!label) {
      setState({
        ...emptyState,
        error: 'This node has no content.',
      });
      return;
    }

    let cancelled = false;
    const topicPath = buildTopicPath(label, node.id);
    const topicUrl = buildTopicUrl(roadmapId, topicPath, contentBaseUrl);

    setState({
      ...emptyState,
      isLoading: true,
      title: label,
    });

    fetchTopicHtml(topicUrl)
      .then((html) => {
        if (cancelled) {
          return;
        }

        const parsed: ParsedTopicContent = parseTopicHtml(html);

        setState({
          isLoading: false,
          error: '',
          title: parsed.title || label,
          html: parsed.html,
          links: parsed.links,
          hasContent: parsed.hasContent,
        });
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setState({
          ...emptyState,
          title: label,
          error: 'Content not available for this topic yet.',
        });
      });

    return () => {
      cancelled = true;
    };
  }, [roadmapId, node, isOpen, contentBaseUrl]);

  useEffect(() => {
    if (!isOpen) {
      setState(emptyState);
    }
  }, [isOpen]);

  return state;
}
