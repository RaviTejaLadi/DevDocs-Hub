import type { TopicItem } from '@/data/topics';
import frontendRoadmap from './frontend-roadmap.mdx?raw';
import backendRoadmap from './backend-roadmap.mdx?raw';
import fullstackRoadmap from './fullstack-roadmap.mdx?raw';
import dsaStudyPlan from './dsa-study-plan.mdx?raw';
import devopsRoadmap from './devops-roadmap.mdx?raw';
import cloudRoadmap from './cloud-roadmap.mdx?raw';
import systemDesignStudyPlan from './system-design-study-plan.mdx?raw';

export const learningResourcesTopics: TopicItem[] = [
  { id: 'resources-frontend-roadmap', title: '🎨 Frontend Roadmap', content: frontendRoadmap },
  { id: 'resources-backend-roadmap', title: '⚙️ Backend Roadmap', content: backendRoadmap },
  { id: 'resources-fullstack-roadmap', title: '🔗 Full Stack Roadmap', content: fullstackRoadmap },
  { id: 'resources-dsa-study-plan', title: '🧠 DSA Study Plan', content: dsaStudyPlan },
  { id: 'resources-devops-roadmap', title: '🚀 DevOps Roadmap', content: devopsRoadmap },
  { id: 'resources-cloud-roadmap', title: '☁️ Cloud Roadmap', content: cloudRoadmap },
  { id: 'resources-system-design-study-plan', title: '🏗️ System Design Study Plan', content: systemDesignStudyPlan },
];
