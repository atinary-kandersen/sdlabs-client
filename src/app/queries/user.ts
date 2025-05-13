import api from '../config/api';

export const useUsers = () => api.useQuery('get', '/users/', { queryKey: ['users'] });
