import type { TopicItem } from '@/data/topics';
import nodeIntro from './intro.md?raw';
import nodeInstallationAndSetup from './installation-and-setup.md?raw';
import nodeFilesAndFoldersStructure from './files-and-folders-structure.md?raw';
import nodeVsBrowser from './node-vs-browser.md?raw';
import nodeModulesCommonjsEsm from './modules-commonjs-esm.md?raw';
import nodeGlobalsAndProcess from './globals-and-process.md?raw';
import nodeNpmAndPackageManagement from './npm-and-package-management.md?raw';
import nodeFileSystem from './file-system.md?raw';
import nodePathModule from './path-module.md?raw';
import nodeEventLoop from './event-loop.md?raw';
import nodeCallbacks from './callbacks.md?raw';
import nodePromisesAsyncAwait from './promises-async-await.md?raw';
import nodeStreams from './streams.md?raw';
import nodeBuffers from './buffers.md?raw';
import nodeEventsEmitter from './events-emitter.md?raw';
import nodeHttpModule from './http-module.md?raw';
import nodeHttpsAndTls from './https-and-tls.md?raw';
import nodeNetworkingTcpUdp from './networking-tcp-udp.md?raw';
import nodeWebsockets from './websockets.md?raw';
import nodeBuildingRestApis from './building-rest-apis.md?raw';
import nodeMongodbWithNode from './mongodb-with-node.md?raw';
import nodeSqlDatabasesWithNode from './sql-databases-with-node.md?raw';
import nodeOrmPrismaMongoose from './orm-prisma-mongoose.md?raw';
import nodeAuthenticationJwt from './authentication-jwt.md?raw';
import nodeAuthorizationRbac from './authorization-rbac.md?raw';
import nodeCryptoAndHashing from './crypto-and-hashing.md?raw';
import nodeSecurityBestPractices from './security-best-practices.md?raw';
import nodeClustering from './clustering.md?raw';
import nodeWorkerThreads from './worker-threads.md?raw';
import nodeCachingRedis from './caching-redis.md?raw';
import nodePerformanceOptimization from './performance-optimization.md?raw';
import nodeTestingJestMocha from './testing-jest-mocha.md?raw';
import nodeDebugging from './debugging.md?raw';
import nodeLogging from './logging.md?raw';
import nodeEnvironmentVariables from './environment-variables.md?raw';
import nodeDockerWithNode from './docker-with-node.md?raw';
import nodeDeployment from './deployment.md?raw';
import nodePm2ProcessManager from './pm2-process-manager.md?raw';
import nodeTheory from './theory-questions.md?raw';
import nodeCoding from './coding-questions.md?raw';
import nodeTop25InterviewQuestions from './top-25-interview-questions.md?raw';

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
      { id: 'node-npm-and-package-management', title: '📦 npm & Package Management', content: nodeNpmAndPackageManagement },
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
      { id: 'node-performance-optimization', title: '🚀 Performance Optimization', content: nodePerformanceOptimization },
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
      { id: 'node-top-25-interview-questions', title: '📌 Top 25 Interview Questions', content: nodeTop25InterviewQuestions },
      { id: 'theory-questions', title: '❓ Theory Questions', content: nodeTheory },
      { id: 'coding-questions', title: '💻 Coding Questions', content: nodeCoding },
    ],
  },
];
