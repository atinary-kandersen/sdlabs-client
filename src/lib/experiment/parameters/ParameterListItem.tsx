import { To } from 'react-router';
import { ParameterType } from '../../../global';
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
      <wa-avatar style={{ '--size': '2rem' }}>
        <span slot="icon">{type === 'categorical' ? 'Ca' : 'Nu'}</span>
      </wa-avatar>
      <div>{name}</div>
    </List.Item>
  );

  return Item;
}
