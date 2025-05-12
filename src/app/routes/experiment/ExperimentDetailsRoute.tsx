import { Center, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import { InferOutput, picklist, safeParse } from 'valibot';
import ExperimentDetailsHeader from '../../../lib/experiment/ExperimentDetailsHeader';
import ExperimentNavigation from '../../../lib/experiment/ExperimentNavigation';
import { Page } from '../../components/page/Page';
import { useExperimentDetails } from '../../queries/experiment';

const configurationPaths = ['parameters', 'objectives', 'constraints', 'batching', 'optimizer'];
const configurationPathSchema = picklist(configurationPaths);
type ConfigurationNav = InferOutput<typeof configurationPathSchema>;

export default function ExperimentDetailsRoute() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const query = useExperimentDetails(experimentId);
  const location = useLocation();
  const [selectedConfigurationPath, setSelectedConfigurationPath] = useState<null | ConfigurationNav>(null);

  useEffect(() => {
    const subPath = location.pathname.substring(location.pathname.indexOf(experimentId) + experimentId.length + 1);
    const parseResult = safeParse(configurationPathSchema, subPath);
    setSelectedConfigurationPath(parseResult.success ? parseResult.output : null);
  }, [experimentId, location]);

  if (query.isLoading) {
    return (
      <Center w="100%" h="100%">
        <Loader />
      </Center>
    );
  } else if (!query.data) {
    return <h4>Error loading experiment</h4>;
  }

  const experimentDetails = query.data;

  return (
    <Page>
      <Page.Content>
        <div className="wa-stack wa-gap-xl">
          <ExperimentDetailsHeader name={experimentDetails.name} />

          <ExperimentNavigation selectedConfigurationPath={selectedConfigurationPath} />

          {/* <Divider /> */}
          <div style={{ height: '2rem' }}></div>
          <Outlet />
        </div>
      </Page.Content>
    </Page>
  );
}
