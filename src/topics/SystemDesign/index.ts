import intro from './intro.md?raw';

import lld from './design-patterns/lld.md?raw';
import hld from './design-patterns/hld.md?raw';
import singletonPattern from './design-patterns/singleton-pattern.md?raw';
import factoryPattern from './design-patterns/factory-pattern.md?raw';

import solidIntro from './solid-principles/intro.md?raw';
import srp from './solid-principles/srp.md?raw';
import ocp from './solid-principles/ocp.md?raw';
import lsp from './solid-principles/lsp.md?raw';
import isp from './solid-principles/isp.md?raw';
import dip from './solid-principles/dip.md?raw';

import webSecurity from './web-security.md?raw';
import networking from './networking.md?raw';
import errorLogging from './logging-and-monitoring.md?raw';
import owasp from './owasp.md?raw';

import Introduction from '@/assets/Icons/Introduction';
import QandA from '@/assets/Icons/QandA';
import Pattern from '@/assets/Icons/Pattern';
import Rules from '@/assets/Icons/Rules';

export const systemDesignData = [
  {
    id: 'system-design-intro',
    title: 'Introduction',
    Icon: Introduction,
    document: {
      id: 'sys-intro',
      title: '📌 Introduction',
      content: intro,
    },
  },
  {
    id: 'system-design-q-and-a',
    title: 'Q&A',
    Icon: QandA,
    documents: [
      {
        id: 'web-security-intro',
        title: '🔒 Web Security',
        content: webSecurity,
      },
      {
        id: 'networking-questions',
        title: '🌐 Networking',
        content: networking,
      },
      {
        id: 'error-logging-questions',
        title: '📊 Logging & Monitoring',
        content: errorLogging,
      },
      {
        id: 'owasp',
        title: '🛡️ OWASP',
        content: owasp,
      },
    ],
  },
  {
    id: 'solid-principles',
    title: 'Solid Principles',
    Icon: Rules,
    documents: [
      {
        id: 'solid-principles-intro',
        title: '🧱 Introduction',
        content: solidIntro,
      },
      {
        id: 'single-responsibility-principles',
        title: '1️⃣ Single Responsibility Principles',
        content: srp,
      },
      {
        id: 'open-closed-principle',
        title: '🔄 Open Closed Principle',
        content: ocp,
      },
      {
        id: 'liskov-substitution-principle',
        title: "🔀 Liskov's Substitution Principle",
        content: lsp,
      },
      {
        id: 'interface-segregation-principle',
        title: '↔️ Interface Segregation Principle',
        content: isp,
      },
      {
        id: 'dependency-inversion-principle',
        title: '🔼 Dependency Inversion Principle',
        content: dip,
      },
    ],
  },
  {
    id: 'design-patterns',
    title: ' Design Patterns',
    Icon: Pattern,
    documents: [
      {
        id: 'lld',
        title: '🔧 Low Level Design',
        content: lld,
      },
      {
        id: 'hld',
        title: '📐 High Level Design',
        content: hld,
      },
      {
        id: 'singleton-design-pattern',
        title: '🔄 Singleton Design Pattern',
        content: singletonPattern,
      },
      {
        id: 'factory-design-pattern',
        title: '🏭 Factory Design Pattern',
        content: factoryPattern,
      },
    ],
  },
];
