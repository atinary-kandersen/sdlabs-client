import ExperimentContextInput from '../../../lib/experiment/ExperimentContextInput';
import ExperimentMeasurements from '../../../lib/experiment/ExperimentMeasurements';

export default function ExperimentHomeRoute() {
  return (
    <div className="wa-flank:end wa-align-items-start wa-gap-3xl">
      <div style={{ flex: 5 }}>
        <ExperimentMeasurements />
      </div>
      <div style={{ flex: 2 }} className="wa-stack wa-gap-3xl">
        <ExperimentContextInput />
      </div>
    </div>
  );
}
