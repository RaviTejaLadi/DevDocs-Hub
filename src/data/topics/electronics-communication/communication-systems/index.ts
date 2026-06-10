import type { TopicItem } from '@/data/topics';
import amplitude_modulation from './amplitude-modulation.mdx?raw';
import digital_communication from './digital-communication.mdx?raw';
import frequency_modulation from './frequency-modulation.mdx?raw';
import introduction from './introduction.mdx?raw';
import noise from './noise.mdx?raw';

export const communicationSystemsTopics: TopicItem[] = [
  { id: 'communication-systems-amplitude-modulation', title: 'Amplitude Modulation', content: amplitude_modulation },
  { id: 'communication-systems-digital-communication', title: 'Digital Communication', content: digital_communication },
  { id: 'communication-systems-frequency-modulation', title: 'Frequency Modulation', content: frequency_modulation },
  { id: 'communication-systems-introduction', title: '📖 Introduction', content: introduction },
  { id: 'communication-systems-noise', title: 'Noise', content: noise },
];
