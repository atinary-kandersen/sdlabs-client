import { Button, Divider, Title } from '@mantine/core';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import type { InferOutput } from 'valibot';
import { picklist, safeParse } from 'valibot';
import Loading from '../../../lib/common/components/Loading/Loading';
import ExperimentNavigation from '../../../lib/experiment/ExperimentDetails/ExperimentNavigation';
import WatchSwitch from '../../../lib/experiment/WatchSwitch/WatchSwitch';
import { Page } from '../../components/page/Page';
import { useExperimentDetails } from '../../queries/experiment';
import { toggleWatchExperiment } from '../../state/actions';
import { useWatchedExperimentStore } from '../../state/store';

const configurationPaths = ['parameters', 'objectives', 'constraints', 'batching', 'optimizer'];
const configurationPathSchema = picklist(configurationPaths);
type ConfigurationNav = InferOutput<typeof configurationPathSchema>;

export default function ExperimentDetailsRoute() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const experimentDetails = useExperimentDetails(experimentId);
  const watchedExperiments = useWatchedExperimentStore();
  const location = useLocation();
  const [selectedConfigurationPath, setSelectedConfigurationPath] = useState<null | ConfigurationNav>(null);

  useEffect(() => {
    const subPath = location.pathname.substring(location.pathname.indexOf(experimentId) + experimentId.length + 1);
    const parseResult = safeParse(configurationPathSchema, subPath);
    setSelectedConfigurationPath(parseResult.success ? parseResult.output : null);
  }, [experimentId, location]);

  const { name } = experimentDetails.data;

  return (
    <Page>
      <Page.Content>
        <Suspense fallback={<Loading />}>
          <div className="wa-stack wa-gap-xl">
            <div className="wa-stack wa-gap-xl">
              <div className="wa-flank:end">
                <div className="wa-cluster">
                  <img src="https:enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" style={{ height: 100 }} />
                  <Title>{name}</Title>
                </div>
                <div className="wa-cluster wa-gap-2xl">
                  <WatchSwitch watched={watchedExperiments.has(experimentId)} setWatch={watch => toggleWatchExperiment(experimentId, watch)} />
                  <Button
                    variant="brand"
                    style={{ minWidth: 250, maxWidth: 300, height: '3rem', boxShadow: 'var(--mantine-shadow-md)', fontSize: '1rem' }}
                  >
                    Run optimization
                  </Button>
                </div>
              </div>
            </div>
            <ExperimentNavigation selectedConfigurationPath={selectedConfigurationPath} />
            <Divider />
            <Outlet />
          </div>
        </Suspense>
      </Page.Content>
    </Page>
  );
}
