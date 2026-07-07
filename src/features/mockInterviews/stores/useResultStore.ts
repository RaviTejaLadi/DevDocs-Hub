// store/resultStore.ts
import { create } from 'zustand';

interface ResultStore {
  score: number;
  setScore: (score: number) => void;
  showResult: boolean;
  setShowResult: (show: boolean) => void;
  maxStreak: number;
  setMaxStreak: (streak: number) => void;
}

export const useResultStore = create<ResultStore>((set) => ({
  score: 0,
  setScore: (score) => set({ score }),
  showResult: false,
  setShowResult: (show) => set({ showResult: show }),
  maxStreak: 0,
  setMaxStreak: (streak) => set({ maxStreak: streak }),
}));
