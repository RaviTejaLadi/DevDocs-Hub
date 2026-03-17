import type { InterviewQA } from './types';

export const systemDesignQuestions: InterviewQA[] = [
  {
    id: 'sd-1',
    topicId: 'system-design',
    level: 'senior',
    questionType: 'theory',
    question: 'How would you design a rate limiter for an API?',
    answer: [
      '**Options:** token bucket or sliding window, keyed by user/IP.',
      '',
      '1. Store counters in **Redis** (or similar) with TTL.',
      '2. On each request: decrement/increment and check limit.',
      '3. If over limit: respond **429** with **Retry-After**.',
      '4. For multiple replicas, use a **central store** so limits are global per key.',
    ].join('\n\n'),
  },
];
