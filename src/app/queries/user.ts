import api from '../config/api';

export const useUsers = () => api.useSuspenseQuery('get', '/users/', { queryKey: ['users'] });
