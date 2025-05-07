import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link, To } from 'react-router';
import commonStyles from '../../styles/common.module.css';
import styles from './List.module.css';

export default function ListItem({
  arrowRight,
  children,
  onRemove,
  linkTo
}: {
  arrowRight?: boolean;
  children: ReactNode;
  onRemove?: () => void;
  linkTo?: To;
}) {
  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove!();
  };

  const Item = (
    <div className="wa-flank:end" style={{ padding: 'var(--wa-space-xs)' }}>
      <div className="wa-cluster">{children}</div>
      <div>{typeof onRemove === 'function' && <wa-icon name="remove" appearance="regular" onClick={onRemoveClick}></wa-icon>}</div>
      {arrowRight && <wa-icon-button name="arrow-right" appearance="regular"></wa-icon-button>}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={classNames(commonStyles.linkTransparent, styles.itemLink)}>
        {Item}
      </Link>
    );
  }

  return Item;
}
