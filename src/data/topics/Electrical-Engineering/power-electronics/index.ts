import type { TopicItem } from '@/data/topics';
import choppers from './choppers.mdx?raw';
import drives from './drives.mdx?raw';
import introduction from './introduction.mdx?raw';
import inverters from './inverters.mdx?raw';
import rectifiers from './rectifiers.mdx?raw';

export const powerElectronicsTopics: TopicItem[] = [
  { id: 'power-electronics-choppers', title: 'Choppers', content: choppers },
  { id: 'power-electronics-drives', title: 'Drives', content: drives },
  { id: 'power-electronics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'power-electronics-inverters', title: 'Inverters', content: inverters },
  { id: 'power-electronics-rectifiers', title: 'Rectifiers', content: rectifiers },
];
