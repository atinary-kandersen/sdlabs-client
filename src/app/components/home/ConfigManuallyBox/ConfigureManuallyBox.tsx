import classNames from 'classnames';
import styles from './ConfigureManuallyBox.module.css';

const ConfigureManuallyBox = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={classNames(styles.box, 'wa-flank:start wa-gap-xl wa-align-items-start wa-border-radius-l')}>
      <div className={classNames(styles.iconWrapper, 'wa-align-items-start')}>
        <wa-icon name="sliders" appearance="regular" className={styles.icon}></wa-icon>
      </div>
      <div className="wa-stack wa-gap-xl">
        <div>
          <div className="wa-heading-m">Configure your experiment manually.</div>
          <p className="wa-body-m">You can manually configure your experiment by selecting the parameters and conditions you want to test.</p>
        </div>
        <div>
          <wa-button size="medium" appearance="filled outlined" variant="brand" className={styles.button} onClick={onClick}>
            <wa-icon slot="suffix" name="arrow-right" appearance="regular"></wa-icon>
            Configure manually
          </wa-button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureManuallyBox;
