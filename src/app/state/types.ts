import type { ExperimentId } from '../../global';

export type ThemeState = 'light' | 'dark';

export type StoreState = {
  theme: ThemeState;
  watchedExperiments: Set<ExperimentId>;
};
