import type { InterviewQA } from './types';

export const sqlQuestions: InterviewQA[] = [
  {
    id: 'sql-1',
    topicId: 'sql',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: [
      '- **INNER JOIN**: only rows where both tables match; drops non-matching rows from both sides.',
      '- **LEFT JOIN**: all rows from the left table; right side is NULL when there’s no match.',
      '',
      'Use **INNER** when you only want matches; use **LEFT** when you want to keep all left rows and optionally attach right data.',
    ].join('\n\n'),
  },
];
