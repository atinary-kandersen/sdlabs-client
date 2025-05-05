import styles from './ExperimentStatusIndicator.module.css';

const ExperimentStatusIndicator = () => {
  return (
    <wa-badge variant="success" pill pulse class={styles.badge}>
      <wa-spinner class={styles.spinner}></wa-spinner>
      <span className={styles.iterations}>5</span>
      <wa-icon-button name="stop" class={styles.button}></wa-icon-button>
    </wa-badge>
  );
};

export default ExperimentStatusIndicator;
