import { Badge, Progress } from '@mantine/core';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Dataset } from '../../global';
import IconButton from '../common/components/IconButton/IconButton';
import commonStyles from '../common/styles/common.module.css';
import generateLoremIpsum from '../utils/generateLoremIpsum';
import styles from './DatasetList.module.css';

export default function DatasetList({ datasets }: { datasets: Dataset[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Dataset</th>
          <th></th>
          <th>Produced by</th>
          <th>Used by</th>
        </tr>
      </thead>
      <tbody>
        {datasets.map((dataset, index) => (
          <tr key={index} className={classNames({ [styles.uploading]: index === 0 })}>
            {index === 0 && (
              <td data-name>
                <div className="wa-flank:start">
                  <div className="wa-cluster wa-gap-s">
                    <wa-icon name="file-csv" variant="light"></wa-icon>
                    {dataset.name}
                  </div>
                  <div style={{ width: '100%' }}>
                    <Progress value={70} style={{ maxWidth: 400 }} />
                  </div>
                </div>
              </td>
            )}
            {index > 0 && (
              <td data-name>
                <Link to={dataset.id} className={classNames(styles.itemLink, commonStyles.linkTransparent)}>
                  <wa-icon name="file-csv" variant="light"></wa-icon>
                  {dataset.name}
                </Link>
              </td>
            )}
            <td data-menu>
              {index > 0 && (
                <>
                  <IconButton icon="flask" to="/experiments/create" size="lg">
                    <wa-icon name="flask" variant="regular"></wa-icon>
                  </IconButton>
                  <IconButton to="/analytics" size="lg">
                    <wa-icon name="chart-simple" variant="regular"></wa-icon>
                  </IconButton>
                </>
              )}
            </td>
            <td data-produced-by>
              <div>
                {index > 0 &&
                  Array.from({ length: Math.floor(Math.random() * 3) }).map((_, index) => (
                    <Badge
                      key={index}
                      size="sm"
                      color="var(--mantine-color-gray-6)"
                      autoContrast
                      leftSection={<wa-icon name="flask" variant="light"></wa-icon>}
                    >
                      {generateLoremIpsum(2)}
                    </Badge>
                  ))}
              </div>
            </td>
            <td data-used-by>
              {index > 0 &&
                Array.from({ length: Math.floor(Math.random() * 3) }).map((_, index) => (
                  <Badge
                    key={index}
                    size="sm"
                    color="var(--mantine-color-gray-6)"
                    autoContrast
                    leftSection={<wa-icon name="flask" variant="light"></wa-icon>}
                  >
                    {generateLoremIpsum(2)}
                  </Badge>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
