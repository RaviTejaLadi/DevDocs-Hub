import type { TopicId, InterviewQA } from './types';
import {
  INTERVIEW_TOPICS,
  TOPIC_CATEGORIES,
  LEVEL_ORDER,
  LEVEL_LABELS,
  getTopicById,
} from './types';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';
import { javascriptQuestions } from './javascript';
import { typescriptQuestions } from './typescript';
import { reactQuestions } from './react';
import { nodeQuestions } from './node';
import { sqlQuestions } from './sql';
import { mongodbQuestions } from './mongodb';
import { systemDesignQuestions } from './system-design';

const topicModules: Record<TopicId, InterviewQA[]> = {
  html: htmlQuestions,
  css: cssQuestions,
  javascript: javascriptQuestions,
  typescript: typescriptQuestions,
  react: reactQuestions,
  node: nodeQuestions,
  sql: sqlQuestions,
  mongodb: mongodbQuestions,
  'system-design': systemDesignQuestions,
};

/** All questions across topics (for counts on list page). */
export const INTERVIEW_QUESTIONS: InterviewQA[] = Object.values(topicModules).flat();

export function getQuestionsByTopic(topicId: TopicId): InterviewQA[] {
  const questions = topicModules[topicId] ?? [];
  return [...questions].sort(
    (a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level)
  );
}

export { getTopicById };

export {
  INTERVIEW_TOPICS,
  TOPIC_CATEGORIES,
  LEVEL_ORDER,
  LEVEL_LABELS,
};
export type { TopicId, InterviewQA, InterviewTopic, ExperienceLevel, QuestionType } from './types';
