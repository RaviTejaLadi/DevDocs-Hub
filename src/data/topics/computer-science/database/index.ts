import { mongoDBTopics } from './mongoDB';
import { sqlTopics } from './sql';

export const databaseData = [
  {
    id: 'mongoDB',
    title: 'Mongo DB',
    documents: mongoDBTopics,
  },
  {
    id: 'sql',
    title: 'SQL',
    documents: sqlTopics,
  },
];
