import type { TopicItem } from '@/data/topics';
import nextIntro from './intro.md?raw';
import nextInstallationAndSetup from './installation-and-setup.md?raw';
import nextFilesAndFoldersStructure from './files-and-folders-structure.md?raw';
import nextQuickReview from './quick-review-checklist.md?raw';
import nextAppRouter from './app-router.md?raw';
import nextPagesRouter from './pages-router.md?raw';
import nextRouting from './routing.md?raw';
import nextServerComponents from './server-components.md?raw';
import nextClientComponents from './client-components.md?raw';
import nextDataFetching from './data-fetching.md?raw';
import nextApiRoutes from './api-routes.md?raw';
import nextMiddleware from './middleware.md?raw';
import nextAuthentication from './authentication.md?raw';
import nextCaching from './caching.md?raw';
import nextSsrSsgIsr from './ssr-ssg-isr.md?raw';
import nextEnvironmentVariables from './environment-variables.md?raw';
import nextStyling from './styling.md?raw';
import nextMetadataSeo from './metadata-seo.md?raw';
import nextImageOptimization from './image-optimization.md?raw';
import nextFontOptimization from './font-optimization.md?raw';
import nextDeployment from './deployment.md?raw';
import nextTesting from './testing.md?raw';
import nextPerformanceOptimization from './performance-optimization.md?raw';
import nextErrorHandling from './error-handling.md?raw';
import commonNextInterviewQuestions from './common-questions.md?raw';
import pagesRouterNextInterviewQuestions from './pages-router-questions.md?raw';
import appRouterNextInterviewQuestions from './app-router-questions.md?raw';
import nextTop25InterviewQuestions from './top-25-interview-questions.md?raw';

export const nextTopics: TopicItem[] = [
  {
    id: 'next-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'next-js-intro', title: '📚 Introduction', content: nextIntro },
      { id: 'next-installation-and-setup', title: '🛠️ Installation & Setup', content: nextInstallationAndSetup },
      {
        id: 'next-js-files-and-folders-structure',
        title: '📁 Files and Folders Structure',
        content: nextFilesAndFoldersStructure,
      },
      { id: 'next-quick-review-checklist', title: '📝 Quick Review Checklist', content: nextQuickReview },
    ],
  },
  {
    id: 'next-routing',
    title: '🛣️ Routing',
    content: '',
    items: [
      { id: 'next-app-router', title: '📱 App Router', content: nextAppRouter },
      { id: 'next-pages-router', title: '📄 Pages Router', content: nextPagesRouter },
      { id: 'next-routing', title: '🔀 Routing', content: nextRouting },
    ],
  },
  {
    id: 'next-rendering-data',
    title: '⚡ Rendering & Data',
    content: '',
    items: [
      { id: 'next-server-components', title: '🖥️ Server Components', content: nextServerComponents },
      { id: 'next-client-components', title: '💻 Client Components', content: nextClientComponents },
      { id: 'next-data-fetching', title: '📥 Data Fetching', content: nextDataFetching },
      { id: 'next-ssr-ssg-isr', title: '🔄 SSR, SSG & ISR', content: nextSsrSsgIsr },
      { id: 'next-caching', title: '🗄️ Caching', content: nextCaching },
    ],
  },
  {
    id: 'next-backend-features',
    title: '🔧 Backend Features',
    content: '',
    items: [
      { id: 'next-api-routes', title: '🔌 API Routes', content: nextApiRoutes },
      { id: 'next-middleware', title: '🔗 Middleware', content: nextMiddleware },
      { id: 'next-authentication', title: '🔐 Authentication', content: nextAuthentication },
      { id: 'next-environment-variables', title: '🔧 Environment Variables', content: nextEnvironmentVariables },
    ],
  },
  {
    id: 'next-ui-optimization',
    title: '🎨 UI & Optimization',
    content: '',
    items: [
      { id: 'next-styling', title: '🎨 Styling', content: nextStyling },
      { id: 'next-metadata-seo', title: '🔍 Metadata & SEO', content: nextMetadataSeo },
      { id: 'next-image-optimization', title: '🖼️ Image Optimization', content: nextImageOptimization },
      { id: 'next-font-optimization', title: '🔤 Font Optimization', content: nextFontOptimization },
      {
        id: 'next-performance-optimization',
        title: '🚀 Performance Optimization',
        content: nextPerformanceOptimization,
      },
    ],
  },
  {
    id: 'next-production',
    title: '🚢 Production',
    content: '',
    items: [
      { id: 'next-error-handling', title: '❌ Error Handling', content: nextErrorHandling },
      { id: 'next-testing', title: '🧪 Testing', content: nextTesting },
      { id: 'next-deployment', title: '🌐 Deployment', content: nextDeployment },
    ],
  },
  {
    id: 'next-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'next-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: nextTop25InterviewQuestions,
      },
      {
        id: 'common-next-js-interview-questions',
        title: '❓ Common Interview Questions',
        content: commonNextInterviewQuestions,
      },
      {
        id: 'pages-routers-next-js-interview-questions',
        title: '📄 Pages Router Interview Questions',
        content: pagesRouterNextInterviewQuestions,
      },
      {
        id: 'app-routers-next-js-interview-questions',
        title: '📱 App Router Interview Questions',
        content: appRouterNextInterviewQuestions,
      },
    ],
  },
];
