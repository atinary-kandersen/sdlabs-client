import { Button, Loader, SegmentedControl } from '@mantine/core';
import { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { Experiment } from '../../../global';
import ExperimentList from '../../../lib/experiment/ExperimentList';
import { Page } from '../../components/page/Page';
import { useExperiments } from '../../queries/experiment';
import { useUsers } from '../../queries/user';
import { toggleWatchExperiment } from '../../state/actions';
import { useWatchedExperimentStore } from '../../state/store';

const filters = ['All', 'Mine', 'Watched', 'Archived'];
type Filter = (typeof filters)[number];

export default function ExperimentListRoute() {
  const users = useUsers();
  const experiments = useExperiments();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const activeFilter =
    searchParams.has('filter') && filters.includes(searchParams.get('filter') as Filter) ? searchParams.get('filter')! : filters[0];
  const watchedExperiments = useWatchedExperimentStore();

  return (
    <Page>
      <Page.Content>
        <div className="wa-stack wa-gap-2xl">
          <div className="wa-flank:end">
            <div className="wa-cluster">
              <h2>Experiments</h2>
              <SegmentedControl data={filters} value={activeFilter} onChange={filter => navigate({ search: `?filter=${filter}` })} />
            </div>
            <div>
              <Button onClick={() => navigate('create')}>Create experiment</Button>
            </div>
          </div>

          <Suspense name="ExperimentList" fallback={<Loader />}>
            {/* The real api will return experiments in experiments.data.result, but not json-server. */}
            <ExperimentList
              experiments={experiments.data as unknown as Experiment[]}
              users={users.data}
              toggleWatch={(experimentId, watch) => toggleWatchExperiment(experimentId, watch)}
              watchList={Array.from(watchedExperiments)}
            />
          </Suspense>
        </div>
      </Page.Content>
    </Page>
  );
}
