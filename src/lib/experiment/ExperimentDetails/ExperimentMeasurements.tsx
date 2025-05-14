import { Avatar, Text, TextInput } from '@mantine/core';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import commonStyles from '../../common/styles/common.module.css';
import generateLoremIpsum from '../../utils/generateLoremIpsum';
import styles from './ExperimentMeasurements.module.css';

function Typewriter({ text, speed = 10 }: { text: string; speed?: number }) {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setLetters(prev => {
          if (prev.length < text.length) {
            return [...prev, text[prev.length]];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed]);

  return <>{letters}</>;
}

const ExperimentMeasurements = () => {
  return (
    <div className={classNames(styles.scrollContainer, commonStyles.focusBox)}>
      <div className={classNames(styles.header, 'wa-flank:start', 'wa-gap-m')}>
        <Avatar color="grape.9">
          <wa-icon name="sparkles" variant="regular" style={{ color: 'var(--mantine-color-grape-6)' }}></wa-icon>
        </Avatar>
        <span>
          <Text c="var(--mantine-color-gray-7)">{<Typewriter text={generateLoremIpsum(30)} />}</Text>
        </span>
      </div>
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
                <TextInput size="sm" defaultValue={Math.random().toFixed(1)}></TextInput>
              </td>
              <td>
                <TextInput size="sm" defaultValue={Math.random().toFixed(4)}></TextInput>
              </td>
              <td className={styles.notes}>
                <wa-icon name="pen-to-square" variant="regular" style={{ color: 'gray' }}></wa-icon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExperimentMeasurements;
