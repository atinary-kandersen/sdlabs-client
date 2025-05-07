import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router';
import commonStyles from '../../../lib/common/styles/common.module.css';
import styles from './SideNavPanel.module.css';

const getTooltipId = (() => {
  let counter = 0;
  return () => `SideNavPanel-tooltip-${++counter}`;
})();

// const mainNavLinks = [
//   ['/', 'home', 'Home'],
//   ['/experiments', 'flask', 'Experiments'],
//   ['/datasets', 'file', 'Datasets'],
//   ['/analytics', 'chart-mixed', 'Analytics']
// ] as const;

export default function SideNavPanel() {
  return (
    <div className={classNames('wa-stack wa-gap-2xl wa-align-items-center', styles.container)}>
      <img
        src="https://media.licdn.com/dms/image/v2/C4D0BAQFCzrNqOVHf4Q/company-logo_100_100/company-logo_100_100/0/1630475130056/chemos_logo?e=1752105600&v=beta&t=16ayo6L4NH1n91e1-bwDP4q0OQQGUcJ666_72ngRyyk"
        className={styles.logo}
      />
      <div className="wa-stack wa-gap-2xs wa-align-items-center">
        <NavIconButton to="/" icon="home" tooltip="Home" />
        <NavIconButton to="/experiments" icon="flask" tooltip="Experiments" />
        <NavIconButton to="/datasets" icon="table" tooltip="Datasets" />
        <NavIconButton to="/analytics" icon="chart-mixed" tooltip="Analytics" />
        {/* <div className={styles.divider}></div>
        <wa-icon name="eye" variant="outlined"></wa-icon> */}
      </div>
      <div className={styles.bottom}>
        <div className="wa-stack wa-gap-2xs wa-align-items-center">
          <NavIconButton to="/settings" icon="cog" tooltip="Settings" />
          <NavIconButton to="/documentation" icon="book" tooltip="Documentation" />
        </div>
        <div className={styles.divider}></div>
        <NavIconButton to="/user" icon="user" tooltip="Profile" tooltipPlacement="right-start" />
      </div>
    </div>
  );
}

function NavIconButton({
  to,
  icon,
  tooltip,
  tooltipPlacement = 'right',
  ...props
}: NavLinkProps & React.RefAttributes<HTMLAnchorElement> & { icon: string; tooltip?: string; tooltipPlacement?: string }) {
  const tooltipId = tooltip ? getTooltipId() : null;
  return (
    <>
      <NavLink
        to={to}
        {...props}
        className={({ isActive }) => classNames(commonStyles.linkTransparent, styles.navLink, { [styles.navLinkActive]: isActive })}
      >
        <wa-icon-button name={icon} variant="outlined" id={tooltipId}></wa-icon-button>
      </NavLink>
      {tooltipId && (
        <wa-tooltip for={tooltipId} placement={tooltipPlacement} distance="20">
          {tooltip}
        </wa-tooltip>
      )}
    </>
  );
}
