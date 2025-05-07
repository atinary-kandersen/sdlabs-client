import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import ErrorFallbackRender from '../lib/common/components/error/ErrorFallbackRender';
import styles from './App.module.css';
import SideNavPanel from './components/SideNavPanel/SideNavPanel';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallbackRender}>
        <div id="app" className={styles.app}>
          <SideNavPanel />
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
