import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import { InferOutput, picklist, safeParse } from 'valibot';
import Loading from '../../../lib/common/components/Loading/Loading';
import ExperimentDetailsHeader from '../../../lib/experiment/ExperimentDetailsHeader';
import ExperimentNavigation from '../../../lib/experiment/ExperimentNavigation';
import { Page } from '../../components/page/Page';
import { useExperimentDetails } from '../../queries/experiment';

const configurationPaths = ['parameters', 'objectives', 'constraints', 'batching', 'optimizer'];
const configurationPathSchema = picklist(configurationPaths);
type ConfigurationNav = InferOutput<typeof configurationPathSchema>;

export default function ExperimentDetailsRoute() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const experimentDetails = useExperimentDetails(experimentId);
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
            <ExperimentDetailsHeader name={name} />
            <ExperimentNavigation selectedConfigurationPath={selectedConfigurationPath} />

            {/* <Divider /> */}
            <div style={{ height: '2rem' }}></div>
            <Outlet />
          </div>
        </Suspense>
      </Page.Content>
    </Page>
  );
}
