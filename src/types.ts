import type { TopicItem } from './topics';

export interface SearchResult extends TopicItem {
  category: string;
  categoryId: string;
}
