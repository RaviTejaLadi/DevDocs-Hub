import type { TopicItem } from '@/data/topics';
import api_security from './api-security.md?raw';
import authentication_security from './authentication-security.md?raw';
import introduction from './introduction.md?raw';
import owasp_top_10 from './owasp-top-10.md?raw';
import secure_coding from './secure-coding.md?raw';

export const applicationSecurityTopics: TopicItem[] = [
  { id: 'application-security-api-security', title: 'Api Security', content: api_security },
  {
    id: 'application-security-authentication-security',
    title: 'Authentication Security',
    content: authentication_security,
  },
  { id: 'application-security-introduction', title: '📖 Introduction', content: introduction },
  { id: 'application-security-owasp-top-10', title: 'Owasp Top 10', content: owasp_top_10 },
  { id: 'application-security-secure-coding', title: 'Secure Coding', content: secure_coding },
];
