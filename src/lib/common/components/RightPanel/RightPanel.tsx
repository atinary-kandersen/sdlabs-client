import classNames from 'classnames';
import type { ReactNode } from 'react';
import styles from './RightPanel.module.css';

export default function RightPanel({ children }: { children: ReactNode }) {
  return <div className={classNames(styles.panel, 'wa-stack wa-gap-xl')}>{children}</div>;
}
