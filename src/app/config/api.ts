import { QueryClient } from '@tanstack/react-query';
import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { paths } from '../../generated/openapi';
import { FakeDataset, FakeUser } from '../../global';
import environment from './environment';

type FakePaths = {
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
  '/datasets/': {
    get: {
      responses: {
        200: {
          content: {
            'application/json': FakeDataset[];
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

const fetchClient = createFetchClient<paths & FakePaths>({
  baseUrl: environment.ATI_API_BASE_URL
});

const api = createClient(fetchClient);

export default api;
