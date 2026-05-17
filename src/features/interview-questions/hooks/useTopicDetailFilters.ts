import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getQuestionsByTopic,
  getTopicById,
  type ExperienceLevel,
  type TopicId,
} from '@/data/interviewQuestions';

export function useTopicDetailFilters() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId as TopicId) : undefined;
  const allQuestions = useMemo(() => (topic ? getQuestionsByTopic(topic.id) : []), [topic]);

  const [levelFilter, setLevelFilter] = useState<ExperienceLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyCodeChallenges, setOnlyCodeChallenges] = useState(false);
  const [onlyTheory, setOnlyTheory] = useState(false);

  const hasAnyFilters = levelFilter !== 'all' || onlyCodeChallenges || onlyTheory || Boolean(searchQuery.trim());

  const clearAllFilters = () => {
    setLevelFilter('all');
    setOnlyCodeChallenges(false);
    setOnlyTheory(false);
    setSearchQuery('');
  };

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchLevel = levelFilter === 'all' || q.level === levelFilter;
      const matchSearch = !searchQuery.trim() || q.question.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const type = q.questionType ?? 'theory';
      const matchType =
        (!onlyCodeChallenges && !onlyTheory) ||
        (onlyCodeChallenges && type === 'coding') ||
        (onlyTheory && type === 'theory');
      return matchLevel && matchSearch && matchType;
    });
  }, [allQuestions, levelFilter, searchQuery, onlyCodeChallenges, onlyTheory]);

  const codingCount = allQuestions.filter((q) => (q.questionType ?? 'theory') === 'coding').length;
  const theoryCount = allQuestions.length - codingCount;

  const setOnlyCodeWithExclusion = (checked: boolean) => {
    setOnlyCodeChallenges(checked);
    if (checked) setOnlyTheory(false);
  };

  const setOnlyTheoryWithExclusion = (checked: boolean) => {
    setOnlyTheory(checked);
    if (checked) setOnlyCodeChallenges(false);
  };

  return {
    topic,
    allQuestions,
    filteredQuestions,
    levelFilter,
    setLevelFilter,
    searchQuery,
    setSearchQuery,
    onlyCodeChallenges,
    onlyTheory,
    setOnlyCodeWithExclusion,
    setOnlyTheoryWithExclusion,
    hasAnyFilters,
    clearAllFilters,
    codingCount,
    theoryCount,
  };
}
