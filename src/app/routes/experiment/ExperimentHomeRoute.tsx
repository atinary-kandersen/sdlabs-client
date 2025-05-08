import { Timeline } from '@mantine/core';
import ExperimentContextInput from '../../../lib/experiment/ExperimentContextInput';
import ExperimentMeasurements from '../../../lib/experiment/ExperimentMeasurements';
import styles from './ExperimentHomeRoute.module.css';

export default function ExperimentHomeRoute() {
  return (
    <div className="wa-flank:end wa-align-items-start wa-gap-3xl">
      <div style={{ flex: 5 }}>
        <Timeline active={0} bulletSize={20} lineWidth={2}>
          <Timeline.Item title="Iteration 5" className={styles.timelineItem}>
            <div style={{ padding: '2rem' }}>
              <ExperimentMeasurements />
            </div>
          </Timeline.Item>
          <Timeline.Item title="Iteration 4"></Timeline.Item>
          <Timeline.Item title="Iteration 3"></Timeline.Item>
          <Timeline.Item title="Iteration 2"></Timeline.Item>
          <Timeline.Item title="Iteration 1"></Timeline.Item>
        </Timeline>
      </div>
      <div style={{ flex: 2 }} className="wa-stack wa-gap-3xl">
        <ExperimentContextInput />
      </div>
    </div>
  );
}
