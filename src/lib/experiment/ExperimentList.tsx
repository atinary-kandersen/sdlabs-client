import classNames from 'classnames';
import { Link } from 'react-router';
import { Experiment, ExperimentId } from '../../global';
import styles from './ExperimentList.module.css';

export default function ExperimentList({
  experiments,
  toggleWatch,
  watchList
}: {
  experiments: Experiment[];
  toggleWatch?: (experimentId: ExperimentId) => void;
  watchList?: ExperimentId[];
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th data-status>Status</th>
          <th data-name>Name</th>
          {watchList && <th data-watch>Watch</th>}
          <th data-iterations>Iterations</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {experiments.map(experiment => {
          const watched = watchList?.includes(experiment.id) || false;

          return (
            <tr key={experiment.id} className={classNames({ [styles.watched]: watched })}>
              <td data-status>
                <wa-badge appearance="filled" variant="success">
                  Running
                </wa-badge>
              </td>
              <td data-name>
                <Link to={experiment.id} className={styles.itemLink}>
                  <wa-icon name="flask" variant="light"></wa-icon>
                  {experiment.name}
                </Link>
              </td>
              {watchList && (
                <td data-watch>
                  <wa-icon-button
                    name={watched ? 'eye' : 'eye-slash'}
                    variant={watched ? 'regular' : 'light'}
                    onClick={() => typeof toggleWatch === 'function' && toggleWatch(experiment.id)}
                  ></wa-icon-button>
                </td>
              )}
              <td data-iteration>
                <wa-badge appearance="filled" variant="neutral">
                  {Math.floor(Math.random() * 20)}
                </wa-badge>
              </td>
              <td>
                <wa-icon-button name="ellipsis-vertical" variant="regular"></wa-icon-button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
