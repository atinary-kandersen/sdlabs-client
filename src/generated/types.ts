import { InferInput } from 'valibot';
import { experimentSchema } from './schemas';

export type ExperimentId = string;

export type Experiment = InferInput<typeof experimentSchema>;

export type ExperimentState = 'running' | 'paused' | 'stopped' | 'ready';

export type ExperimentUpdate = {
  experimentId: ExperimentId;
  state: ExperimentState;
  progress: number;
};

export type ServerToClientEvents = {
  experimentUpdate: (update: ExperimentUpdate) => void;
};
