import { Experiment } from '../../../generated/types';

const ExperimentListItem = ({ item: { id, name } }: { item: Experiment }) => {
  return (
    <div>
      exp {id} - {name}
    </div>
  );
};

export default ExperimentListItem;
