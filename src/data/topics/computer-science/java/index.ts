import type { TopicItem } from '@/data/topics';
import collections from './collections.mdx?raw';
import exception_handling from './exception-handling.mdx?raw';
import installation from './installation.mdx?raw';
import introduction from './introduction.mdx?raw';
import multithreading from './multithreading.mdx?raw';
import oops from './oops.mdx?raw';
import spring_boot_intro from './spring-boot-intro.mdx?raw';
import syntax_basics from './syntax-basics.mdx?raw';

export const javaTopics: TopicItem[] = [
  { id: 'java-collections', title: 'Collections', content: collections },
  { id: 'java-exception-handling', title: 'Exception Handling', content: exception_handling },
  { id: 'java-installation', title: 'Installation', content: installation },
  { id: 'java-introduction', title: '📖 Introduction', content: introduction },
  { id: 'java-multithreading', title: 'Multithreading', content: multithreading },
  { id: 'java-oops', title: 'Oops', content: oops },
  { id: 'java-spring-boot-intro', title: 'Spring Boot Intro', content: spring_boot_intro },
  { id: 'java-syntax-basics', title: 'Syntax Basics', content: syntax_basics },
];
