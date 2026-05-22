import type { TopicItem } from '@/data/topics';

// Fundamentals (distributed / backend system design)
import distributedSystemDesignIntro from './fundamentals/distributed-system-design-intro.md?raw';
import systemDesignInterviewGuide from './fundamentals/system-design-interview-guide.md?raw';
import requirementsAndCapacityEstimation from './fundamentals/requirements-and-capacity-estimation.md?raw';
import scalabilityConcepts from './fundamentals/scalability-concepts.md?raw';
import reliabilityAndAvailability from './fundamentals/reliability-and-availability.md?raw';
import latencyAndThroughput from './fundamentals/latency-and-throughput.md?raw';
import capTheorem from './fundamentals/cap-theorem.md?raw';
import consistencyModels from './fundamentals/consistency-models.md?raw';

// Building blocks
import loadBalancing from './building-blocks/load-balancing.md?raw';
import cachingStrategies from './building-blocks/caching-strategies.md?raw';
import databaseScaling from './building-blocks/database-scaling.md?raw';
import replicationAndSharding from './building-blocks/replication-and-sharding.md?raw';
import messageQueues from './building-blocks/message-queues.md?raw';
import apiDesignRestGraphql from './building-blocks/api-design-rest-graphql.md?raw';
import cdnAndEdgeComputing from './building-blocks/cdn-and-edge-computing.md?raw';
import rateLimitingBuildingBlock from './building-blocks/rate-limiting.md?raw';
import idempotency from './building-blocks/idempotency.md?raw';
import databasesSqlVsNosql from './building-blocks/databases-sql-vs-nosql.md?raw';
import redisAndMemcached from './building-blocks/redis-and-memcached.md?raw';
import elasticsearchAndSearch from './building-blocks/elasticsearch-and-search.md?raw';
import kafkaRabbitmqSqs from './building-blocks/kafka-rabbitmq-sqs.md?raw';
import objectStorageS3 from './building-blocks/object-storage-s3.md?raw';
import dnsAndServiceDiscovery from './building-blocks/dns-and-service-discovery.md?raw';
import proxyAndReverseProxy from './building-blocks/proxy-and-reverse-proxy.md?raw';

// Architecture patterns
import monolithVsMicroservices from './architecture-patterns/monolith-vs-microservices.md?raw';
import eventDrivenArchitecture from './architecture-patterns/event-driven-architecture.md?raw';
import serverlessArchitecture from './architecture-patterns/serverless-architecture.md?raw';
import clientServerArchitecture from './architecture-patterns/client-server-architecture.md?raw';
import sagaPattern from './architecture-patterns/saga-pattern.md?raw';
import circuitBreaker from './architecture-patterns/circuit-breaker.md?raw';
import bulkheadPattern from './architecture-patterns/bulkhead-pattern.md?raw';
import leaderElection from './architecture-patterns/leader-election.md?raw';
import publishSubscribe from './architecture-patterns/publish-subscribe.md?raw';
import cqrs from './architecture-patterns/cqrs.md?raw';
import eventSourcing from './architecture-patterns/event-sourcing.md?raw';

// Classic problems
import urlShortener from './classic-problems/url-shortener.md?raw';
import pasteBin from './classic-problems/paste-bin.md?raw';
import twitterNewsFeed from './classic-problems/twitter-news-feed.md?raw';
import instagramPhotoSharing from './classic-problems/instagram-photo-sharing.md?raw';
import whatsappChatSystem from './classic-problems/whatsapp-chat-system.md?raw';
import youtubeNetflixStreaming from './classic-problems/youtube-netflix-streaming.md?raw';
import uberRideSharing from './classic-problems/uber-ride-sharing.md?raw';
import rateLimiterDesign from './classic-problems/rate-limiter-design.md?raw';
import notificationSystem from './classic-problems/notification-system.md?raw';
import webCrawler from './classic-problems/web-crawler.md?raw';
import distributedCacheDesign from './classic-problems/distributed-cache-design.md?raw';
import ecommerceCheckout from './classic-problems/e-commerce-checkout.md?raw';
import ticketBookingSystem from './classic-problems/ticket-booking-system.md?raw';

// Frontend system design (existing content)
import frontendSystemDesignIntro from './frontend-system-design/intro.md?raw';
import frontendHld from './frontend-system-design/hld.md?raw';
import frontendLld from './frontend-system-design/lld.md?raw';

// Networking (moved out of Q&A — interview-style networking guide)
import networking from './networking/networking.md?raw';

// Security (moved out of Q&A)
import webSecurity from './security/web-security.md?raw';
import owasp from './security/owasp.md?raw';

// Observability (moved out of Q&A — frontend logging/monitoring Q&A)
import loggingAndMonitoring from './observability/logging-and-monitoring.md?raw';

// SOLID principles (software design — separate from distributed systems)
import solidIntro from './solid-principles/intro.md?raw';
import srp from './solid-principles/srp.md?raw';
import ocp from './solid-principles/ocp.md?raw';
import lsp from './solid-principles/lsp.md?raw';
import isp from './solid-principles/isp.md?raw';
import dip from './solid-principles/dip.md?raw';

// OOP design patterns (separate from HLD/LLD architecture docs)
import singletonPattern from './design-patterns/singleton-pattern.md?raw';
import factoryPattern from './design-patterns/factory-pattern.md?raw';
import observerPattern from './design-patterns/observer-pattern.md?raw';
import strategyPattern from './design-patterns/strategy-pattern.md?raw';
import adapterPattern from './design-patterns/adapter-pattern.md?raw';
import decoratorPattern from './design-patterns/decorator-pattern.md?raw';
import mvcPattern from './design-patterns/mvc-pattern.md?raw';

// Interview prep
import top25SystemDesignQuestions from './interview-prep/top-25-system-design-questions.md?raw';
import howToApproachSystemDesignInterviews from './interview-prep/how-to-approach-system-design-interviews.md?raw';
import tradeoffsCheatsheet from './interview-prep/trade-offs-cheatsheet.md?raw';

export const systemDesignData: TopicItem[] = [
  {
    id: 'system-design-fundamentals',
    title: '📐 Distributed Systems Fundamentals',
    content: '',
    items: [
      {
        id: 'sys-distributed-intro',
        title: '🏗️ Distributed System Design Introduction',
        content: distributedSystemDesignIntro,
      },
      {
        id: 'sys-interview-guide',
        title: '💼 System Design Interview Guide',
        content: systemDesignInterviewGuide,
      },
      {
        id: 'sys-capacity-estimation',
        title: '📊 Requirements & Capacity Estimation',
        content: requirementsAndCapacityEstimation,
      },
      { id: 'sys-scalability-concepts', title: '📈 Scalability Concepts', content: scalabilityConcepts },
      { id: 'sys-reliability-availability', title: '✅ Reliability & Availability', content: reliabilityAndAvailability },
      { id: 'sys-latency-throughput', title: '⚡ Latency & Throughput', content: latencyAndThroughput },
      { id: 'sys-cap-theorem', title: '🔺 CAP Theorem', content: capTheorem },
      { id: 'sys-consistency-models', title: '🔄 Consistency Models', content: consistencyModels },
    ],
  },
  {
    id: 'system-design-building-blocks',
    title: '🧱 Core Building Blocks',
    content: '',
    items: [
      { id: 'sys-load-balancing', title: '⚖️ Load Balancing', content: loadBalancing },
      { id: 'sys-caching-strategies', title: '🗄️ Caching Strategies', content: cachingStrategies },
      { id: 'sys-database-scaling', title: '📀 Database Scaling', content: databaseScaling },
      { id: 'sys-replication-sharding', title: '🔀 Replication & Sharding', content: replicationAndSharding },
      { id: 'sys-message-queues', title: '📨 Message Queues', content: messageQueues },
      { id: 'sys-api-design', title: '🔌 API Design (REST & GraphQL)', content: apiDesignRestGraphql },
      { id: 'sys-cdn-edge', title: '🌐 CDN & Edge Computing', content: cdnAndEdgeComputing },
      { id: 'sys-rate-limiting', title: '⏱️ Rate Limiting', content: rateLimitingBuildingBlock },
      { id: 'sys-idempotency', title: '🔁 Idempotency', content: idempotency },
      { id: 'sys-databases-sql-nosql', title: '🗃️ Databases (SQL vs NoSQL)', content: databasesSqlVsNosql },
      { id: 'sys-redis-memcached', title: '🔴 Redis & Memcached', content: redisAndMemcached },
      { id: 'sys-elasticsearch', title: '🔎 Elasticsearch & Search', content: elasticsearchAndSearch },
      { id: 'sys-kafka-rabbitmq-sqs', title: '📬 Kafka, RabbitMQ & SQS', content: kafkaRabbitmqSqs },
      { id: 'sys-object-storage-s3', title: '🪣 Object Storage (S3)', content: objectStorageS3 },
      { id: 'sys-dns-service-discovery', title: '📡 DNS & Service Discovery', content: dnsAndServiceDiscovery },
      { id: 'sys-proxy-reverse-proxy', title: '🔀 Proxy & Reverse Proxy', content: proxyAndReverseProxy },
    ],
  },
  {
    id: 'system-design-architecture-patterns',
    title: '🏛️ Architecture Patterns',
    content: '',
    items: [
      { id: 'sys-monolith-vs-microservices', title: '🧩 Monolith vs Microservices', content: monolithVsMicroservices },
      { id: 'sys-event-driven', title: '⚡ Event-Driven Architecture', content: eventDrivenArchitecture },
      { id: 'sys-serverless', title: '☁️ Serverless Architecture', content: serverlessArchitecture },
      { id: 'sys-client-server', title: '🖥️ Client-Server Architecture', content: clientServerArchitecture },
      { id: 'sys-saga-pattern', title: '📜 Saga Pattern', content: sagaPattern },
      { id: 'sys-circuit-breaker', title: '🔌 Circuit Breaker', content: circuitBreaker },
      { id: 'sys-bulkhead', title: '🚧 Bulkhead Pattern', content: bulkheadPattern },
      { id: 'sys-leader-election', title: '👑 Leader Election', content: leaderElection },
      { id: 'sys-publish-subscribe', title: '📢 Publish-Subscribe', content: publishSubscribe },
      { id: 'sys-cqrs', title: '📖 CQRS', content: cqrs },
      { id: 'sys-event-sourcing', title: '📚 Event Sourcing', content: eventSourcing },
    ],
  },
  {
    id: 'system-design-classic-problems',
    title: '🎯 Classic Design Problems',
    content: '',
    items: [
      { id: 'sys-url-shortener', title: '🔗 URL Shortener', content: urlShortener },
      { id: 'sys-paste-bin', title: '📋 Paste Bin', content: pasteBin },
      { id: 'sys-twitter-feed', title: '🐦 Twitter / News Feed', content: twitterNewsFeed },
      { id: 'sys-instagram', title: '📸 Instagram / Photo Sharing', content: instagramPhotoSharing },
      { id: 'sys-whatsapp-chat', title: '💬 WhatsApp / Chat System', content: whatsappChatSystem },
      { id: 'sys-youtube-netflix', title: '🎬 YouTube / Netflix Streaming', content: youtubeNetflixStreaming },
      { id: 'sys-uber', title: '🚗 Uber / Ride Sharing', content: uberRideSharing },
      { id: 'sys-rate-limiter-design', title: '⏱️ Rate Limiter Design', content: rateLimiterDesign },
      { id: 'sys-notification-system', title: '🔔 Notification System', content: notificationSystem },
      { id: 'sys-web-crawler', title: '🕷️ Web Crawler', content: webCrawler },
      { id: 'sys-distributed-cache', title: '💾 Distributed Cache Design', content: distributedCacheDesign },
      { id: 'sys-ecommerce-checkout', title: '🛒 E-Commerce Checkout', content: ecommerceCheckout },
      { id: 'sys-ticket-booking', title: '🎫 Ticket Booking System', content: ticketBookingSystem },
    ],
  },
  {
    id: 'frontend-system-design',
    title: '🎨 Frontend System Design',
    content: '',
    items: [
      {
        id: 'sys-intro',
        title: '📌 Frontend System Design Introduction',
        content: frontendSystemDesignIntro,
      },
      { id: 'hld', title: '📐 High Level Design (Frontend)', content: frontendHld },
      { id: 'lld', title: '🔧 Low Level Design (Frontend)', content: frontendLld },
    ],
  },
  {
    id: 'system-design-networking',
    title: '🌐 Networking',
    content: '',
    items: [
      {
        id: 'networking-questions',
        title: '🌐 Networking Interview Guide',
        content: networking,
      },
    ],
  },
  {
    id: 'system-design-security',
    title: '🔒 Security',
    content: '',
    items: [
      {
        id: 'web-security-intro',
        title: '🔒 Web Application Security',
        content: webSecurity,
      },
      { id: 'owasp', title: '🛡️ OWASP Best Practices', content: owasp },
    ],
  },
  {
    id: 'system-design-observability',
    title: '📊 Observability',
    content: '',
    items: [
      {
        id: 'error-logging-questions',
        title: '📝 Logging & Monitoring (Frontend)',
        content: loggingAndMonitoring,
      },
    ],
  },
  {
    id: 'solid-principles',
    title: '🧱 SOLID Principles (Software Design)',
    content: '',
    items: [
      { id: 'solid-principles-intro', title: '🧱 Introduction', content: solidIntro },
      { id: 'single-responsibility-principles', title: '1️⃣ Single Responsibility Principle', content: srp },
      { id: 'open-closed-principle', title: '🔄 Open Closed Principle', content: ocp },
      { id: 'liskov-substitution-principle', title: "🔀 Liskov's Substitution Principle", content: lsp },
      { id: 'interface-segregation-principle', title: '↔️ Interface Segregation Principle', content: isp },
      { id: 'dependency-inversion-principle', title: '🔼 Dependency Inversion Principle', content: dip },
    ],
  },
  {
    id: 'oop-design-patterns',
    title: '🔧 OOP Design Patterns',
    content: '',
    items: [
      { id: 'singleton-design-pattern', title: '🔄 Singleton Pattern', content: singletonPattern },
      { id: 'factory-design-pattern', title: '🏭 Factory Pattern', content: factoryPattern },
      { id: 'observer-design-pattern', title: '👁️ Observer Pattern', content: observerPattern },
      { id: 'strategy-design-pattern', title: '🎯 Strategy Pattern', content: strategyPattern },
      { id: 'adapter-design-pattern', title: '🔌 Adapter Pattern', content: adapterPattern },
      { id: 'decorator-design-pattern', title: '🎀 Decorator Pattern', content: decoratorPattern },
      { id: 'mvc-design-pattern', title: '🧩 MVC Pattern', content: mvcPattern },
    ],
  },
  {
    id: 'system-design-interview-prep',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      { id: 'sys-top-25-questions', title: '📌 Top 25 System Design Questions', content: top25SystemDesignQuestions },
      {
        id: 'sys-how-to-approach-interviews',
        title: '🎯 How to Approach System Design Interviews',
        content: howToApproachSystemDesignInterviews,
      },
      { id: 'sys-tradeoffs-cheatsheet', title: '⚖️ Trade-offs Cheatsheet', content: tradeoffsCheatsheet },
    ],
  },
];
