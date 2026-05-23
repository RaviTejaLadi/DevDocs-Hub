import type { TopicItem } from '@/data/topics';
import choppers from './choppers.md?raw';
import drives from './drives.md?raw';
import introduction from './introduction.md?raw';
import inverters from './inverters.md?raw';
import rectifiers from './rectifiers.md?raw';

export const powerElectronicsTopics: TopicItem[] = [
  { id: 'power-electronics-choppers', title: 'Choppers', content: choppers },
  { id: 'power-electronics-drives', title: 'Drives', content: drives },
  { id: 'power-electronics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'power-electronics-inverters', title: 'Inverters', content: inverters },
  { id: 'power-electronics-rectifiers', title: 'Rectifiers', content: rectifiers },
];
