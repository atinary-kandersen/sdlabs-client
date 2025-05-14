import { Button, Menu } from '@mantine/core';
import { NavLink } from 'react-router';
import styles from './ExperimentNavigation.module.css';

const configurationMenuItems = ['Parameters', 'Objectives', 'Constraints', 'Batching', 'Optimizer'];

export default function ExperimentNavigation({ selectedConfigurationPath }: { selectedConfigurationPath: string | null }) {
  return (
    <div className="wa-cluster wa-gap-2xs">
      <Button component={NavLink} to="" end variant="subtle" className={styles.navButton}>
        Overview
      </Button>
      <Button component={NavLink} to="insights" variant="subtle" className={styles.navButton}>
        Insights
      </Button>
      <Button component={NavLink} to="history" variant="subtle" className={styles.navButton}>
        History
      </Button>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="subtle"
            className={styles.navButton}
            aria-current={selectedConfigurationPath ? 'page' : undefined}
            style={{ minWidth: 120 }}
            rightSection={<wa-icon name="caret-down"></wa-icon>}
          >
            {selectedConfigurationPath || 'Configuration'}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {configurationMenuItems.map(item => (
            <Menu.Item key={item} component={NavLink} to={item.toLowerCase()} style={{ fontWeight: 500 }} className={styles.navButton}>
              {item}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
