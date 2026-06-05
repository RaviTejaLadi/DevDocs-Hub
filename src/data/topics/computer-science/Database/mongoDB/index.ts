import type { TopicItem } from '@/data/topics';
import mongoIntro from './intro.mdx?raw';
import mongoInstallationAndSetup from './installation-and-setup.mdx?raw';
import mongoAtlas from './mongodb-atlas.mdx?raw';
import mongoDataModelingBasics from './data-modeling-basics.mdx?raw';
import mongoDocumentsAndCollections from './documents-and-collections.mdx?raw';
import mongoCrudOperations from './crud-operations.mdx?raw';
import mongoQueryOperators from './query-operators.mdx?raw';
import mongoAggregationFramework from './aggregation-framework.mdx?raw';
import mongoIndexes from './indexes.mdx?raw';
import mongoSchemaDesign from './schema-design.mdx?raw';
import mongoEmbeddingVsReferencing from './embedding-vs-referencing.mdx?raw';
import mongoTransactions from './transactions.mdx?raw';
import mongoReplication from './replication.mdx?raw';
import mongoSharding from './sharding.mdx?raw';
import mongoChangeStreams from './change-streams.mdx?raw';
import mongoTextSearch from './text-search.mdx?raw';
import mongoGeospatialQueries from './geospatial-queries.mdx?raw';
import mongoMongooseOdm from './mongoose-odm.mdx?raw';
import mongoNodeDriver from './node-driver.mdx?raw';
import mongoConnectionPooling from './connection-pooling.mdx?raw';
import mongoAuthenticationAuthorization from './authentication-authorization.mdx?raw';
import mongoBackupAndRestore from './backup-and-restore.mdx?raw';
import mongoPerformanceOptimization from './performance-optimization.mdx?raw';
import mongoMonitoring from './monitoring.mdx?raw';
import mongoTheoryQuestions from './theory-questions.mdx?raw';
import mongoCodingQuestions from './coding-questions.mdx?raw';
import mongoTop25InterviewQuestions from './top-25-interview-questions.mdx?raw';

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
