import { ActionIcon, Badge } from '@mantine/core';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Experiment, ExperimentId } from '../../global';
import IconButton from '../common/components/IconButton/IconButton';
import commonStyles from '../common/styles/common.module.css';
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
                <Badge size="sm" fullWidth color="lime" radius="sm">
                  Running
                </Badge>
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
                      style={{ color: watched ? 'var(--mantine-color-green-5)' : 'var(--mantine-color-gray-5)' }}
                    ></wa-icon>
                  </IconButton>
                </td>
              )}
              <td data-iteration>
                <Badge color="gray" size="sm" variant="outline">
                  {Math.floor(Math.random() * 20)}
                </Badge>
              </td>
              <td>
                <ActionIcon size="sm" color="gray" variant="transparent">
                  <wa-icon name="ellipsis-vertical"></wa-icon>
                </ActionIcon>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
