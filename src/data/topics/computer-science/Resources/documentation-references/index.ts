import type { TopicItem } from '@/data/topics';
import mdnWebDocs from './mdn-web-docs.mdx?raw';
import officialFrameworkDocs from './official-framework-docs.mdx?raw';
import apiReferenceGuides from './api-reference-guides.mdx?raw';
import openapiSwagger from './openapi-swagger.mdx?raw';
import canIUse from './can-i-use.mdx?raw';

export const documentationReferencesTopics: TopicItem[] = [
  { id: 'resources-mdn-web-docs', title: '📘 MDN Web Docs', content: mdnWebDocs },
  { id: 'resources-official-framework-docs', title: '📗 Official Framework Docs', content: officialFrameworkDocs },
  { id: 'resources-api-reference-guides', title: '🔌 API Reference Guides', content: apiReferenceGuides },
  { id: 'resources-openapi-swagger', title: '📋 OpenAPI & Swagger', content: openapiSwagger },
  { id: 'resources-can-i-use', title: '✅ Can I Use', content: canIUse },
];
