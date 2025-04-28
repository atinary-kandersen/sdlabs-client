import type { ExperimentId, ExperimentUpdate } from '../../generated/types';

export type ThemeState = 'light' | 'dark';

export type ExperimentsState = Map<
  ExperimentId,
  Pick<ExperimentUpdate, 'state' | 'progress'>
>;

export type StoreState = {
  theme: ThemeState;
  experiments: ExperimentsState;
};
