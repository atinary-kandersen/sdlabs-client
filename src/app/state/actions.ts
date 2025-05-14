import { useGlobalStore } from './store';
import type { ThemeState } from './types';

export const setTheme = (theme: ThemeState) =>
  useGlobalStore.setState(state => ({
    ...state,
    theme
  }));
