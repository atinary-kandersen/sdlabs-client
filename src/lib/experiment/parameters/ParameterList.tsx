import type { Parameter } from '../../../global';
import List from '../../common/components/List/List';
import ParameterListItem from './ParameterListItem';

export default function ParameterList({
  parameters,
  onRemove
}: {
  parameters: Parameter[];

  onRemove?: (parameter: Parameter) => void;
}) {
  return (
    <List>
      {parameters.map(parameter => (
        <ParameterListItem
          key={parameter.id}
          name={parameter.name}
          type={parameter.type}
          linkTo={parameter.id}
          onRemove={() => onRemove && onRemove(parameter)}
        />
      ))}
    </List>
  );
}
