import type { LucideIcon } from 'lucide-react';
import {
  FileCode,
  Palette,
  Code2,
  Type,
  Globe,
  Database,
  Server,
  Boxes,
} from 'lucide-react';

export type TopicId =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'node'
  | 'sql'
  | 'mongodb'
  | 'system-design';

export type ExperienceLevel = 'entry' | 'junior' | 'mid' | 'senior' | 'expert';

export const LEVEL_ORDER: ExperienceLevel[] = ['entry', 'junior', 'mid', 'senior', 'expert'];

export const LEVEL_LABELS: Record<ExperienceLevel, string> = {
  entry: 'Entry',
  junior: 'Junior',
  mid: 'Mid',
  senior: 'Senior',
  expert: 'Expert',
};

export interface InterviewTopic {
  id: TopicId;
  label: string;
  icon: LucideIcon;
  category: string;
}

/** 'coding' = code challenge / implementation; 'theory' = conceptual (default for existing questions) */
export type QuestionType = 'coding' | 'theory';

export interface InterviewQA {
  id: string;
  question: string;
  /** Markdown: bullets, code blocks, **bold**, lists, etc. */
  answer: string;
  topicId: TopicId;
  level: ExperienceLevel;
  /** When omitted, treated as 'theory' for filtering. */
  questionType?: QuestionType;
}

export const TOPIC_CATEGORIES: Record<string, string> = {
  'Full-Stack & Web': 'Full-Stack & Web',
  'Backend & Data': 'Backend & Data',
  Architecture: 'Architecture',
};

export const INTERVIEW_TOPICS: InterviewTopic[] = [
  { id: 'html', label: 'HTML', icon: FileCode, category: 'Full-Stack & Web' },
  { id: 'css', label: 'CSS', icon: Palette, category: 'Full-Stack & Web' },
  { id: 'javascript', label: 'JavaScript', icon: Code2, category: 'Full-Stack & Web' },
  { id: 'typescript', label: 'TypeScript', icon: Type, category: 'Full-Stack & Web' },
  { id: 'react', label: 'React', icon: Globe, category: 'Full-Stack & Web' },
  { id: 'node', label: 'Node.js', icon: Server, category: 'Backend & Data' },
  { id: 'sql', label: 'SQL', icon: Database, category: 'Backend & Data' },
  { id: 'mongodb', label: 'MongoDB', icon: Database, category: 'Backend & Data' },
  { id: 'system-design', label: 'System Design', icon: Boxes, category: 'Architecture' },
];

export function getTopicById(topicId: TopicId): InterviewTopic | undefined {
  return INTERVIEW_TOPICS.find((t) => t.id === topicId);
}
