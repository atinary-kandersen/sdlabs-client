import { ExperimentState } from '../../../generated/types';
import { useExperimentsStore } from '../../state/store';
import styles from './WatchedExperiments.module.css';

const WatchedExperiments = () => {
  const experiments = useExperimentsStore();

  return (
    <div className={styles.container}>
      <wa-icon name="eye" className={styles.eye}></wa-icon>
      <div className={styles.avatarGroup}>
        {Array.from(experiments.keys()).map(experimentId => {
          const { state } = experiments.get(experimentId)!;
          return <ExperimentAvatar key={experimentId} state={state} />;
        })}
        {/* <wa-badge
          variant="brand"
          appearance="accent outlined"
          pulse
          pill
          class={styles.avatar}
        >
          1
        </wa-badge>
        <wa-badge
          variant="danger"
          appearance="accent outlined"
          pill
          class={styles.avatar}
        >
          2
        </wa-badge>
        <wa-badge
          variant="neutral"
          appearance="outlined"
          pill
          class={styles.avatar}
        >
          3
        </wa-badge> */}
      </div>
    </div>
  );
};

const ExperimentAvatar = ({ state }: { state: ExperimentState }) => {
  return (
    <wa-badge
      variant="brand"
      appearance="accent outlined"
      pulse
      pill
      class={styles.avatar}
    >
      {state}
    </wa-badge>
  );
};

export default WatchedExperiments;
