import type { TopicItem } from '@/data/topics';
import ci_cd from './ci-cd.md?raw';
import infrastructure_as_code from './infrastructure-as-code.md?raw';
import introduction from './introduction.md?raw';
import kubernetes from './kubernetes.md?raw';
import linux_for_devops from './linux-for-devops.md?raw';
import monitoring from './monitoring.md?raw';

export const devopsTopics: TopicItem[] = [
  { id: 'devops-ci-cd', title: 'Ci Cd', content: ci_cd },
  { id: 'devops-infrastructure-as-code', title: 'Infrastructure As Code', content: infrastructure_as_code },
  { id: 'devops-introduction', title: '📖 Introduction', content: introduction },
  { id: 'devops-kubernetes', title: 'Kubernetes', content: kubernetes },
  { id: 'devops-linux-for-devops', title: 'Linux For Devops', content: linux_for_devops },
  { id: 'devops-monitoring', title: 'Monitoring', content: monitoring },
];
