import { Experiment, ExperimentState } from '../../../generated/types';

const ExperimentDetails = ({
  experiment: { id, name },
  state,
  progress
}: {
  experiment: Experiment;
  state?: ExperimentState;
  progress?: number;
}) => {
  return (
    <>
      <div>
        {id} - {name}
      </div>
      <div>State: {state}</div>
      <div>Progress: {progress}</div>
      <wa-progress-ring value={progress}>{progress}%</wa-progress-ring>
    </>
  );
};

export default ExperimentDetails;
