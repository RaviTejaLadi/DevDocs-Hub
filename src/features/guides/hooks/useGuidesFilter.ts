import { useMemo, useState } from 'react';
import { GUIDE_CATEGORIES, type GuideType } from '@/data/guides';

export function useGuidesFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<GuideType | 'all'>('all');

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GUIDE_CATEGORIES.map((category) => ({
      ...category,
      guides: category.guides.filter((guide) => {
        const matchesType = activeType === 'all' || guide.type === activeType;
        const matchesQuery =
          !query ||
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.publishedMonth.toLowerCase().includes(query) ||
          guide.type.includes(query);

        return matchesType && matchesQuery;
      }),
    }));
  }, [searchQuery, activeType]);

  const totalGuides = GUIDE_CATEGORIES.reduce(
    (sum, cat) => sum + cat.guides.length,
    0
  );

  const filteredCount = filteredCategories.reduce(
    (sum, cat) => sum + cat.guides.length,
    0
  );

  const hasAnyGuides = filteredCategories.some(
    (cat) => cat.guides.length > 0
  );

  return {
    searchQuery,
    setSearchQuery,
    activeType,
    setActiveType,
    filteredCategories,
    totalGuides,
    filteredCount,
    hasSearch: Boolean(searchQuery.trim()) || activeType !== 'all',
    hasAnyGuides,
  };
}
