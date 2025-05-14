import { Avatar } from '@mantine/core';
import type { To } from 'react-router';
import type { ParameterType } from '../../../global';
import List from '../../common/components/List/List';

export default function ParameterListItem({
  name,
  type,
  linkTo,
  onRemove
}: {
  name: string;
  type: ParameterType;
  linkTo?: To;
  onRemove?: () => void;
}) {
  const Item = (
    <List.Item onRemove={onRemove} linkTo={linkTo}>
      <Avatar>
        <span slot="icon">{type === 'categorical' ? 'Ca' : 'Nu'}</span>
      </Avatar>
      <div>{name}</div>
    </List.Item>
  );

  return Item;
}
