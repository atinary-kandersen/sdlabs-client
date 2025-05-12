import { Button, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Experiment, ExperimentId } from '../../../global';
import ExperimentList from '../../../lib/experiment/ExperimentList';
import { Page } from '../../components/page/Page';
import { useExperiments } from '../../queries/experiment';

const filters = ['All', 'Mine', 'Watched', 'Archived'];
type Filter = (typeof filters)[number];

export default function ExperimentListRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useExperiments();
  const searchParams = new URLSearchParams(location.search);
  const activeFilter =
    searchParams.has('filter') && filters.includes(searchParams.get('filter') as Filter) ? searchParams.get('filter')! : filters[0];
  const [watchList, setWatchList] = useState<Array<ExperimentId>>([]);

  function toggleWatch(experimentId: ExperimentId) {
    if (watchList.includes(experimentId)) {
      setWatchList(watchList.filter(id => id !== experimentId));
    } else {
      setWatchList([...watchList, experimentId]);
    }
  }

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

          <div>
            {query.isLoading && <p>Loading ...</p>}
            {query.isError && <p>Error loading experiments.</p>}

            {/* the real api will return experiments in query.data.result, but not json-server */}
            {/* {query.data && <ExperimentList experiments={query.data.results} />} */}
            {query.data && <ExperimentList experiments={query.data as unknown as Experiment[]} toggleWatch={toggleWatch} watchList={watchList} />}
          </div>
        </div>
      </Page.Content>
    </Page>
  );
}
