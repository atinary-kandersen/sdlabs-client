import classNames from 'classnames';
import type { FunctionComponent, ReactElement } from 'react';
import { Children } from 'react';
import type { NavLinkRenderProps } from 'react-router';
import styles from './Page.module.css';

export const Page = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return <div className={styles.page}>{children}</div>;
};

export const PageHeader = ({ center, children }: { center?: boolean; children: ReactElement | ReactElement[] }) => {
  return (
    <div className={classNames(styles.header)}>
      <div
        className={classNames(styles.headerContent, {
          [styles.centerContent]: center
        })}
      >
        {children}
      </div>
    </div>
  );
};

export const PageContent = ({ children, center = false }: { center?: boolean; children: ReactElement | ReactElement[] }) => {
  return <div className={classNames(styles.content, { [styles.centerContent]: center })}>{children}</div>;
};

export const PageNav = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className={styles.nav}>
      {Children.map(children, child => {
        const props = child.props as object; // Making Typescript happy to do the spread below.
        if ((child.type as FunctionComponent).displayName === 'NavLink') {
          return {
            ...child,
            props: {
              ...props,
              className: ({ isActive }: NavLinkRenderProps) => classNames(styles.navLink, { [styles.navLinkActive]: isActive })
            }
          };
        } else {
          return {
            ...child,
            props: {
              ...props,
              className: styles.navLink
            }
          };
        }
      })}
    </div>
  );
};

Page.Header = PageHeader;
Page.Nav = PageNav;
Page.Content = PageContent;
