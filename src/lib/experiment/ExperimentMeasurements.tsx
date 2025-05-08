import { TextInput } from '@mantine/core';
import classNames from 'classnames';
import commonStyles from '../common/styles/common.module.css';
import styles from './ExperimentMeasurements.module.css';

const ExperimentMeasurements = () => {
  return (
    <div className={classNames(styles.scrollContainer, commonStyles.focusBox)}>
      <table>
        <thead>
          <tr>
            <th style={{ width: 60 }}>Batch</th>
            <th className={styles.parameter}>Acid amount</th>
            <th className={styles.parameter}>Additive 1</th>
            <th className={styles.parameter}>Additive 2</th>
            <th className={styles.parameter}>Additive 3</th>
            <th className={styles.parameter}>Temparature</th>
            <th className={styles.parameter}>Time</th>
            <th style={{ width: '100%' }}></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
              <td className={styles.batchNumber}>{i + 1}</td>
              <td>{Math.random().toFixed(10)}</td>
              <td>{Math.random().toFixed(2)}</td>
              <td>{Math.random().toFixed(2)}</td>
              <td>{Math.random().toFixed(1)}</td>
              <td>
                <TextInput size="sm" value={Math.random().toFixed(1)}></TextInput>
              </td>
              <td>
                <TextInput size="sm" value={Math.random().toFixed(4)}></TextInput>
              </td>
              <td className={styles.notes}>
                <wa-icon name="pen-to-square" variant="regular" style={{ color: 'gray' }}></wa-icon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={classNames(styles.footer, 'wa-grid', 'wa-align-items-end', 'wa-gap-3xl')}></div>
    </div>
  );
};

export default ExperimentMeasurements;
