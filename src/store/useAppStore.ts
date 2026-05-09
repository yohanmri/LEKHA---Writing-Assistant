import { create } from 'zustand';

interface AppState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidePanel: 'synonyms' | 'grammar' | 'dialect' | null;
  setSidePanel: (panel: 'synonyms' | 'grammar' | 'dialect' | null) => void;
  isKeyboardOpen: boolean;
  toggleKeyboard: () => void;
  documentTitle: string;
  setDocumentTitle: (title: string) => void;
  saveStatus: 'saved' | 'unsaved' | 'saving';
  setSaveStatus: (status: 'saved' | 'unsaved' | 'saving') => void;
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'HOME',
  setActiveTab: (tab) => set({ activeTab: tab.toUpperCase() }),
  sidePanel: null,
  setSidePanel: (panel) => set({ sidePanel: panel }),
  isKeyboardOpen: false,
  toggleKeyboard: () => set((state) => ({ isKeyboardOpen: !state.isKeyboardOpen })),
  documentTitle: 'ලේඛා ලියවිල්ල',
  setDocumentTitle: (title) => set({ documentTitle: title }),
  saveStatus: 'saved',
  setSaveStatus: (status) => set({ saveStatus: status }),
  zoomLevel: 100,
  setZoomLevel: (level) => set({ zoomLevel: level }),
}));
