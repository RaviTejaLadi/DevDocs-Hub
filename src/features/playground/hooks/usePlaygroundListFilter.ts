import { useMemo, useState } from 'react';
import { PLAYGROUNDS } from '../constants';

export function usePlaygroundListFilter() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return PLAYGROUNDS;
    return PLAYGROUNDS.filter(
      (p) =>
        p.label.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const availableCount = PLAYGROUNDS.filter((p) => p.available).length;
  const comingSoonCount = PLAYGROUNDS.length - availableCount;

  return {
    playgrounds: filtered,
    searchQuery,
    setSearchQuery,
    hasSearch: searchQuery.trim().length > 0,
    clearSearch: () => setSearchQuery(''),
    totalCount: PLAYGROUNDS.length,
    availableCount,
    comingSoonCount,
  };
}
