import type { TopicItem } from '@/data/topics';
import frontendRoadmap from './frontend-roadmap.md?raw';
import backendRoadmap from './backend-roadmap.md?raw';
import fullstackRoadmap from './fullstack-roadmap.md?raw';
import dsaStudyPlan from './dsa-study-plan.md?raw';
import devopsRoadmap from './devops-roadmap.md?raw';
import cloudRoadmap from './cloud-roadmap.md?raw';
import systemDesignStudyPlan from './system-design-study-plan.md?raw';

export const learningResourcesTopics: TopicItem[] = [
  { id: 'resources-frontend-roadmap', title: '🎨 Frontend Roadmap', content: frontendRoadmap },
  { id: 'resources-backend-roadmap', title: '⚙️ Backend Roadmap', content: backendRoadmap },
  { id: 'resources-fullstack-roadmap', title: '🔗 Full Stack Roadmap', content: fullstackRoadmap },
  { id: 'resources-dsa-study-plan', title: '🧠 DSA Study Plan', content: dsaStudyPlan },
  { id: 'resources-devops-roadmap', title: '🚀 DevOps Roadmap', content: devopsRoadmap },
  { id: 'resources-cloud-roadmap', title: '☁️ Cloud Roadmap', content: cloudRoadmap },
  { id: 'resources-system-design-study-plan', title: '🏗️ System Design Study Plan', content: systemDesignStudyPlan },
];
