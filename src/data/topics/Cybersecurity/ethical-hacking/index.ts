import type { TopicItem } from '@/data/topics';
import introduction from './introduction.md?raw';
import penetration_testing from './penetration-testing.md?raw';
import reconnaissance from './reconnaissance.md?raw';
import vulnerability_assessment from './vulnerability-assessment.md?raw';
import web_app_pentesting from './web-app-pentesting.md?raw';

export const ethicalHackingTopics: TopicItem[] = [
  { id: 'ethical-hacking-introduction', title: '📖 Introduction', content: introduction },
  { id: 'ethical-hacking-penetration-testing', title: 'Penetration Testing', content: penetration_testing },
  { id: 'ethical-hacking-reconnaissance', title: 'Reconnaissance', content: reconnaissance },
  {
    id: 'ethical-hacking-vulnerability-assessment',
    title: 'Vulnerability Assessment',
    content: vulnerability_assessment,
  },
  { id: 'ethical-hacking-web-app-pentesting', title: 'Web App Pentesting', content: web_app_pentesting },
];
