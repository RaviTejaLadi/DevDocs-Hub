/** Central route path definitions — single source of truth for URLs. */
export const ROUTE_PATHS = {
  home: '/',
  docs: '/docs/:categoryId/:slug',
  terms: '/terms',
  interviewQuestions: '/interview-questions/:topicId?',
  codeEditor: '/code-editor',
} as const;

export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

export const docsPath = (categoryId: string, slug: string) =>
  `/docs/${encodeURIComponent(categoryId)}/${encodeURIComponent(slug)}`;

export const interviewQuestionsPath = (topicId?: string) =>
  topicId ? `/interview-questions/${encodeURIComponent(topicId)}` : '/interview-questions';

export const isDocsRoute = (pathname: string) => pathname.startsWith('/docs/');
