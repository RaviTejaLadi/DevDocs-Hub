import type { TopicItem } from '@/data/topics';
import codingInterviewGuide from './coding-interview-guide.mdx?raw';
import systemDesignInterview from './system-design-interview.mdx?raw';
import behavioralInterview from './behavioral-interview.mdx?raw';
import resumeAndPortfolio from './resume-and-portfolio.mdx?raw';
import salaryNegotiation from './salary-negotiation.mdx?raw';
import companyPrepFaang from './company-prep-faang.mdx?raw';

export const interviewPrepTopics: TopicItem[] = [
  { id: 'resources-coding-interview-guide', title: '💻 Coding Interview Guide', content: codingInterviewGuide },
  { id: 'resources-system-design-interview', title: '🏗️ System Design Interview', content: systemDesignInterview },
  { id: 'resources-behavioral-interview', title: '🗣️ Behavioral Interview', content: behavioralInterview },
  { id: 'resources-resume-and-portfolio', title: '📄 Resume & Portfolio', content: resumeAndPortfolio },
  { id: 'resources-salary-negotiation', title: '💰 Salary Negotiation', content: salaryNegotiation },
  { id: 'resources-company-prep-faang', title: '🏢 Company Prep (FAANG)', content: companyPrepFaang },
];
