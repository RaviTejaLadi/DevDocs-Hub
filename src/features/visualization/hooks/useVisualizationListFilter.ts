import { useMemo, useState } from 'react';
import { VISUALIZATION_CATEGORIES } from '../constants/categories';
import { getVisualizations } from '../constants';
import type { VisualizationCategory } from '../types';

export type VisualizationCategoryFilter = 'all' | VisualizationCategory;

export function useVisualizationListFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<VisualizationCategoryFilter>('all');
  const visualizations = useMemo(() => getVisualizations(), []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return visualizations.filter((v) => {
      const matchesCategory = categoryFilter === 'all' || v.category === categoryFilter;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        v.label.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, categoryFilter, visualizations]);

  const groupedByCategory = useMemo(() => {
    const groups = VISUALIZATION_CATEGORIES.map((category) => ({
      category,
      items: filtered.filter((item) => item.category === category.id),
    })).filter((group) => group.items.length > 0);

    return groups;
  }, [filtered]);

  const availableCount = visualizations.filter((v) => v.available).length;
  const comingSoonCount = visualizations.length - availableCount;

  return {
    visualizations: filtered,
    groupedByCategory,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    hasSearch: searchQuery.trim().length > 0,
    clearSearch: () => setSearchQuery(''),
    totalCount: visualizations.length,
    availableCount,
    comingSoonCount,
    categories: VISUALIZATION_CATEGORIES,
  };
}
