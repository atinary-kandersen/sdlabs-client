import ExperimentContextInput from '../../../lib/experiment/ExperimentContextInput';
import ExperimentMeasurements from '../../../lib/experiment/ExperimentMeasurements';

export default function ExperimentHomeRoute() {
  return (
    <div className="wa-flank:end wa-align-items-start wa-gap-3xl">
      <div style={{ flex: 4 }}>
        <div style={{ height: '5rem' }}></div>
        <ExperimentMeasurements />
      </div>
      <div style={{ flex: 1 }} className="wa-stack wa-gap-3xl">
        <div className="wa-flank:start">
          <div></div>
          <div className="wa-stack wa-align-items-end">
            <wa-button variant="brand" style={{ minWidth: 250, maxWidth: 300, height: '3.5rem' }}>
              Run next optimization
            </wa-button>
          </div>
        </div>
        <div style={{ marginBlock: '3rem' }}>
          <ExperimentContextInput />
        </div>
      </div>
    </div>
  );
}
