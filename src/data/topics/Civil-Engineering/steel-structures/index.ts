import type { TopicItem } from '@/data/topics';
import connections from './connections.mdx?raw';
import design_of_members from './design-of-members.mdx?raw';
import introduction from './introduction.mdx?raw';
import steel_properties from './steel-properties.mdx?raw';

export const steelStructuresTopics: TopicItem[] = [
  { id: 'steel-structures-connections', title: 'Connections', content: connections },
  { id: 'steel-structures-design-of-members', title: 'Design Of Members', content: design_of_members },
  { id: 'steel-structures-introduction', title: '📖 Introduction', content: introduction },
  { id: 'steel-structures-steel-properties', title: 'Steel Properties', content: steel_properties },
];
