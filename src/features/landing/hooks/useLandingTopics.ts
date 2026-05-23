import { useMemo, useState } from 'react';
import type { Stream, Topic } from '@/data/topics';
import type { ViewMode } from '../types';

export function useLandingTopics(streams: Stream[] | null) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [activeStreamId, setActiveStreamId] = useState<string>('computer-science');

  const activeStream: Stream | undefined = useMemo(() => {
    if (!streams?.length) return undefined;
    return streams.find((stream) => stream.id === activeStreamId) ?? streams[0];
  }, [streams, activeStreamId]);

  const filteredTopics = useMemo<Topic[]>(() => {
    const topics = activeStream?.topics ?? [];
    if (!searchQuery) return topics;

    const query = searchQuery.toLowerCase();

    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.items.some((item) => item.title.toLowerCase().includes(query))
    );
  }, [activeStream, searchQuery]);

  const totalTopicsInStream = activeStream?.topics.length ?? 0;
  const filteredTopicsCount = filteredTopics.length;
  const hasSearch = Boolean(searchQuery.trim());

  const groupedTopics = useMemo(() => {
    return filteredTopics.reduce<Record<string, Topic[]>>((acc, topic) => {
      if (!acc[topic.category]) acc[topic.category] = [];
      acc[topic.category].push(topic);
      return acc;
    }, {});
  }, [filteredTopics]);

  const toggleSection = (category: string) => {
    setCollapsed((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return {
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    collapsed,
    activeStreamId,
    setActiveStreamId,
    activeStream,
    groupedTopics,
    toggleSection,
    totalTopicsInStream,
    filteredTopicsCount,
    hasSearch,
  };
}
