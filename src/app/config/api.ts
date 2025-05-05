import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { paths } from '../../generated/openapi';
import environment from './environment';

const fetchClient = createFetchClient<paths>({
  baseUrl: environment.ATI_API_BASE_URL
});

const api = createClient(fetchClient);

export default api;
