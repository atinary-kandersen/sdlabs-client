import api from '../config/api';

export const useDatasets = () => api.useSuspenseQuery('get', '/datasets/', { queryKey: ['datasets'] });
