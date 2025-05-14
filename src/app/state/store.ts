import { create } from 'zustand';
import type { StoreState } from './types';

export const useGlobalStore = create<StoreState>(() => ({
  /**
   * Ideally the initial state should be injected by the server into ie. index.html,
   * so the client doesn't have to request it on page load.
   */
  theme: 'light',
  watchedExperiments: new Set()
}));

export const useThemeStore = () => useGlobalStore(state => state.theme);
export const useWatchedExperimentStore = () => useGlobalStore(state => state.watchedExperiments);
