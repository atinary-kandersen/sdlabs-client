import classNames from 'classnames';
import styles from './ExperimentDetailsHeader.module.css';
import ExperimentStatusIndicator from './ExperimentStatusIndicator';

const ExperimentDetailsHeader = ({ name }: { name: string }) => {
  return (
    <div className={classNames(styles.header, 'wa-flank:start')}>
      <img src="https://enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" className={styles.icon} />
      <div className="wa-flank:end">
        <div className="wa-stack wa-gap-m">
          <h2 className={styles.heading}>{name} </h2>
          <div className="wa-stack wa-gap-2xl">
            <div className="wa-gap-xl" style={{ opacity: 0.5, whiteSpace: 'nowrap' }}>
              <div className="wa-gap-xs">
                <wa-icon name="bullseye"></wa-icon>
                <span className="wa-heading-xs">FalconGPBO</span>
              </div>
              <div className="wa-gap-xs">
                <wa-icon name="gauge"></wa-icon>
                <span className="wa-heading-xs">High</span>
              </div>
              <div className="wa-gap-xs">
                <wa-icon name="chalkboard"></wa-icon>
                <span className="wa-heading-xs">Generic reaction</span>
              </div>
              <div className="wa-gap-xs">
                <wa-icon name="vials"></wa-icon>
                <span className="wa-heading-xs">10 batches</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="wa-gap-xl wa-align-items-center">
            <ExperimentStatusIndicator />

            <div className="wa-gap-xs" style={{ opacity: 0.5 }}>
              <wa-icon name="clock" variant="regular"></wa-icon>
              <span className="wa-heading-xs" style={{ whiteSpace: 'nowrap' }}>
                Today, 10:32
              </span>
            </div>
            <wa-icon-button name="cog" className={styles.settingsButton}></wa-icon-button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetailsHeader;
