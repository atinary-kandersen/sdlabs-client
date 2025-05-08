import { Button } from '@mantine/core';
import classNames from 'classnames';
import styles from './ConfigureManuallyBox.module.css';

export default function ConfigureManuallyBox({ onClick }: { onClick: () => void }) {
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
          <Button variant="filled" onClick={onClick} rightSection={<wa-icon slot="suffix" name="arrow-right" appearance="regular"></wa-icon>}>
            Configure manually
          </Button>
        </div>
      </div>
    </div>
  );
}
