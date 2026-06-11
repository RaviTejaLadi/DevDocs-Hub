import type { TopicId, InterviewQA } from './types';
import { INTERVIEW_TOPICS, TOPIC_CATEGORIES, LEVEL_ORDER, LEVEL_LABELS, getTopicById } from './types';
import { htmlQuestions } from './full-stack-web/html';
import { cssQuestions } from './full-stack-web/css';
import { javascriptQuestions } from './full-stack-web/javascript';
import { typescriptQuestions } from './full-stack-web/typescript';
import { reactQuestions } from './full-stack-web/react';
import { nextjsQuestions } from './full-stack-web/nextjs';
import { tailwindQuestions } from './full-stack-web/tailwind';
import { nodeQuestions } from './backend-data/node';
import { pythonQuestions } from './backend-data/python';
import { goQuestions } from './backend-data/go';
import { sqlQuestions } from './backend-data/sql';
import { mongodbQuestions } from './backend-data/mongodb';
import { dockerQuestions } from './devops-cloud/docker';
import { awsQuestions } from './devops-cloud/aws';
import { gitQuestions } from './devops-cloud/git';
import { testingQuestions } from './mobile-testing/testing';
import { reactNativeQuestions } from './mobile-testing/react-native';
import { systemDesignQuestions } from './architecture/system-design';
import { dsaQuestions } from './architecture/dsa';

const topicModules: Record<TopicId, InterviewQA[]> = {
  html: htmlQuestions,
  css: cssQuestions,
  javascript: javascriptQuestions,
  typescript: typescriptQuestions,
  react: reactQuestions,
  nextjs: nextjsQuestions,
  tailwind: tailwindQuestions,
  node: nodeQuestions,
  python: pythonQuestions,
  go: goQuestions,
  sql: sqlQuestions,
  mongodb: mongodbQuestions,
  docker: dockerQuestions,
  aws: awsQuestions,
  git: gitQuestions,
  testing: testingQuestions,
  'react-native': reactNativeQuestions,
  'system-design': systemDesignQuestions,
  dsa: dsaQuestions,
};

/** All questions across topics (for counts on list page). */
export const INTERVIEW_QUESTIONS: InterviewQA[] = Object.values(topicModules).flat();

export function getQuestionsByTopic(topicId: TopicId): InterviewQA[] {
  const questions = topicModules[topicId] ?? [];
  return [...questions].sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level));
}

export { getTopicById };

export { INTERVIEW_TOPICS, TOPIC_CATEGORIES, LEVEL_ORDER, LEVEL_LABELS };
export type { TopicId, InterviewQA, InterviewTopic, ExperienceLevel, QuestionType } from './types';
