import { ActionIcon, ActionIconProps, FloatingPosition, Tooltip } from '@mantine/core';
import { HTMLAttributes } from 'react';
import { NavLink, To } from 'react-router';
import { JSX } from 'react/jsx-runtime';
import styles from './IconButton.module.css';

export default function IconButton({
  icon,
  tooltip,
  tooltipPosition = 'right',
  children,
  ...props
}: Partial<
  {
    icon: string;
    tooltip: string;
    tooltipPosition: FloatingPosition;
    to: To;
    children: JSX.IntrinsicElements['wa-icon'];
  } & HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> &
    ActionIconProps &
    HTMLAttributes<ActionIconProps>
>) {
  props = { ...props, className: styles.iconButton, size: props.size || '40px' };
  let Button;
  if (props.to) {
    const { to, ...newProps } = props;
    Button = (
      <ActionIcon component={NavLink} {...newProps} to={to}>
        {children ?? <wa-icon name={icon}></wa-icon>}
      </ActionIcon>
    );
  } else {
    Button = <ActionIcon {...props}>{children ?? <wa-icon name={icon}></wa-icon>}</ActionIcon>;
  }

  if (tooltip) {
    return (
      <Tooltip position={tooltipPosition} offset={15} label={tooltip} openDelay={250}>
        {Button}
      </Tooltip>
    );
  } else {
    return Button;
  }
}
