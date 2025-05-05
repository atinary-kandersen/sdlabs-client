import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link, To } from 'react-router';
import styles from './LinkTransparent.module.css';

export default function LinkTransparent({
  children,
  to,
  state,
  className
}: {
  children: ReactNode;
  to: To;
  state?: unknown;
  className?: string | undefined;
}) {
  return (
    <Link to={to} className={classNames(styles.link, className)} state={state}>
      {children}
    </Link>
  );
}
