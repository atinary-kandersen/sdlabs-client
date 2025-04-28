import { NavLink } from 'react-router';
import ExperimentListItem from '../../../lib/features/experiment/ExperimentListItem';
import { useExperiments } from '../../queries/experiment';

const ExperimentsPage = () => {
  const query = useExperiments();

  return (
    <>
      <h3>Experiments</h3>

      {query.isLoading && <p>Loading ...</p>}
      {query.isError && <p>Error loading experiments.</p>}

      {query.data && (
        <div>
          {query.data.map(item => (
            <NavLink to={item.id} key={item.id}>
              <ExperimentListItem item={item} />
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default ExperimentsPage;
