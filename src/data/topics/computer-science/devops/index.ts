import type { TopicItem } from '@/data/topics';
import devopsIntroduction from './introduction.md?raw';
import devopsLinuxForDevops from './linux-for-devops.md?raw';
import devopsInfrastructureAsCode from './infrastructure-as-code.md?raw';
import devopsKubernetes from './kubernetes.md?raw';
import devopsCiCd from './ci-cd.md?raw';
import devopsMonitoring from './monitoring.md?raw';

export const devopsTopics: TopicItem[] = [
  {
    id: 'devops-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'devops-introduction', title: '📖 Introduction', content: devopsIntroduction, badge: 'beginner' },
      { id: 'devops-linux-for-devops', title: '🐧 Linux for DevOps', content: devopsLinuxForDevops },
    ],
  },
  {
    id: 'devops-infrastructure',
    title: '🧱 Infrastructure & Orchestration',
    content: '',
    items: [
      {
        id: 'devops-infrastructure-as-code',
        title: '📜 Infrastructure as Code (IaC)',
        content: devopsInfrastructureAsCode,
      },
      { id: 'devops-kubernetes', title: '☸️ Kubernetes', content: devopsKubernetes },
    ],
  },
  {
    id: 'devops-delivery-operations',
    title: '🔄 Delivery & Operations',
    content: '',
    items: [
      { id: 'devops-ci-cd', title: '🔄 CI/CD Pipelines', content: devopsCiCd },
      { id: 'devops-monitoring', title: '📊 Monitoring & Observability', content: devopsMonitoring },
    ],
  },
];
