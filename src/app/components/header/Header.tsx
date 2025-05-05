import { default as classnames, default as classNames } from 'classnames';
import { NavLink } from 'react-router';
import styles from './Header.module.css';

const navItems = [
  ['Home', '/'],
  ['Experiments', '/experiments'],
  ['Datasets', '/datasets'],
  ['Analytics', '/analytics']
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={classNames(styles.headerSectionLeft, 'wa-gap-m')}>
          {/* <img src={atinaryLogo} style="width: 50px;" /> */}
          <img src="http://atinary.com/wp-content/uploads/2024/02/ATINARY_LOGO_LONG_DARK.png" className={styles.atinaryLogo} />
          <span className={styles.customer}></span>
        </div>
        <div className={classNames(styles.headerSectionCenter, 'wa-gap-m')}>
          {navItems.map(([name, path]) => (
            <NavLink to={path} className={({ isActive }) => classnames(styles.navItem, { [styles.navItemActive]: isActive })} key={name}>
              {name}
            </NavLink>
          ))}
        </div>
        <div className={styles.headerSectionRight}>
          <wa-dropdown>
            {/* <wa-avatar slot="trigger" initials="JD" label="User avatar" style="width: 36px; height: 36px; font-size: 0.9rem;"></wa-avatar> */}
            <wa-icon-button slot="trigger" name="user" variant="regular"></wa-icon-button>
            <wa-menu>
              <wa-menu-item>Profile</wa-menu-item>
              <wa-menu-item>Log out</wa-menu-item>
            </wa-menu>
          </wa-dropdown>
          <wa-dropdown>
            <wa-icon-button slot="trigger" name="bars" variant="outlined"></wa-icon-button>
            <wa-menu>
              <wa-menu-item>Settings</wa-menu-item>
              <wa-menu-item>Documentation</wa-menu-item>
              <wa-menu-item>SDK</wa-menu-item>
              <wa-menu-item>Products</wa-menu-item>
              <wa-menu-item>Atinary.com</wa-menu-item>
            </wa-menu>
          </wa-dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
