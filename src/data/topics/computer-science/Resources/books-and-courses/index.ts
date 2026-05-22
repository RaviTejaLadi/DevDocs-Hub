import type { TopicItem } from '@/data/topics';
import freeLearningResources from './free-learning-resources.md?raw';
import paidCourses from './paid-courses.md?raw';
import youtubeChannels from './youtube-channels.md?raw';
import mustReadBooks from './must-read-books.md?raw';
import documentationFirstLearning from './documentation-first-learning.md?raw';

export const booksAndCoursesTopics: TopicItem[] = [
  { id: 'resources-free-learning-resources', title: '🆓 Free Learning Resources', content: freeLearningResources },
  { id: 'resources-paid-courses', title: '💳 Paid Courses', content: paidCourses },
  { id: 'resources-youtube-channels', title: '📺 YouTube Channels', content: youtubeChannels },
  { id: 'resources-must-read-books', title: '📚 Must-Read Books', content: mustReadBooks },
  {
    id: 'resources-documentation-first-learning',
    title: '📖 Documentation-First Learning',
    content: documentationFirstLearning,
  },
];
