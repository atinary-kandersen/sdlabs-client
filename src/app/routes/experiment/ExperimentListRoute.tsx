import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Experiment, ExperimentId } from '../../../global';
import ExperimentList from '../../../lib/experiment/ExperimentList';
import { Page } from '../../components/page/Page';
import { useExperiments } from '../../queries/experiment';

const filters = ['all', 'mine', 'watched', 'archived'] as const;
type Filter = (typeof filters)[number];

export default function ExperimentListRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useExperiments();
  const searchParams = new URLSearchParams(location.search);
  const activeFilter = searchParams.has('filter') && filters.includes(searchParams.get('filter') as Filter) ? searchParams.get('filter') : filters[0];
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
        <div className="wa-stack wa-gap-xl">
          <div className="wa-split">
            <div className="wa-cluster wa-gap-xl">
              <div className="wa-heading-m">Experiments</div>
              <div className="wa-cluster wa-gap-m">
                <div>
                  <wa-button-group>
                    {filters.map(filter => (
                      <wa-button
                        key={filter}
                        size="small"
                        variant={`${activeFilter === filter ? 'brand' : 'neutral'}`}
                        appearance={`${activeFilter !== filter ? 'outlined' : ''}`}
                        onClick={() => navigate({ search: `?filter=${filter}` })}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {filter}
                      </wa-button>
                    ))}
                  </wa-button-group>
                </div>
                <div>
                  <wa-input
                    type="text"
                    clearable
                    size="small"
                    placeholder="Search..."
                    autocomplete="off"
                    spellcheck="off"
                    autocapitalize="off"
                  ></wa-input>
                </div>
              </div>
            </div>
            <div className="wa-cluster">
              <wa-button size="small" variant="brand" onClick={() => navigate('create')}>
                Create experiment
              </wa-button>
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
