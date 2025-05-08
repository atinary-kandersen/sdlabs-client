import { Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedConfigurationPath, setSelectedConfigurationPath] = useState<null | ConfigurationNav>(null);

  useEffect(() => {
    const subPath = location.pathname.substring(location.pathname.indexOf(experimentId) + experimentId.length + 1);
    const parseResult = safeParse(configurationPathSchema, subPath);
    setSelectedConfigurationPath(parseResult.success ? parseResult.output : null);
  }, [experimentId, location]);

  const onSelectedConfigurationPath = (configurationPath: string) => navigate(configurationPath);

  if (query.isLoading) {
    return <div>Loading...</div>;
  } else if (!query.data) {
    return <h4>Error loading experiment</h4>;
  }

  const experimentDetails = query.data;

  return (
    <Page>
      <Page.Content>
        <ExperimentDetailsHeader name={experimentDetails.name} />

        <ExperimentNavigation selectedConfigurationPath={selectedConfigurationPath} onSelectedConfigurationPath={onSelectedConfigurationPath} />
        <Divider />
        {/* <wa-tab-group>
          <wa-tab panel="general">Home</wa-tab>
          <wa-tab panel="custom">Insights</wa-tab>
          <wa-tab panel="advanced">History</wa-tab>
          <wa-tab panel="advanced">Configuration</wa-tab>

          <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
          <wa-tab-panel name="custom">This is the custom tab panel.</wa-tab-panel>
          <wa-tab-panel name="advanced">This is the advanced tab panel.</wa-tab-panel>
          <wa-tab-panel name="disabled">This is a disabled tab panel.</wa-tab-panel>
        </wa-tab-group> */}
        {/* <wa-divider></wa-divider> */}
        <div style={{ height: '2rem' }}></div>
        <Outlet />
      </Page.Content>
    </Page>
  );
}
