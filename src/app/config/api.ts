import { QueryClient } from '@tanstack/react-query';
import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { paths } from '../../generated/openapi';
import { FakeUser } from '../../global';
import environment from './environment';

type LocalPaths = {
  '/users/': {
    get: {
      responses: {
        200: {
          content: {
            'application/json': FakeUser[];
          };
        };
      };
    };
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const fetchClient = createFetchClient<paths & LocalPaths>({
  baseUrl: environment.ATI_API_BASE_URL
});

const api = createClient(fetchClient);

export default api;
