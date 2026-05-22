import type { TopicItem } from '@/data/topics';
import leetcodeGuide from './leetcode-guide.md?raw';
import hackerrank from './hackerrank.md?raw';
import codewars from './codewars.md?raw';
import neetcode from './neetcode.md?raw';
import prampMockInterviews from './pramp-mock-interviews.md?raw';
import exercism from './exercism.md?raw';

export const practicePlatformsTopics: TopicItem[] = [
  { id: 'resources-leetcode-guide', title: '🟡 LeetCode Guide', content: leetcodeGuide },
  { id: 'resources-hackerrank', title: '💚 HackerRank', content: hackerrank },
  { id: 'resources-codewars', title: '⚔️ Codewars', content: codewars },
  { id: 'resources-neetcode', title: '📺 NeetCode', content: neetcode },
  { id: 'resources-pramp-mock-interviews', title: '🎤 Pramp Mock Interviews', content: prampMockInterviews },
  { id: 'resources-exercism', title: '🏋️ Exercism', content: exercism },
];
