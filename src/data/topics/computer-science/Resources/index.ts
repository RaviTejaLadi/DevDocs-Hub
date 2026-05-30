import { cheatSheetsGroups } from './cheat-sheets';
import { learningResourcesTopics } from './learning-resources';
// import { interviewPrepTopics } from './interview-prep';
import { developerToolsTopics } from './developer-tools';
// import { practicePlatformsTopics } from './practice-platforms';
// import { booksAndCoursesTopics } from './books-and-courses';
import { documentationReferencesTopics } from './documentation-references';
import { communityAndNetworkingTopics } from './community-and-networking';

export const resourcesData = [
  {
    id: 'cheat-sheets',
    title: 'Cheat Sheets',
    children: cheatSheetsGroups,
  },
  {
    id: 'learning-resources',
    title: 'Learning Resources',
    children: [
      {
        id: 'roadmaps-and-study-plans',
        title: 'Roadmaps & Study Plans',
        documents: learningResourcesTopics,
      },
    ],
  },
  // {
  //   id: 'interview-prep-resources',
  //   title: 'Interview Preparation',
  //   children: [
  //     {
  //       id: 'interview-guides',
  //       title: 'Interview Guides',
  //       documents: interviewPrepTopics,
  //     },
  //   ],
  // },
  {
    id: 'developer-tools-resources',
    title: 'Developer Tools',
    children: [
      {
        id: 'tools-and-workflows',
        title: 'Tools & Workflows',
        documents: developerToolsTopics,
      },
    ],
  },
  // {
  //   id: 'practice-platforms-resources',
  //   title: 'Practice Platforms',
  //   children: [
  //     {
  //       id: 'coding-practice',
  //       title: 'Coding Practice',
  //       documents: practicePlatformsTopics,
  //     },
  //   ],
  // },
  // {
  //   id: 'books-and-courses-resources',
  //   title: 'Books & Courses',
  //   children: [
  //     {
  //       id: 'learning-materials',
  //       title: 'Learning Materials',
  //       documents: booksAndCoursesTopics,
  //     },
  //   ],
  // },
  {
    id: 'documentation-resources',
    title: 'Documentation & References',
    children: [
      {
        id: 'docs-and-apis',
        title: 'Docs & APIs',
        documents: documentationReferencesTopics,
      },
    ],
  },
  {
    id: 'community-resources',
    title: 'Community & Networking',
    children: [
      {
        id: 'community-guides',
        title: 'Community Guides',
        documents: communityAndNetworkingTopics,
      },
    ],
  },
];
