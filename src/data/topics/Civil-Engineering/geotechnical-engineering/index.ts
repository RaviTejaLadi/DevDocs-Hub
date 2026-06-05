import type { TopicItem } from '@/data/topics';
import bearing_capacity from './bearing-capacity.mdx?raw';
import earth_pressure from './earth-pressure.mdx?raw';
import foundation_types from './foundation-types.mdx?raw';
import introduction from './introduction.mdx?raw';
import soil_classification from './soil-classification.mdx?raw';

export const geotechnicalEngineeringTopics: TopicItem[] = [
  { id: 'geotechnical-engineering-bearing-capacity', title: 'Bearing Capacity', content: bearing_capacity },
  { id: 'geotechnical-engineering-earth-pressure', title: 'Earth Pressure', content: earth_pressure },
  { id: 'geotechnical-engineering-foundation-types', title: 'Foundation Types', content: foundation_types },
  { id: 'geotechnical-engineering-introduction', title: '📖 Introduction', content: introduction },
  { id: 'geotechnical-engineering-soil-classification', title: 'Soil Classification', content: soil_classification },
];
