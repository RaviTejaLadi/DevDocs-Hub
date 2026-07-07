// store/quizDataStore.ts
import { create } from 'zustand';
import type { Quiz } from '../types/quiz';

interface QuizDataStore {
  selectedQuiz: Quiz | null;
  setSelectedQuiz: (quiz: Quiz | null) => void;
  answers: Record<number, number>;
  setAnswers: (answers: Record<number, number>) => void;
}

export const useQuizDataStore = create<QuizDataStore>((set) => ({
  selectedQuiz: null,
  setSelectedQuiz: (quiz) => set({ selectedQuiz: quiz }),
  answers: {},
  setAnswers: (answers) => set({ answers }),
}));
