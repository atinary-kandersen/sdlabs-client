import { Badge } from '@mantine/core';
import classNames from 'classnames';
import { Link } from 'react-router';
import type { Experiment, ExperimentId, FakeUser } from '../../global';
import IconButton from '../common/components/IconButton/IconButton';
import commonStyles from '../common/styles/common.module.css';
import styles from './ExperimentList.module.css';

export default function ExperimentList({
  experiments,
  users,
  toggleWatch,
  watchList
}: {
  experiments: Experiment[];
  users: FakeUser[];
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
          <th data-lead>Lead</th>
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
                {Math.random() > 0.5 && (
                  <Badge size="sm" radius="sm" color="lime.2" autoContrast fullWidth>
                    Running
                  </Badge>
                )}
              </td>
              <td data-name>
                <Link to={experiment.id} className={classNames(styles.itemLink, commonStyles.linkTransparent)}>
                  <wa-icon name="flask" variant="light" style={{ color: 'var(--mantine-color-gray-6)' }}></wa-icon>
                  {experiment.name}
                </Link>
              </td>

              {watchList && (
                <td data-watch>
                  <IconButton onClick={() => typeof toggleWatch === 'function' && toggleWatch(experiment.id)}>
                    <wa-icon
                      name={watched ? 'eye' : 'eye-slash'}
                      variant={watched ? 'regular' : 'light'}
                      size="lg"
                      style={{ color: watched ? 'var(--mantine-color-green-7)' : 'var(--mantine-color-gray-5)' }}
                    ></wa-icon>
                  </IconButton>
                </td>
              )}
              <td data-lead>
                <Badge size="sm" radius="sm" color="cyan.1" autoContrast style={{ minWidth: 90 }}>
                  {users[Math.floor(Math.random() * users.length)].firstName}
                </Badge>
              </td>
              <td data-iteration>
                <Badge color="gray.2" size="sm" radius="sm" autoContrast>
                  {Math.floor(experiment.name.length / 2)}
                </Badge>
              </td>
              <td>
                <IconButton>
                  <wa-icon name="ellipsis-vertical"></wa-icon>
                </IconButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
