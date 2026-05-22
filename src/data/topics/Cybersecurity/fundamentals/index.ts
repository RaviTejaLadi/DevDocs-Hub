import type { TopicItem } from '@/data/topics';
import cia_triad from './cia-triad.md?raw';
import introduction from './introduction.md?raw';
import risk_management from './risk-management.md?raw';
import security_policies from './security-policies.md?raw';
import threat_landscape from './threat-landscape.md?raw';

export const fundamentalsTopics: TopicItem[] = [
  { id: 'fundamentals-cia-triad', title: "Cia Triad", content: cia_triad },
  { id: 'fundamentals-introduction', title: "📖 Introduction", content: introduction },
  { id: 'fundamentals-risk-management', title: "Risk Management", content: risk_management },
  { id: 'fundamentals-security-policies', title: "Security Policies", content: security_policies },
  { id: 'fundamentals-threat-landscape', title: "Threat Landscape", content: threat_landscape },
];
