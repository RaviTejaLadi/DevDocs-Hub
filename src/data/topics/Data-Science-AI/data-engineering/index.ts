import type { TopicItem } from '@/data/topics';
import apache_spark from './apache-spark.md?raw';
import data_warehousing from './data-warehousing.md?raw';
import etl_pipelines from './etl-pipelines.md?raw';
import introduction from './introduction.md?raw';
import sql_for_analytics from './sql-for-analytics.md?raw';

export const dataEngineeringTopics: TopicItem[] = [
  { id: 'data-engineering-apache-spark', title: 'Apache Spark', content: apache_spark },
  { id: 'data-engineering-data-warehousing', title: 'Data Warehousing', content: data_warehousing },
  { id: 'data-engineering-etl-pipelines', title: 'Etl Pipelines', content: etl_pipelines },
  { id: 'data-engineering-introduction', title: '📖 Introduction', content: introduction },
  { id: 'data-engineering-sql-for-analytics', title: 'Sql For Analytics', content: sql_for_analytics },
];
