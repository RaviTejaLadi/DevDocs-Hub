import type { TopicItem } from '@/data/topics';
import devopsIntroduction from './introduction.mdx?raw';
import devopsLinuxForDevops from './linux-for-devops.mdx?raw';
import devopsInfrastructureAsCode from './infrastructure-as-code.mdx?raw';
import devopsKubernetes from './kubernetes.mdx?raw';
import devopsCiCd from './ci-cd.mdx?raw';
import devopsMonitoring from './monitoring.mdx?raw';

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
