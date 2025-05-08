import { Button } from '@mantine/core';
import classNames from 'classnames';
import styles from './UploadBox.module.css';

export default function UploadBox({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className={classNames('wa-flank:start wa-gap-xl wa-align-items-start wa-border-radius-l', styles.box)}>
        <div className={classNames('wa-align-items-start', styles.iconWrapper)}>
          <wa-icon name="upload" appearance="regular" class={styles.icon}></wa-icon>
        </div>
        <div className="wa-stack wa-gap-xl wa-align-items-start">
          <div>
            <div className={classNames('wa-heading-m')}>Upload your dataset.</div>
            <p className="wa-body-m">
              Drag and drop your dataset here, or <a href="javascript:void();">browse</a>, to automatically configure your experiment in no time.
            </p>
          </div>
          <div>
            <Button variant="filled" onClick={onClick} rightSection={<wa-icon slot="suffix" name="upload" appearance="regular"></wa-icon>}>
              Browse
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
