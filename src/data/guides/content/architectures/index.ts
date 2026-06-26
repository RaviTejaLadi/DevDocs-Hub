import type { Guide } from '../..';

export const architectureGuides: Guide[] = [
  {
    slug: 'arc-guide-1',
    title: 'Load Balancing',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Load balancing is the process of distributing incoming network traffic across a group of backend servers (also known as a server farm or pool).',
    contentLoader: () => import('./Load-Balancing.mdx?raw'),
  },
  {
    slug: 'arc-guide-2',
    title: 'Caching',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Caching is the technique of storing copies of frequently accessed data in a temporary storage location to serve future requests faster.',
    contentLoader: () => import('./Caching.mdx?raw'),
  },
  {
    slug: 'arc-guide-3',
    title: 'CDN',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'A CDN is a geographically distributed network of proxy servers that serves static content to users based on their geographic location.',
    contentLoader: () => import('./CDN.mdx?raw'),
  },
  {
    slug: 'arc-guide-4',
    title: 'Reverse Proxy',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'A reverse proxy sits between the client and backend servers, protecting the server by handling SSL termination, compression, and caching.',
    contentLoader: () => import('./Reverse-Proxy.mdx?raw'),
  },
  {
    slug: 'arc-guide-5',
    title: 'API Gateway',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'An API Gateway is a single entry point for all clients to access microservices, acting as a gatekeeper and orchestrator.',
    contentLoader: () => import('./API-Gateway.mdx?raw'),
  },
  {
    slug: 'arc-guide-6',
    title: 'Message Queues',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'A message queue enables asynchronous communication between services by sending messages to a buffer for decoupled processing.',
    contentLoader: () => import('./Message-Queues.mdx?raw'),
  },
  {
    slug: 'arc-guide-7',
    title: 'Database Replication',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Replication is the process of copying data from a primary database to one or more replicas for high availability and read scalability.',
    contentLoader: () => import('./Database-Replication.mdx?raw'),
  },
  {
    slug: 'arc-guide-8',
    title: 'Database Sharding',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Sharding splits a large database into smaller, faster shards, each holding a subset of the total data.',
    contentLoader: () => import('./Database-Sharding.mdx?raw'),
  },
  {
    slug: 'arc-guide-9',
    title: 'Service Discovery',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Service Discovery automatically detects the network locations of services in dynamic environments like Kubernetes.',
    contentLoader: () => import('./Service-Discovery.mdx?raw'),
  },
  {
    slug: 'arc-guide-10',
    title: 'Circuit Breaker',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'A circuit breaker prevents an application from repeatedly trying to execute an operation that is likely to fail.',
    contentLoader: () => import('./Circuit-Breaker.mdx?raw'),
  },
  {
    slug: 'arc-guide-11',
    title: 'Rate Limiting',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Rate limiting controls the amount of incoming requests a server can handle within a specific window of time.',
    contentLoader: () => import('./Rate-Limiting.mdx?raw'),
  },
  {
    slug: 'arc-guide-12',
    title: 'Horizontal vs. Vertical Scaling',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Vertical scaling adds power to existing machines; horizontal scaling adds more machines for fault tolerance and unlimited scale.',
    contentLoader: () => import('./Horizontal-vs-Vertical-Scaling.mdx?raw'),
  },
];
