import classNames from 'classnames';
import IconButton from '../../../lib/common/components/IconButton/IconButton';
import styles from './SideNavPanel.module.css';

export default function SideNavPanel() {
  return (
    <div className={classNames('wa-stack wa-gap-2xl wa-align-items-center', styles.container)}>
      <img
        src="https://media.licdn.com/dms/image/v2/C4D0BAQFCzrNqOVHf4Q/company-logo_100_100/company-logo_100_100/0/1630475130056/chemos_logo?e=1752105600&v=beta&t=16ayo6L4NH1n91e1-bwDP4q0OQQGUcJ666_72ngRyyk"
        className={styles.logo}
      />
      <div className="wa-stack wa-gap-2xs wa-align-items-center">
        <IconButton to="/" icon="home" tooltip="Home" size="xl" />
        <IconButton to="/experiments" icon="flask" tooltip="Experiments" size="xl" />
        <IconButton to="/datasets" icon="table" tooltip="Datasets" size="xl" />
        <IconButton to="/analytics" icon="chart-mixed" tooltip="Analytics" size="xl" />
      </div>
      <div className={styles.bottom}>
        <div className="wa-stack wa-gap-2xs wa-align-items-center">
          <IconButton icon="cog" tooltip="Settings" to="settings" size="xl" />
          <IconButton to="/documentation" icon="book" tooltip="Documentation" size="xl" />
        </div>
        <div className={styles.divider}></div>
        <IconButton icon="user" tooltip="Profile" size="xl" />
      </div>
    </div>
  );
}
