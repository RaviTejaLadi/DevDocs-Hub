import type { TopicItem } from '@/data/topics';
import cia_triad from './cia-triad.mdx?raw';
import introduction from './introduction.mdx?raw';
import risk_management from './risk-management.mdx?raw';
import security_policies from './security-policies.mdx?raw';
import threat_landscape from './threat-landscape.mdx?raw';

export const fundamentalsTopics: TopicItem[] = [
  { id: 'fundamentals-cia-triad', title: 'Cia Triad', content: cia_triad },
  { id: 'fundamentals-introduction', title: '📖 Introduction', content: introduction },
  { id: 'fundamentals-risk-management', title: 'Risk Management', content: risk_management },
  { id: 'fundamentals-security-policies', title: 'Security Policies', content: security_policies },
  { id: 'fundamentals-threat-landscape', title: 'Threat Landscape', content: threat_landscape },
];
