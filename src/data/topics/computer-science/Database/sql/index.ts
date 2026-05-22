import type { TopicItem } from '@/data/topics';
import sqlIntro from './intro.md?raw';
import sqlInstallationAndSetup from './installation-and-setup.md?raw';
import sqlDatabasesAndSchemas from './databases-and-schemas.md?raw';
import sqlSelectQueries from './select-queries.md?raw';
import sqlWhereClauses from './where-clauses.md?raw';
import sqlJoins from './joins-inner-left-right-full.md?raw';
import sqlAggregations from './aggregations-group-by-having.md?raw';
import sqlSubqueries from './subqueries.md?raw';
import sqlUnionIntersectExcept from './union-intersect-except.md?raw';
import sqlCreateAlterDropTables from './create-alter-drop-tables.md?raw';
import sqlInsertUpdateDelete from './insert-update-delete.md?raw';
import sqlConstraints from './constraints-primary-foreign-key.md?raw';
import sqlIndexes from './indexes.md?raw';
import sqlViews from './views.md?raw';
import sqlTransactionsAcid from './transactions-acid.md?raw';
import sqlNormalization from './normalization-1nf-3nf.md?raw';
import sqlStoredProcedures from './stored-procedures.md?raw';
import sqlTriggers from './triggers.md?raw';
import sqlWindowFunctions from './window-functions.md?raw';
import sqlCte from './cte-common-table-expressions.md?raw';
import sqlExecutionPlans from './execution-plans.md?raw';
import sqlDatabaseDesignErd from './database-design-erd.md?raw';
import sqlRelationships from './relationships-one-many-many.md?raw';
import sqlDenormalization from './denormalization.md?raw';
import sqlPostgresql from './postgresql.md?raw';
import sqlMysql from './mysql.md?raw';
import sqlTheoryQuestions from './theory-questions.md?raw';
import sqlCodingQuestions from './coding-questions.md?raw';
import sqlTop25InterviewQuestions from './top-25-interview-questions.md?raw';

export const sqlTopics: TopicItem[] = [
  {
    id: 'sql-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'sql-intro', title: '📚 Introduction', content: sqlIntro },
      { id: 'sql-installation-and-setup', title: '🛠️ Installation & Setup', content: sqlInstallationAndSetup },
      { id: 'sql-databases-and-schemas', title: '🗄️ Databases & Schemas', content: sqlDatabasesAndSchemas },
    ],
  },
  {
    id: 'sql-querying',
    title: '🔍 Querying',
    content: '',
    items: [
      { id: 'sql-select-queries', title: '📋 SELECT Queries', content: sqlSelectQueries },
      { id: 'sql-where-clauses', title: '🎯 WHERE Clauses', content: sqlWhereClauses },
      { id: 'sql-joins', title: '🔗 Joins (INNER, LEFT, RIGHT, FULL)', content: sqlJoins },
      { id: 'sql-aggregations', title: '📊 Aggregations (GROUP BY & HAVING)', content: sqlAggregations },
      { id: 'sql-subqueries', title: '📦 Subqueries', content: sqlSubqueries },
      { id: 'sql-union-intersect-except', title: '🔀 UNION, INTERSECT & EXCEPT', content: sqlUnionIntersectExcept },
    ],
  },
  {
    id: 'sql-ddl-dml',
    title: '✏️ DDL & DML',
    content: '',
    items: [
      { id: 'sql-create-alter-drop-tables', title: '🏗️ CREATE, ALTER & DROP Tables', content: sqlCreateAlterDropTables },
      { id: 'sql-insert-update-delete', title: '📝 INSERT, UPDATE & DELETE', content: sqlInsertUpdateDelete },
      { id: 'sql-constraints', title: '🔒 Constraints (Primary & Foreign Key)', content: sqlConstraints },
      { id: 'sql-indexes', title: '📇 Indexes', content: sqlIndexes },
      { id: 'sql-views', title: '👁️ Views', content: sqlViews },
    ],
  },
  {
    id: 'sql-advanced',
    title: '🔬 Advanced SQL',
    content: '',
    items: [
      { id: 'sql-transactions-acid', title: '💳 Transactions & ACID', content: sqlTransactionsAcid },
      { id: 'sql-window-functions', title: '🪟 Window Functions', content: sqlWindowFunctions },
      { id: 'sql-cte', title: '🌳 CTE (Common Table Expressions)', content: sqlCte },
      { id: 'sql-execution-plans', title: '⚡ Execution Plans', content: sqlExecutionPlans },
      { id: 'sql-stored-procedures', title: '📜 Stored Procedures', content: sqlStoredProcedures },
      { id: 'sql-triggers', title: '⚙️ Triggers', content: sqlTriggers },
    ],
  },
  {
    id: 'sql-design',
    title: '📐 Database Design',
    content: '',
    items: [
      { id: 'sql-database-design-erd', title: '🗺️ Database Design & ERD', content: sqlDatabaseDesignErd },
      { id: 'sql-relationships', title: '🔗 Relationships (One-to-Many & Many-to-Many)', content: sqlRelationships },
      { id: 'sql-normalization', title: '📏 Normalization (1NF–3NF)', content: sqlNormalization },
      { id: 'sql-denormalization', title: '📦 Denormalization', content: sqlDenormalization },
    ],
  },
  {
    id: 'sql-engines',
    title: '🐘 Database Engines',
    content: '',
    items: [
      { id: 'sql-postgresql', title: '🐘 PostgreSQL', content: sqlPostgresql },
      { id: 'sql-mysql', title: '🐬 MySQL', content: sqlMysql },
    ],
  },
  {
    id: 'sql-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      { id: 'sql-top-25-interview-questions', title: '📌 Top 25 Interview Questions', content: sqlTop25InterviewQuestions },
      { id: 'sql-theory-questions', title: '❓ Theory Questions', content: sqlTheoryQuestions },
      { id: 'sql-coding-questions', title: '💻 Coding Questions', content: sqlCodingQuestions },
    ],
  },
];
