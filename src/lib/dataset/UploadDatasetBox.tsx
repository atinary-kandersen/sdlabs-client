import classNames from 'classnames';
import styles from './UploadDatasetBox.module.css';

export default function UploadDatasetBox() {
  return (
    <div className={classNames(styles.box, 'wa-stack')}>
      <div className="wa-cluster">
        <wa-icon name="upload" appearance="regular"></wa-icon>
        <div>
          Drag and drop, or{' '}
          <b>
            choose dataset file
            {/* <a>choose dataset file</a> */}
          </b>{' '}
          to upload.
        </div>
      </div>
    </div>
  );
}
