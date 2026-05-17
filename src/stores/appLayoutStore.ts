import { create } from 'zustand';

type AppLayoutState = {
  mobileSidebarOpen: boolean;
  docsSidebarCollapsed: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  setDocsSidebarCollapsed: (collapsed: boolean) => void;
  toggleDocsSidebarCollapsed: () => void;
};

export const useAppLayoutStore = create<AppLayoutState>((set) => ({
  mobileSidebarOpen: false,
  docsSidebarCollapsed: true,
  setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),
  setDocsSidebarCollapsed: (collapsed) => set({ docsSidebarCollapsed: collapsed }),
  toggleDocsSidebarCollapsed: () => set((state) => ({ docsSidebarCollapsed: !state.docsSidebarCollapsed })),
}));
