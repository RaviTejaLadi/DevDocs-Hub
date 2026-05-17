import { useMemo, useState } from 'react';
import { INTERVIEW_QUESTIONS, INTERVIEW_TOPICS, TOPIC_CATEGORIES } from '@/data/interviewQuestions';

export function useTopicListFilter() {
  const categories = Object.keys(TOPIC_CATEGORIES);
  const [topicSearchQuery, setTopicSearchQuery] = useState('');

  const topicsByCategory = useMemo(
    () =>
      categories.reduce<Record<string, typeof INTERVIEW_TOPICS>>((acc, cat) => {
        acc[cat] = INTERVIEW_TOPICS.filter((t) => t.category === cat);
        return acc;
      }, {}),
    [categories]
  );

  const countForTopic = (topicId: string) => INTERVIEW_QUESTIONS.filter((q) => q.topicId === topicId).length;

  const totalQuestions = INTERVIEW_QUESTIONS.length;
  const totalTopics = INTERVIEW_TOPICS.length;
  const totalCategories = categories.length;
  const normalizedTopicSearchQuery = topicSearchQuery.trim().toLowerCase();

  const filteredTopicsByCategory = useMemo(() => {
    if (!normalizedTopicSearchQuery) return topicsByCategory;

    return categories.reduce<Record<string, typeof INTERVIEW_TOPICS>>((acc, category) => {
      const categoryMatches = category.toLowerCase().includes(normalizedTopicSearchQuery);
      acc[category] = topicsByCategory[category].filter((topic) => {
        if (categoryMatches) return true;
        return (
          topic.label.toLowerCase().includes(normalizedTopicSearchQuery) ||
          topic.id.toLowerCase().includes(normalizedTopicSearchQuery)
        );
      });
      return acc;
    }, {});
  }, [categories, normalizedTopicSearchQuery, topicsByCategory]);

  const filteredTopicsCount = useMemo(
    () => Object.values(filteredTopicsByCategory).reduce((count, topics) => count + topics.length, 0),
    [filteredTopicsByCategory]
  );

  const hasTopicSearch = Boolean(normalizedTopicSearchQuery);
  const clearTopicSearch = () => setTopicSearchQuery('');

  return {
    categories,
    topicSearchQuery,
    setTopicSearchQuery,
    filteredTopicsByCategory,
    filteredTopicsCount,
    hasTopicSearch,
    clearTopicSearch,
    countForTopic,
    totalQuestions,
    totalTopics,
    totalCategories,
  };
}
