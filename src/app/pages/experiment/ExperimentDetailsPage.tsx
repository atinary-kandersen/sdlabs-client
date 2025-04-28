import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router';
import ExperimentDetails from '../../../lib/features/experiment/ExperimentDetails';
import socket from '../../config/socket';
import { useExperimentDetails } from '../../queries/experiment';
import { useExperimentsStore } from '../../state/store';

function ExperimentDetailsPage() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const query = useExperimentDetails(experimentId);
  const update = useExperimentsStore().get(experimentId);

  useEffect(() => {
    if (query.data) {
      // Simulate server sending experimentUpdate event.
      socket.emit('experimentUpdate', {
        experimentId,
        state: 'running',
        progress: 60
      });
    }

    // return () => resetExperiment(experimentId);
  }, [query.data]);

  return (
    <>
      <NavLink to="/experiments" className="wa-button wa-plain wa-neutral">
        <wa-icon name="arrow-left"></wa-icon>
        Back to experiments
      </NavLink>

      {query.isLoading && <p>Loading ...</p>}
      {query.isError && <p>Error loading experiments.</p>}
      {query.data && (
        <ExperimentDetails
          experiment={query.data}
          state={update?.state}
          progress={update?.progress}
        />
      )}
    </>
  );
}

export default ExperimentDetailsPage;
