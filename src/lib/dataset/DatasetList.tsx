import { faker } from '@faker-js/faker';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Dataset } from '../../global';
import styles from './DatasetList.module.css';

export default function DatasetList({ datasets }: { datasets: Dataset[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Dataset</th>
          <th></th>
          <th>Produced by</th>
        </tr>
      </thead>
      <tbody>
        {datasets.map((dataset, index) => (
          <tr key={index} className={classNames({ [styles.uploading]: index === 0 })}>
            {index === 0 && (
              <td data-name>
                <div className="wa-flank:start">
                  <div className="wa-cluster wa-gap-s">
                    <wa-icon name="file" variant="light"></wa-icon>
                    {dataset.name}
                  </div>
                  <div style={{ width: '100%' }}>
                    <wa-progress-bar value="70" style={{ height: 6 }}></wa-progress-bar>
                  </div>
                </div>
              </td>
            )}
            {index > 0 && (
              <td data-name>
                <Link to={dataset.id} className={styles.itemLink}>
                  <wa-icon name="file" variant="light"></wa-icon>
                  {dataset.name}
                </Link>
              </td>
            )}
            <td data-menu>
              {index > 0 && (
                <>
                  <wa-icon-button name="flask" variant="light" href="/experiments/create"></wa-icon-button>
                  <wa-icon-button name="chart-simple" variant="light" href="/analytics"></wa-icon-button>
                </>
              )}
            </td>
            <td data-produced-by>
              {index > 0 &&
                Array.from({ length: Math.floor(Math.random() * 4) }).map((_, index) => (
                  <wa-badge key={index} appearance="filled outlined" variant="neutral">
                    {faker.science.chemicalElement().name}_{faker.science.chemicalElement().name}
                  </wa-badge>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
