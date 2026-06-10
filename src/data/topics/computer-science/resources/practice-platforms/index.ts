import type { TopicItem } from '@/data/topics';
import leetcodeGuide from './leetcode-guide.mdx?raw';
import hackerrank from './hackerrank.mdx?raw';
import codewars from './codewars.mdx?raw';
import neetcode from './neetcode.mdx?raw';
import prampMockInterviews from './pramp-mock-interviews.mdx?raw';
import exercism from './exercism.mdx?raw';

export const practicePlatformsTopics: TopicItem[] = [
  { id: 'resources-leetcode-guide', title: '🟡 LeetCode Guide', content: leetcodeGuide },
  { id: 'resources-hackerrank', title: '💚 HackerRank', content: hackerrank },
  { id: 'resources-codewars', title: '⚔️ Codewars', content: codewars },
  { id: 'resources-neetcode', title: '📺 NeetCode', content: neetcode },
  { id: 'resources-pramp-mock-interviews', title: '🎤 Pramp Mock Interviews', content: prampMockInterviews },
  { id: 'resources-exercism', title: '🏋️ Exercism', content: exercism },
];
