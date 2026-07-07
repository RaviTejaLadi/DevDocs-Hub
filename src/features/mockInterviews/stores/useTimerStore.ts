// store/timerStore.ts
import { create } from 'zustand';

interface TimerStore {
  isTimerActive: boolean;
  setIsTimerActive: (active: boolean) => void;
}

export const useTimerStore = create<TimerStore>((set) => ({
  isTimerActive: false,
  setIsTimerActive: (active) => set({ isTimerActive: active }),
}));
