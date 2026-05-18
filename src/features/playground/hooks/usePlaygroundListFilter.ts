import { useMemo, useState } from 'react';
import { getPlaygrounds } from '../constants';

export function usePlaygroundListFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const playgrounds = useMemo(() => getPlaygrounds(), []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return playgrounds;
    return playgrounds.filter(
      (p) =>
        p.label.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery, playgrounds]);

  const availableCount = playgrounds.filter((p) => p.available).length;
  const comingSoonCount = playgrounds.length - availableCount;

  return {
    playgrounds: filtered,
    searchQuery,
    setSearchQuery,
    hasSearch: searchQuery.trim().length > 0,
    clearSearch: () => setSearchQuery(''),
    totalCount: playgrounds.length,
    availableCount,
    comingSoonCount,
  };
}
