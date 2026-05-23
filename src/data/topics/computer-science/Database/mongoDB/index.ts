import type { TopicItem } from '@/data/topics';
import mongoIntro from './intro.md?raw';
import mongoInstallationAndSetup from './installation-and-setup.md?raw';
import mongoAtlas from './mongodb-atlas.md?raw';
import mongoDataModelingBasics from './data-modeling-basics.md?raw';
import mongoDocumentsAndCollections from './documents-and-collections.md?raw';
import mongoCrudOperations from './crud-operations.md?raw';
import mongoQueryOperators from './query-operators.md?raw';
import mongoAggregationFramework from './aggregation-framework.md?raw';
import mongoIndexes from './indexes.md?raw';
import mongoSchemaDesign from './schema-design.md?raw';
import mongoEmbeddingVsReferencing from './embedding-vs-referencing.md?raw';
import mongoTransactions from './transactions.md?raw';
import mongoReplication from './replication.md?raw';
import mongoSharding from './sharding.md?raw';
import mongoChangeStreams from './change-streams.md?raw';
import mongoTextSearch from './text-search.md?raw';
import mongoGeospatialQueries from './geospatial-queries.md?raw';
import mongoMongooseOdm from './mongoose-odm.md?raw';
import mongoNodeDriver from './node-driver.md?raw';
import mongoConnectionPooling from './connection-pooling.md?raw';
import mongoAuthenticationAuthorization from './authentication-authorization.md?raw';
import mongoBackupAndRestore from './backup-and-restore.md?raw';
import mongoPerformanceOptimization from './performance-optimization.md?raw';
import mongoMonitoring from './monitoring.md?raw';
import mongoTheoryQuestions from './theory-questions.md?raw';
import mongoCodingQuestions from './coding-questions.md?raw';
import mongoTop25InterviewQuestions from './top-25-interview-questions.md?raw';

export const mongoDBTopics: TopicItem[] = [
  {
    id: 'mongo-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'mongo-intro', title: '📚 Introduction', content: mongoIntro },
      { id: 'mongo-installation-and-setup', title: '🛠️ Installation & Setup', content: mongoInstallationAndSetup },
      { id: 'mongo-mongodb-atlas', title: '☁️ MongoDB Atlas', content: mongoAtlas },
      { id: 'mongo-data-modeling-basics', title: '📐 Data Modeling Basics', content: mongoDataModelingBasics },
    ],
  },
  {
    id: 'mongo-core-concepts',
    title: '📖 Core Concepts',
    content: '',
    items: [
      {
        id: 'mongo-documents-and-collections',
        title: '📄 Documents & Collections',
        content: mongoDocumentsAndCollections,
      },
      { id: 'mongo-crud-operations', title: '✏️ CRUD Operations', content: mongoCrudOperations },
      { id: 'mongo-query-operators', title: '🔍 Query Operators', content: mongoQueryOperators },
      { id: 'mongo-aggregation-framework', title: '📊 Aggregation Framework', content: mongoAggregationFramework },
      { id: 'mongo-indexes', title: '📇 Indexes', content: mongoIndexes },
    ],
  },
  {
    id: 'mongo-data-modeling',
    title: '🗂️ Data Modeling',
    content: '',
    items: [
      { id: 'mongo-schema-design', title: '🏗️ Schema Design', content: mongoSchemaDesign },
      {
        id: 'mongo-embedding-vs-referencing',
        title: '🔗 Embedding vs Referencing',
        content: mongoEmbeddingVsReferencing,
      },
    ],
  },
  {
    id: 'mongo-advanced',
    title: '🔬 Advanced',
    content: '',
    items: [
      { id: 'mongo-transactions', title: '💳 Transactions', content: mongoTransactions },
      { id: 'mongo-replication', title: '🔄 Replication', content: mongoReplication },
      { id: 'mongo-sharding', title: '🧩 Sharding', content: mongoSharding },
      { id: 'mongo-change-streams', title: '📡 Change Streams', content: mongoChangeStreams },
      { id: 'mongo-text-search', title: '🔎 Text Search', content: mongoTextSearch },
      { id: 'mongo-geospatial-queries', title: '🌍 Geospatial Queries', content: mongoGeospatialQueries },
    ],
  },
  {
    id: 'mongo-integration',
    title: '🔌 Integration',
    content: '',
    items: [
      { id: 'mongo-mongoose-odm', title: '🦡 Mongoose ODM', content: mongoMongooseOdm },
      { id: 'mongo-node-driver', title: '🟢 Node.js Driver', content: mongoNodeDriver },
      { id: 'mongo-connection-pooling', title: '🏊 Connection Pooling', content: mongoConnectionPooling },
    ],
  },
  {
    id: 'mongo-operations',
    title: '⚙️ Operations & Security',
    content: '',
    items: [
      {
        id: 'mongo-authentication-authorization',
        title: '🔐 Authentication & Authorization',
        content: mongoAuthenticationAuthorization,
      },
      { id: 'mongo-backup-and-restore', title: '💾 Backup & Restore', content: mongoBackupAndRestore },
      {
        id: 'mongo-performance-optimization',
        title: '🚀 Performance Optimization',
        content: mongoPerformanceOptimization,
      },
      { id: 'mongo-monitoring', title: '📈 Monitoring', content: mongoMonitoring },
    ],
  },
  {
    id: 'mongo-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'mongo-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: mongoTop25InterviewQuestions,
      },
      { id: 'mongo-theory-questions', title: '❓ Theory Questions', content: mongoTheoryQuestions },
      { id: 'mongo-coding-questions', title: '💻 Coding Questions', content: mongoCodingQuestions },
    ],
  },
];
