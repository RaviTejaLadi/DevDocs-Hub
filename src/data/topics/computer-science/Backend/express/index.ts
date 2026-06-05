import type { TopicItem } from '@/data/topics';
import expressIntro from './intro.mdx?raw';
import expressInstallationAndSetup from './installation-and-setup.mdx?raw';
import expressProjectStructure from './project-structure.mdx?raw';
import expressRouting from './routing.mdx?raw';
import expressRequestAndResponse from './request-and-response.mdx?raw';
import expressMiddleware from './middleware.mdx?raw';
import expressStaticFiles from './static-files.mdx?raw';
import expressErrorHandling from './error-handling.mdx?raw';
import expressBodyParsing from './body-parsing.mdx?raw';
import expressCookiesAndSessions from './cookies-and-sessions.mdx?raw';
import expressCors from './cors.mdx?raw';
import expressValidation from './validation.mdx?raw';
import expressAuthenticationJwt from './authentication-jwt.mdx?raw';
import expressPassport from './passport.mdx?raw';
import expressOauth from './oauth.mdx?raw';
import expressRestApiDesign from './rest-api-design.mdx?raw';
import expressMvcPattern from './mvc-pattern.mdx?raw';
import expressFolderStructureBestPractices from './folder-structure-best-practices.mdx?raw';
import expressMongodbIntegration from './mongodb-integration.mdx?raw';
import expressSqlIntegration from './sql-integration.mdx?raw';
import expressRateLimiting from './rate-limiting.mdx?raw';
import expressSecurityHelmet from './security-helmet.mdx?raw';
import expressFileUploadsMulter from './file-uploads-multer.mdx?raw';
import expressWebsocketsSocketio from './websockets-socketio.mdx?raw';
import expressTestingSupertest from './testing-supertest.mdx?raw';
import expressDeployment from './deployment.mdx?raw';
import expressTheory from './theory-questions.mdx?raw';
import expressCoding from './coding-questions.mdx?raw';
import expressTop25InterviewQuestions from './top-25-interview-questions.mdx?raw';

export const expressTopics: TopicItem[] = [
  {
    id: 'express-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'express-intro', title: '📚 Introduction', content: expressIntro },
      { id: 'express-installation-and-setup', title: '🛠️ Installation & Setup', content: expressInstallationAndSetup },
      { id: 'express-project-structure', title: '📁 Project Structure', content: expressProjectStructure },
    ],
  },
  {
    id: 'express-fundamentals',
    title: '📖 Fundamentals',
    content: '',
    items: [
      { id: 'express-routing', title: '🛣️ Routing', content: expressRouting },
      { id: 'express-request-and-response', title: '📨 Request & Response', content: expressRequestAndResponse },
      { id: 'express-middleware', title: '🔗 Middleware', content: expressMiddleware },
      { id: 'express-static-files', title: '📂 Static Files', content: expressStaticFiles },
      { id: 'express-body-parsing', title: '📥 Body Parsing', content: expressBodyParsing },
      { id: 'express-error-handling', title: '❌ Error Handling', content: expressErrorHandling },
    ],
  },
  {
    id: 'express-http-features',
    title: '🌐 HTTP Features',
    content: '',
    items: [
      { id: 'express-cookies-and-sessions', title: '🍪 Cookies & Sessions', content: expressCookiesAndSessions },
      { id: 'express-cors', title: '🌍 CORS', content: expressCors },
      { id: 'express-validation', title: '✅ Request Validation', content: expressValidation },
      { id: 'express-rate-limiting', title: '⏱️ Rate Limiting', content: expressRateLimiting },
      { id: 'express-file-uploads-multer', title: '📤 File Uploads (Multer)', content: expressFileUploadsMulter },
    ],
  },
  {
    id: 'express-authentication',
    title: '🔐 Authentication',
    content: '',
    items: [
      { id: 'express-authentication-jwt', title: '🎫 Authentication (JWT)', content: expressAuthenticationJwt },
      { id: 'express-passport', title: '🛂 Passport.js', content: expressPassport },
      { id: 'express-oauth', title: '🔑 OAuth', content: expressOauth },
      { id: 'express-security-helmet', title: '🛡️ Security (Helmet)', content: expressSecurityHelmet },
    ],
  },
  {
    id: 'express-architecture',
    title: '🏗️ Architecture',
    content: '',
    items: [
      { id: 'express-rest-api-design', title: '📐 REST API Design', content: expressRestApiDesign },
      { id: 'express-mvc-pattern', title: '🧩 MVC Pattern', content: expressMvcPattern },
      {
        id: 'express-folder-structure-best-practices',
        title: '📋 Folder Structure Best Practices',
        content: expressFolderStructureBestPractices,
      },
    ],
  },
  {
    id: 'express-databases',
    title: '🗄️ Databases',
    content: '',
    items: [
      { id: 'express-mongodb-integration', title: '🍃 MongoDB Integration', content: expressMongodbIntegration },
      { id: 'express-sql-integration', title: '🐬 SQL Integration', content: expressSqlIntegration },
    ],
  },
  {
    id: 'express-advanced',
    title: '🔬 Advanced',
    content: '',
    items: [
      { id: 'express-websockets-socketio', title: '🔌 WebSockets (Socket.io)', content: expressWebsocketsSocketio },
      { id: 'express-testing-supertest', title: '🧪 Testing (Supertest)', content: expressTestingSupertest },
      { id: 'express-deployment', title: '🚢 Deployment', content: expressDeployment },
    ],
  },
  {
    id: 'express-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'express-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: expressTop25InterviewQuestions,
      },
      { id: 'express-theory-questions', title: '❓ Theory Questions', content: expressTheory },
      { id: 'express-coding-questions', title: '💻 Coding Questions', content: expressCoding },
    ],
  },
];
