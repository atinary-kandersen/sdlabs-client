import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import { ExperimentUpdate } from '../generated/types';
import ErrorFallbackRender from '../lib/common/error/ErrorFallbackRender';
import styles from './App.module.css';
import Header from './components/header/Header';
import { queryClient } from './config/queryClient';
import socket from './config/socket';
import { useGlobalStore } from './state/store';

export function App() {
  useEffect(() => {
    // Update global state with experiment updates.
    const onExperimentUpdate = ({
      experimentId,
      ...update
    }: ExperimentUpdate) =>
      useGlobalStore.setState(state => ({
        ...state,
        experiments: new Map(state.experiments).set(experimentId, update)
      }));
    socket.on('experimentUpdate', onExperimentUpdate);
    return () => {
      socket.off('experimentUpdate', onExperimentUpdate);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallbackRender}>
        <div id="app" className={styles.app}>
          <Header />
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
