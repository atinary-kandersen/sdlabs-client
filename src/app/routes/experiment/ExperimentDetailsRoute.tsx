import { Button, Divider, Title } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Loading from '../../../lib/common/components/Loading/Loading';
import ExperimentNavigation from '../../../lib/experiment/ExperimentDetails/ExperimentNavigation';
import WatchSwitch from '../../../lib/experiment/WatchSwitch/WatchSwitch';
import { Page } from '../../components/page/Page';
import { useExperimentDetails } from '../../queries/experiment';
import { toggleWatchExperiment } from '../../state/actions';
import { useWatchedExperimentStore } from '../../state/store';

export default function ExperimentDetailsRoute() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const experimentDetails = useExperimentDetails(experimentId);
  const watchedExperiments = useWatchedExperimentStore();
  const location = useLocation();
  const subPath = location.pathname.substring(location.pathname.indexOf(experimentId) + experimentId.length + 1);
  const { name } = experimentDetails.data;

  return (
    <Page>
      <Page.Content>
        <Suspense fallback={<Loading />}>
          <div className="wa-stack wa-gap-m">
            <div className="wa-flank:end">
              <div className="wa-cluster">
                {/* <img src="https:enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" style={{ height: 80 }} /> */}
                <wa-icon name="flask" style={{ fontSize: '1.5rem', color: 'var(--mantine-color-gray-filled)' }}></wa-icon>
                <Title size="h2">{name}</Title>
              </div>
              <div className="wa-cluster wa-gap-2xl">
                <Button
                  variant="brand"
                  style={{ minWidth: 250, maxWidth: 300, height: '3rem', boxShadow: 'var(--mantine-shadow-md)', fontSize: '1rem' }}
                >
                  Run optimization
                </Button>
              </div>
            </div>
            <div className="wa-flank:end">
              <ExperimentNavigation subPath={subPath} />
              <div className="wa-cluster wa-gap-xl">
                <WatchSwitch watched={watchedExperiments.has(experimentId)} setWatch={watch => toggleWatchExperiment(experimentId, watch)} />
              </div>
            </div>
            <Divider variant="dashed" mb={20} />
            <Outlet />
          </div>
        </Suspense>
      </Page.Content>
    </Page>
  );
}
