import type { TopicItem } from '@/data/topics';
import apache_spark from './apache-spark.mdx?raw';
import data_warehousing from './data-warehousing.mdx?raw';
import etl_pipelines from './etl-pipelines.mdx?raw';
import introduction from './introduction.mdx?raw';
import sql_for_analytics from './sql-for-analytics.mdx?raw';

export const dataEngineeringTopics: TopicItem[] = [
  { id: 'data-engineering-apache-spark', title: 'Apache Spark', content: apache_spark },
  { id: 'data-engineering-data-warehousing', title: 'Data Warehousing', content: data_warehousing },
  { id: 'data-engineering-etl-pipelines', title: 'Etl Pipelines', content: etl_pipelines },
  { id: 'data-engineering-introduction', title: '📖 Introduction', content: introduction },
  { id: 'data-engineering-sql-for-analytics', title: 'Sql For Analytics', content: sql_for_analytics },
];
