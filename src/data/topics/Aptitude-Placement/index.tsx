import type { Topic } from '@/data/topics';
import { Calculator, Puzzle, BookOpen, Briefcase } from 'lucide-react';
import { quantitativeAptitudeTopics } from './quantitative-aptitude';
import { logicalReasoningTopics } from './logical-reasoning';
import { verbalAbilityTopics } from './verbal-ability';
import { interviewPrepTopics } from './interview-prep';

const CATEGORY = 'aptitude-placement';

export const aptitudePlacementTopics: Topic[] = [
  {
    id: 'quantitative-aptitude',
    title: 'Quantitative Aptitude',
    description: 'Percentages, profit-loss, time-work, speed-distance, and number systems.',
    icon: <Calculator className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: quantitativeAptitudeTopics,
  },
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    description: 'Puzzles, blood relations, coding-decoding, and syllogisms.',
    icon: <Puzzle className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: logicalReasoningTopics,
  },
  {
    id: 'verbal-ability',
    title: 'Verbal Ability',
    description: 'Reading comprehension, grammar, vocabulary, and para jumbles.',
    icon: <BookOpen className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: verbalAbilityTopics,
  },
  {
    id: 'aptitude-interview-prep',
    title: 'Interview Preparation',
    description: 'HR, technical interviews, group discussion, and resume tips.',
    icon: <Briefcase className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: interviewPrepTopics,
  },
];
