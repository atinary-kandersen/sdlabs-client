import type { ExperimentId } from '../../global';
import { useGlobalStore } from './store';
import type { ThemeState } from './types';

export const setTheme = (theme: ThemeState) =>
  useGlobalStore.setState(state => ({
    ...state,
    theme
  }));

export const toggleWatchExperiment = (experimentId: ExperimentId, watch: boolean) =>
  useGlobalStore.setState(state => {
    const watchedExperiments = new Set(state.watchedExperiments);
    if (watch) {
      watchedExperiments.add(experimentId);
    } else {
      watchedExperiments.delete(experimentId);
    }
    return {
      ...state,
      watchedExperiments
    };
  });
