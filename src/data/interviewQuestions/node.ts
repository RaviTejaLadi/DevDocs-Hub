import type { InterviewQA } from './types';

export const nodeQuestions: InterviewQA[] = [
  {
    id: 'node-1',
    topicId: 'node',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the event loop in Node.js?',
    answer: [
      'Node uses a **single-threaded event loop** to handle async I/O:',
      '',
      '- **Call stack** runs synchronous code.',
      '- **Callback queue** (macrotasks) and **microtask queue** (e.g. promises) feed back into the stack when it’s free.',
      '- **Phases**: timers → I/O callbacks → idle → poll → check → close.',
      '',
      '`process.nextTick` and resolved promises run before the next phase.',
    ].join('\n\n'),
  },
];
