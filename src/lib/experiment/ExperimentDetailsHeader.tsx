import { Button } from '@mantine/core';
import styles from './ExperimentDetailsHeader.module.css';

const ExperimentDetailsHeader = ({ name }: { name: string }) => {
  return (
    <div className="wa-stack wa-gap-xl">
      <div className="wa-flank:end">
        <div className="wa-cluster">
          <img src="https:enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" className={styles.icon} />
          <h2 className={styles.heading}>{name}</h2>
        </div>
        <Button variant="brand" style={{ minWidth: 250, maxWidth: 300, height: '3rem', boxShadow: 'var(--mantine-shadow-md)', fontSize: '1rem' }}>
          Run optimization
        </Button>
      </div>
    </div>
  );
};

export default ExperimentDetailsHeader;
