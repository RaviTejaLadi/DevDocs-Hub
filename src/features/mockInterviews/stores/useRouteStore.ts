// store/routeStore.ts
import { create } from 'zustand';

interface RouteStore {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

export const useRouteStore = create<RouteStore>((set) => ({
  currentRoute: 'home',
  setCurrentRoute: (route) => set({ currentRoute: route }),
}));
