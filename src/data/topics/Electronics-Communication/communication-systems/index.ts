import type { TopicItem } from '@/data/topics';
import amplitude_modulation from './amplitude-modulation.md?raw';
import digital_communication from './digital-communication.md?raw';
import frequency_modulation from './frequency-modulation.md?raw';
import introduction from './introduction.md?raw';
import noise from './noise.md?raw';

export const communicationSystemsTopics: TopicItem[] = [
  { id: 'communication-systems-amplitude-modulation', title: "Amplitude Modulation", content: amplitude_modulation },
  { id: 'communication-systems-digital-communication', title: "Digital Communication", content: digital_communication },
  { id: 'communication-systems-frequency-modulation', title: "Frequency Modulation", content: frequency_modulation },
  { id: 'communication-systems-introduction', title: "📖 Introduction", content: introduction },
  { id: 'communication-systems-noise', title: "Noise", content: noise },
];
