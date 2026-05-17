import type { TopicItem } from '@/data/topics';
import type { ReactNode } from 'react';

export interface SearchResult extends TopicItem {
  category: string;
  categoryId: string;
  icon?: ReactNode;
}
