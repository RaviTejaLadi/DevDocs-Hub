import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import mechanicalProperties from './mechanical-properties.mdx?raw';
import ferrousNonferrous from './ferrous-nonferrous.mdx?raw';
import heatTreatment from './heat-treatment.mdx?raw';

export const materialsScienceTopics: TopicItem[] = [
  { id: 'materials-science-introduction', title: '📖 Introduction to Materials Science', content: introduction },
  {
    id: 'materials-mechanical-properties',
    title: '🔩 Mechanical Properties of Materials',
    content: mechanicalProperties,
  },
  { id: 'materials-ferrous-nonferrous', title: '⚙️ Ferrous & Non-Ferrous Alloys', content: ferrousNonferrous },
  { id: 'materials-heat-treatment', title: '🔥 Heat Treatment', content: heatTreatment },
];
