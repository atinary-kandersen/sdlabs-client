import { QueryClient } from '@tanstack/react-query';
import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { paths } from '../../generated/openapi';
import environment from './environment';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const fetchClient = createFetchClient<paths>({
  baseUrl: environment.ATI_API_BASE_URL
});

const api = createClient(fetchClient);

export default api;
