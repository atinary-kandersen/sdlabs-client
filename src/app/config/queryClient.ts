import { QueryClient } from '@tanstack/react-query';
import { isValidationError } from 'up-fetch';
import environment from './environment';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: environment.DEV,
      retry: (_failureCount: number, error: unknown) => {
        // Don't retry when we get up-fetch schema validation errors.
        return !isValidationError(error);
      }
    }
  }
});
