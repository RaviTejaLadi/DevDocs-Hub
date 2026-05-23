import type { TopicItem } from '@/data/topics';
import group_discussion from './group-discussion.md?raw';
import hr_interview from './hr-interview.md?raw';
import introduction from './introduction.md?raw';
import resume_tips from './resume-tips.md?raw';
import technical_interview from './technical-interview.md?raw';

export const interviewPrepTopics: TopicItem[] = [
  { id: 'interview-prep-group-discussion', title: 'Group Discussion', content: group_discussion },
  { id: 'interview-prep-hr-interview', title: 'Hr Interview', content: hr_interview },
  { id: 'interview-prep-introduction', title: '📖 Introduction', content: introduction },
  { id: 'interview-prep-resume-tips', title: 'Resume Tips', content: resume_tips },
  { id: 'interview-prep-technical-interview', title: 'Technical Interview', content: technical_interview },
];
