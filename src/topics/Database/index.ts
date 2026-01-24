import mongoIntro from './mongoDB/intro.md?raw';
import mongoTheoryQuestions from './mongoDB/theory-questions.md?raw';
import mongoCodingQuestions from './mongoDB/coding-questions.md?raw';

import sqlIntro from './sql/intro.md?raw';
import sqlTheoryQuestions from './sql/theory-questions.md?raw';
import sqlCodingQuestions from './sql/coding-questions.md?raw';

import { MongoDB, Sql } from '@/assets/technologies';

export const databaseData = [
  {
    id: 'mongoDB',
    title: 'Mongo DB',
    Icon: MongoDB,
    documents: [
      {
        id: 'mongo-intro',
        title: '📚 Introduction',
        content: mongoIntro,
      },
      {
        id: 'mongo-theory-questions',
        title: '❓ Theory Questions',
        content: mongoTheoryQuestions,
      },
      {
        id: 'mongo-coding-questions',
        title: '💻 Coding Questions',
        content: mongoCodingQuestions,
      },
    ],
  },
  {
    id: 'sql',
    title: 'SQL',
    Icon: Sql,
    documents: [
      {
        id: 'sql-intro',
        title: '📚 Introduction',
        content: sqlIntro,
      },
      {
        id: 'sql-theory-questions',
        title: '❓ Theory Questions',
        content: sqlTheoryQuestions,
      },
      {
        id: 'sql-coding-questions',
        title: '💻 Coding Questions',
        content: sqlCodingQuestions,
      },
    ],
  },
];
