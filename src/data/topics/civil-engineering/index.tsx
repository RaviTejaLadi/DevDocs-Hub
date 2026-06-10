import type { Topic } from '@/data/topics';
import { Building2, Layers, HardHat, Mountain, Ruler, Truck } from 'lucide-react';
import { structuralEngineeringTopics } from './structural-engineering';
import { concreteTechnologyTopics } from './concrete-technology';
import { steelStructuresTopics } from './steel-structures';
import { geotechnicalEngineeringTopics } from './geotechnical-engineering';
import { surveyingTopics } from './surveying';
import { transportationTopics } from './transportation';

const CATEGORY = 'civil-engineering';

export const civilEngineeringTopics: Topic[] = [
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    description: 'Beams, trusses, slabs, columns, and load analysis.',
    icon: <Building2 className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: structuralEngineeringTopics,
  },
  {
    id: 'concrete-technology',
    title: 'Concrete Technology',
    description: 'Mix design, reinforced and prestressed concrete.',
    icon: <Layers className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: concreteTechnologyTopics,
  },
  {
    id: 'steel-structures',
    title: 'Steel Structures',
    description: 'Steel properties, connections, and member design.',
    icon: <HardHat className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: steelStructuresTopics,
  },
  {
    id: 'geotechnical-engineering',
    title: 'Geotechnical Engineering',
    description: 'Soil mechanics, foundations, and earth pressure.',
    icon: <Mountain className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: geotechnicalEngineeringTopics,
  },
  {
    id: 'surveying',
    title: 'Surveying',
    description: 'Chain, compass, levelling, and theodolite surveying.',
    icon: <Ruler className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: surveyingTopics,
  },
  {
    id: 'transportation',
    title: 'Transportation Engineering',
    description: 'Highway, traffic, and railway engineering.',
    icon: <Truck className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: transportationTopics,
  },
];
