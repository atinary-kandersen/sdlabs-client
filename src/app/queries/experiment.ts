import { ExperimentId } from '../../global';
import api from '../config/api';

export const useExperiments = () => api.useQuery('get', '/experiments/', { queryKey: ['experiments'] });
export const useExperimentDetails = (experiment_id: ExperimentId) =>
  api.useQuery('get', `/experiments/{experiment_id}/`, { params: { path: { experiment_id } }, queryKey: ['experiments', experiment_id] });

export const useCreateExperiment = () => api.useMutation('post', '/experiments/');
