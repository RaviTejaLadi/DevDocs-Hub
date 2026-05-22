import type { TopicItem } from '@/data/topics';
import codingInterviewGuide from './coding-interview-guide.md?raw';
import systemDesignInterview from './system-design-interview.md?raw';
import behavioralInterview from './behavioral-interview.md?raw';
import resumeAndPortfolio from './resume-and-portfolio.md?raw';
import salaryNegotiation from './salary-negotiation.md?raw';
import companyPrepFaang from './company-prep-faang.md?raw';

export const interviewPrepTopics: TopicItem[] = [
  { id: 'resources-coding-interview-guide', title: '💻 Coding Interview Guide', content: codingInterviewGuide },
  { id: 'resources-system-design-interview', title: '🏗️ System Design Interview', content: systemDesignInterview },
  { id: 'resources-behavioral-interview', title: '🗣️ Behavioral Interview', content: behavioralInterview },
  { id: 'resources-resume-and-portfolio', title: '📄 Resume & Portfolio', content: resumeAndPortfolio },
  { id: 'resources-salary-negotiation', title: '💰 Salary Negotiation', content: salaryNegotiation },
  { id: 'resources-company-prep-faang', title: '🏢 Company Prep (FAANG)', content: companyPrepFaang },
];
