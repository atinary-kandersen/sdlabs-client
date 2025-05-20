import { Button, Menu } from '@mantine/core';
import { NavLink } from 'react-router';
import styles from './ExperimentNavigation.module.css';

const configurationMenuItems = ['parameters', 'objectives', 'constraints', 'batching', 'optimizer'];

export default function ExperimentNavigation({ subPath }: { subPath: string }) {
  return (
    <div className="wa-cluster wa-gap-2xs">
      <Button component={NavLink} to="overview" end variant="subtle" className={styles.navButton}>
        Overview
      </Button>
      <Button component={NavLink} to="insights" variant="subtle" className={styles.navButton}>
        Insights
      </Button>
      <Button component={NavLink} to="history" variant="subtle" className={styles.navButton}>
        History
      </Button>
      <Menu shadow="md" width={160}>
        <Menu.Target>
          <Button
            variant="subtle"
            className={styles.navButton}
            aria-current={configurationMenuItems.includes(subPath) ? 'page' : undefined}
            style={{ minWidth: 120 }}
            rightSection={<wa-icon name="caret-down"></wa-icon>}
          >
            <span style={{ textTransform: 'capitalize' }}>{configurationMenuItems.includes(subPath) ? subPath : 'Configuration'}</span>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {configurationMenuItems.map(item => (
            <Menu.Item key={item} component={NavLink} to={item.toLowerCase()} className={styles.navButton} fw="500">
              <span style={{ textTransform: 'capitalize' }}>{item}</span>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
