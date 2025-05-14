import { CloseButton } from '@mantine/core';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import type { To } from 'react-router';
import { Link } from 'react-router';
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
      <div>{typeof onRemove === 'function' && <CloseButton onClick={onRemoveClick} />}</div>
      {arrowRight && <wa-icon name="arrow-right" variant="regular"></wa-icon>}
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
