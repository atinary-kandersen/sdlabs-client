import { useQuery } from '@tanstack/react-query';
import { experimentSchema, experimentsSchema } from '../../generated/schemas';
import { Experiment } from '../../generated/types';
import { upfetch } from '../config/upfetch';

export const useExperiments = () =>
  useQuery<Array<Experiment>>({
    queryKey: ['experiments'],
    queryFn: () =>
      upfetch('/experiments', {
        schema: experimentsSchema
      })
  });

export const useExperimentDetails = (experimentId?: string) =>
  useQuery<Experiment>({
    queryKey: ['experiments', experimentId],
    queryFn: () =>
      upfetch(`/experiments/${experimentId}`, {
        schema: experimentSchema
      }),
    enabled: Boolean(experimentId)
  });
