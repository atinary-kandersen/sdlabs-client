import { up } from 'up-fetch';
import environment from './environment';

export const upfetch = up(fetch, () => ({
  baseUrl: environment.ATI_API_BASE_URL,
  timeout: environment.ATI_HTTP_REQUEST_TIMEOUT,
  reject: () => false,
  onError: error => {
    // if (isValidationError(error)) {
    //   return Promise.reject({
    //     message: 'up-fetch schema validation error',
    //     issues: error.issues
    //   });
    // }
    return Promise.reject(error);
  }
}));
