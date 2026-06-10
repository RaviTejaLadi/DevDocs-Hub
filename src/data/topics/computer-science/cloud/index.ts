import { awsTopics } from './AWS';
import { azureTopics } from './Azure';

export const cloudServicesData = [
  {
    id: 'aws',
    title: 'AWS',
    documents: awsTopics,
  },
  {
    id: 'azure',
    title: 'Azure',
    documents: azureTopics,
  },
];
