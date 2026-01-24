import { AWS, AZURE } from '@/assets/technologies';
import awsIntro from './AWS/intro.md?raw';
import awsTheoryQuestions from './AWS/theory-questions.md?raw';

import azureIntro from './Azure/intro.md?raw';
import azureTheoryQuestions from './Azure/theory-questions.md?raw';

export const cloudServicesData = [
  {
    id: 'aws',
    title: 'AWS',
    Icon: AWS,
    documents: [
      {
        id: 'aws-intro',
        title: '📚 Introduction',
        content: awsIntro,
      },
      {
        id: 'aws-theory-questions',
        title: '❓ Theory Questions',
        content: awsTheoryQuestions,
      },
    ],
  },
  {
    id: 'azure',
    title: 'Azure',
    Icon: AZURE,
    documents: [
      {
        id: 'azure-intro',
        title: '📚 Introduction',
        content: azureIntro,
      },
      {
        id: 'azure-theory-questions',
        title: '❓ Theory Questions',
        content: azureTheoryQuestions,
      },
    ],
  },
];
