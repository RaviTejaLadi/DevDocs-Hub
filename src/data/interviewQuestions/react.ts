import type { InterviewQA } from './types';

export const reactQuestions: InterviewQA[] = [
  {
    id: 'react-1',
    topicId: 'react',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the virtual DOM and how does reconciliation work?',
    answer: [
      '**Virtual DOM** is a lightweight JS representation of the real DOM. React keeps a virtual tree in memory.',
      '',
      'On update:',
      '1. Build a new virtual tree.',
      '2. **Diff** the new tree with the previous one (reconciliation).',
      '3. Batch **minimal updates** to the real DOM.',
      '',
      'This avoids full DOM rewrites and keeps updates efficient.',
    ].join('\n\n'),
  },
];
