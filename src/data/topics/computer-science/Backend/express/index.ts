import type { TopicItem } from '@/data/topics';
import expressIntro from './intro.md?raw';
import expressInstallationAndSetup from './installation-and-setup.md?raw';
import expressProjectStructure from './project-structure.md?raw';
import expressRouting from './routing.md?raw';
import expressRequestAndResponse from './request-and-response.md?raw';
import expressMiddleware from './middleware.md?raw';
import expressStaticFiles from './static-files.md?raw';
import expressErrorHandling from './error-handling.md?raw';
import expressBodyParsing from './body-parsing.md?raw';
import expressCookiesAndSessions from './cookies-and-sessions.md?raw';
import expressCors from './cors.md?raw';
import expressValidation from './validation.md?raw';
import expressAuthenticationJwt from './authentication-jwt.md?raw';
import expressPassport from './passport.md?raw';
import expressOauth from './oauth.md?raw';
import expressRestApiDesign from './rest-api-design.md?raw';
import expressMvcPattern from './mvc-pattern.md?raw';
import expressFolderStructureBestPractices from './folder-structure-best-practices.md?raw';
import expressMongodbIntegration from './mongodb-integration.md?raw';
import expressSqlIntegration from './sql-integration.md?raw';
import expressRateLimiting from './rate-limiting.md?raw';
import expressSecurityHelmet from './security-helmet.md?raw';
import expressFileUploadsMulter from './file-uploads-multer.md?raw';
import expressWebsocketsSocketio from './websockets-socketio.md?raw';
import expressTestingSupertest from './testing-supertest.md?raw';
import expressDeployment from './deployment.md?raw';
import expressTheory from './theory-questions.md?raw';
import expressCoding from './coding-questions.md?raw';
import expressTop25InterviewQuestions from './top-25-interview-questions.md?raw';

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
