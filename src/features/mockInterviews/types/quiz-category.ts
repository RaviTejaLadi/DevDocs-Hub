import type { Quiz } from './quiz';

export interface QuizCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  quizzes: Quiz[];
}
