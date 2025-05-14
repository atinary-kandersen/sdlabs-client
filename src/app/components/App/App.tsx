import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import ErrorFallbackRender from '../../../lib/common/components/error/ErrorFallbackRender';
import { queryClient } from '../../config/api';
import theme from '../../config/theme';
import SideNavPanel from '../SideNavPanel/SideNavPanel';
import styles from './App.module.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallbackRender}>
        <MantineProvider theme={theme}>
          <div id="app" className={styles.app}>
            <SideNavPanel />
            <main className={styles.main}>
              <Outlet />
            </main>
          </div>
        </MantineProvider>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
