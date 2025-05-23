import classNames from 'classnames';
import IconButton from '../../../lib/common/components/IconButton/IconButton';
import { useWatchedExperimentStore } from '../../state/store';
import styles from './SidebarNav.module.css';
import WatchedExperiments from './WatchedExperiments';

export default function SidebarNav() {
	const watchedExperiments = useWatchedExperimentStore();

	return (
		<div className={classNames('wa-stack wa-gap-2xl wa-align-items-center', styles.container)}>
			<img
				src="https://media.licdn.com/dms/image/v2/C4D0BAQFCzrNqOVHf4Q/company-logo_100_100/company-logo_100_100/0/1630475130056/chemos_logo?e=1752105600&v=beta&t=16ayo6L4NH1n91e1-bwDP4q0OQQGUcJ666_72ngRyyk"
				alt="Atinary logo"
				className={styles.logo}
			/>
			<div className="wa-stack wa-gap-2xs wa-align-items-center">
				<IconButton to="/" icon="home" tooltip="Home" size="xl" />
				<IconButton to="/experiments" icon="flask" tooltip="Experiments" size="xl" />
				<IconButton to="/datasets" icon="table" tooltip="Datasets" size="xl" />
				<IconButton to="/analytics" icon="chart-mixed" tooltip="Analytics" size="xl" />
				<div className={styles.divider}></div>
				<WatchedExperiments experimentIds={Array.from(watchedExperiments)} />
			</div>
			<div className={styles.bottom}>
				<div className="wa-stack wa-gap-2xs wa-align-items-center">
					<IconButton to="/settings" icon="cog" tooltip="Settings" size="xl" />
					<IconButton to="/documentation" icon="book" tooltip="Documentation" size="xl" />
				</div>
				<div className={styles.divider}></div>
				<IconButton icon="user" tooltip="Profile" size="xl" />
			</div>
		</div>
	);
}
