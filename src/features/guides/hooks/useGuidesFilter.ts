import { useMemo, useState } from 'react';
import { GUIDES, type GuideType } from '@/data/guides';

export function useGuidesFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<GuideType | 'all'>('all');

  const filteredGuides = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GUIDES.filter((guide) => {
      const matchesType = activeType === 'all' || guide.type === activeType;
      const matchesQuery =
        !query ||
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query) ||
        guide.publishedMonth.toLowerCase().includes(query) ||
        guide.type.includes(query);

      return matchesType && matchesQuery;
    });
  }, [searchQuery, activeType]);

  return {
    searchQuery,
    setSearchQuery,
    activeType,
    setActiveType,
    filteredGuides,
    totalGuides: GUIDES.length,
    filteredCount: filteredGuides.length,
    hasSearch: Boolean(searchQuery.trim()) || activeType !== 'all',
  };
}
