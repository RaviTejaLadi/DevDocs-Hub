import type { TopicItem } from '@/data/topics';
import nodeIntro from './intro.mdx?raw';
import nodeInstallationAndSetup from './installation-and-setup.mdx?raw';
import nodeFilesAndFoldersStructure from './files-and-folders-structure.mdx?raw';
import nodeVsBrowser from './node-vs-browser.mdx?raw';
import nodeModulesCommonjsEsm from './modules-commonjs-esm.mdx?raw';
import nodeGlobalsAndProcess from './globals-and-process.mdx?raw';
import nodeNpmAndPackageManagement from './npm-and-package-management.mdx?raw';
import nodeFileSystem from './file-system.mdx?raw';
import nodePathModule from './path-module.mdx?raw';
import nodeEventLoop from './event-loop.mdx?raw';
import nodeCallbacks from './callbacks.mdx?raw';
import nodePromisesAsyncAwait from './promises-async-await.mdx?raw';
import nodeStreams from './streams.mdx?raw';
import nodeBuffers from './buffers.mdx?raw';
import nodeEventsEmitter from './events-emitter.mdx?raw';
import nodeHttpModule from './http-module.mdx?raw';
import nodeHttpsAndTls from './https-and-tls.mdx?raw';
import nodeNetworkingTcpUdp from './networking-tcp-udp.mdx?raw';
import nodeWebsockets from './websockets.mdx?raw';
import nodeBuildingRestApis from './building-rest-apis.mdx?raw';
import nodeMongodbWithNode from './mongodb-with-node.mdx?raw';
import nodeSqlDatabasesWithNode from './sql-databases-with-node.mdx?raw';
import nodeOrmPrismaMongoose from './orm-prisma-mongoose.mdx?raw';
import nodeAuthenticationJwt from './authentication-jwt.mdx?raw';
import nodeAuthorizationRbac from './authorization-rbac.mdx?raw';
import nodeCryptoAndHashing from './crypto-and-hashing.mdx?raw';
import nodeSecurityBestPractices from './security-best-practices.mdx?raw';
import nodeClustering from './clustering.mdx?raw';
import nodeWorkerThreads from './worker-threads.mdx?raw';
import nodeCachingRedis from './caching-redis.mdx?raw';
import nodePerformanceOptimization from './performance-optimization.mdx?raw';
import nodeTestingJestMocha from './testing-jest-mocha.mdx?raw';
import nodeDebugging from './debugging.mdx?raw';
import nodeLogging from './logging.mdx?raw';
import nodeEnvironmentVariables from './environment-variables.mdx?raw';
import nodeDockerWithNode from './docker-with-node.mdx?raw';
import nodeDeployment from './deployment.mdx?raw';
import nodePm2ProcessManager from './pm2-process-manager.mdx?raw';
import nodeTheory from './theory-questions.mdx?raw';
import nodeCoding from './coding-questions.mdx?raw';
import nodeTop25InterviewQuestions from './top-25-interview-questions.mdx?raw';

export const nodeTopics: TopicItem[] = [
  {
    id: 'node-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'node-intro', title: '📚 Introduction', content: nodeIntro },
      { id: 'node-installation-and-setup', title: '🛠️ Installation & Setup', content: nodeInstallationAndSetup },
      {
        id: 'node-files-and-folders-structure',
        title: '📁 Files and Folders Structure',
        content: nodeFilesAndFoldersStructure,
      },
      { id: 'node-vs-browser', title: '🌐 Node.js vs Browser JavaScript', content: nodeVsBrowser },
    ],
  },
  {
    id: 'node-core-modules',
    title: '📦 Core Modules',
    content: '',
    items: [
      { id: 'node-modules-commonjs-esm', title: '📚 Modules (CommonJS & ESM)', content: nodeModulesCommonjsEsm },
      { id: 'node-globals-and-process', title: '⚙️ Globals & Process', content: nodeGlobalsAndProcess },
      {
        id: 'node-npm-and-package-management',
        title: '📦 npm & Package Management',
        content: nodeNpmAndPackageManagement,
      },
      { id: 'node-file-system', title: '📂 File System (fs)', content: nodeFileSystem },
      { id: 'node-path-module', title: '🛤️ Path Module', content: nodePathModule },
    ],
  },
  {
    id: 'node-async-and-runtime',
    title: '⏱️ Async & Runtime',
    content: '',
    items: [
      { id: 'node-event-loop', title: '🔄 Event Loop', content: nodeEventLoop },
      { id: 'node-callbacks', title: '📞 Callbacks', content: nodeCallbacks },
      { id: 'node-promises-async-await', title: '🤝 Promises & Async/Await', content: nodePromisesAsyncAwait },
      { id: 'node-streams', title: '🌊 Streams', content: nodeStreams },
      { id: 'node-buffers', title: '🧱 Buffers', content: nodeBuffers },
      { id: 'node-events-emitter', title: '📡 Event Emitter', content: nodeEventsEmitter },
    ],
  },
  {
    id: 'node-networking-and-apis',
    title: '🌐 Networking & APIs',
    content: '',
    items: [
      { id: 'node-http-module', title: '🌍 HTTP Module', content: nodeHttpModule },
      { id: 'node-https-and-tls', title: '🔒 HTTPS & TLS', content: nodeHttpsAndTls },
      { id: 'node-networking-tcp-udp', title: '🔗 Networking (TCP/UDP)', content: nodeNetworkingTcpUdp },
      { id: 'node-websockets', title: '🔌 WebSockets', content: nodeWebsockets },
      { id: 'node-building-rest-apis', title: '🏗️ Building REST APIs', content: nodeBuildingRestApis },
    ],
  },
  {
    id: 'node-databases',
    title: '🗄️ Databases',
    content: '',
    items: [
      { id: 'node-mongodb-with-node', title: '🍃 MongoDB with Node.js', content: nodeMongodbWithNode },
      { id: 'node-sql-databases-with-node', title: '🐬 SQL Databases with Node.js', content: nodeSqlDatabasesWithNode },
      { id: 'node-orm-prisma-mongoose', title: '🔧 ORM (Prisma & Mongoose)', content: nodeOrmPrismaMongoose },
    ],
  },
  {
    id: 'node-security',
    title: '🔐 Security',
    content: '',
    items: [
      { id: 'node-authentication-jwt', title: '🎫 Authentication (JWT)', content: nodeAuthenticationJwt },
      { id: 'node-authorization-rbac', title: '👮 Authorization & RBAC', content: nodeAuthorizationRbac },
      { id: 'node-crypto-and-hashing', title: '🔑 Crypto & Hashing', content: nodeCryptoAndHashing },
      { id: 'node-security-best-practices', title: '🛡️ Security Best Practices', content: nodeSecurityBestPractices },
    ],
  },
  {
    id: 'node-scaling-and-performance',
    title: '⚡ Scaling & Performance',
    content: '',
    items: [
      { id: 'node-clustering', title: '🔗 Clustering', content: nodeClustering },
      { id: 'node-worker-threads', title: '🧵 Worker Threads', content: nodeWorkerThreads },
      { id: 'node-caching-redis', title: '⚡ Caching with Redis', content: nodeCachingRedis },
      {
        id: 'node-performance-optimization',
        title: '🚀 Performance Optimization',
        content: nodePerformanceOptimization,
      },
    ],
  },
  {
    id: 'node-devops',
    title: '🛠️ DevOps & Tooling',
    content: '',
    items: [
      { id: 'node-testing-jest-mocha', title: '🧪 Testing (Jest & Mocha)', content: nodeTestingJestMocha },
      { id: 'node-debugging', title: '🐛 Debugging', content: nodeDebugging },
      { id: 'node-logging', title: '📝 Logging', content: nodeLogging },
      { id: 'node-environment-variables', title: '🔧 Environment Variables', content: nodeEnvironmentVariables },
      { id: 'node-docker-with-node', title: '🐳 Docker with Node.js', content: nodeDockerWithNode },
      { id: 'node-deployment', title: '🚢 Deployment', content: nodeDeployment },
      { id: 'node-pm2-process-manager', title: '⚙️ PM2 Process Manager', content: nodePm2ProcessManager },
    ],
  },
  {
    id: 'node-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'node-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: nodeTop25InterviewQuestions,
      },
      { id: 'theory-questions', title: '❓ Theory Questions', content: nodeTheory },
      { id: 'coding-questions', title: '💻 Coding Questions', content: nodeCoding },
    ],
  },
];
