import type { TopicItem } from '@/data/topics';
import collections from './collections.md?raw';
import exception_handling from './exception-handling.md?raw';
import installation from './installation.md?raw';
import introduction from './introduction.md?raw';
import multithreading from './multithreading.md?raw';
import oops from './oops.md?raw';
import spring_boot_intro from './spring-boot-intro.md?raw';
import syntax_basics from './syntax-basics.md?raw';

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
