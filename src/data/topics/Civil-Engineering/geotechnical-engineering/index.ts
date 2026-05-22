import type { TopicItem } from '@/data/topics';
import bearing_capacity from './bearing-capacity.md?raw';
import earth_pressure from './earth-pressure.md?raw';
import foundation_types from './foundation-types.md?raw';
import introduction from './introduction.md?raw';
import soil_classification from './soil-classification.md?raw';

export const geotechnicalEngineeringTopics: TopicItem[] = [
  { id: 'geotechnical-engineering-bearing-capacity', title: "Bearing Capacity", content: bearing_capacity },
  { id: 'geotechnical-engineering-earth-pressure', title: "Earth Pressure", content: earth_pressure },
  { id: 'geotechnical-engineering-foundation-types', title: "Foundation Types", content: foundation_types },
  { id: 'geotechnical-engineering-introduction', title: "📖 Introduction", content: introduction },
  { id: 'geotechnical-engineering-soil-classification', title: "Soil Classification", content: soil_classification },
];
