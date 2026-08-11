/** Central route path definitions — single source of truth for URLs. */
export const ROUTE_PATHS = {
  home: '/',
  topics: '/topics',
  overview: '/overview',
  docs: '/docs/:categoryId/:slug',
  guides: '/guides',
  guide: '/guides/:slug',
  terms: '/terms',
  interviewQuestions: '/interview-questions/:topicId?',
  mockInterviews: '/mock-interviews',
  visualizations: '/visualizations/:visualizationId?',
  playground: '/playground/:playgroundId?',
  codeEditor: '/code-editor',
} as const;

export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

export const docsPath = (categoryId: string, slug: string) =>
  `/docs/${encodeURIComponent(categoryId)}/${encodeURIComponent(slug)}`;

export const topicsPath = () => '/topics';

export const guidesPath = () => '/guides';

export const guidePath = (slug: string) => `/guides/${encodeURIComponent(slug)}`;

export const interviewQuestionsPath = (topicId?: string) =>
  topicId ? `/interview-questions/${encodeURIComponent(topicId)}` : '/interview-questions';

export const mockInterviewsPath = () => '/mock-interviews';

export const visualizationPath = (visualizationId?: string) =>
  visualizationId ? `/visualizations/${encodeURIComponent(visualizationId)}` : '/visualizations';

export const playgroundPath = (playgroundId?: string) =>
  playgroundId ? `/playground/${encodeURIComponent(playgroundId)}` : '/playground';

export const isDocsRoute = (pathname: string) => pathname.startsWith('/docs/');
