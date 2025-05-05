import { ChangeEvent } from 'react';
import { Parameter, ParameterType } from '../../../global';

export default function ParameterConfiguration({ parameter, onChange }: { parameter: Parameter; onChange: (parameter: Partial<Parameter>) => void }) {
  // const [type, setType] = useState<ParameterType>(parameter.type);

  return (
    <>
      <div className="wa-flank:end">
        <div>
          <wa-input
            inputmode="text"
            placeholder="Parameter name"
            value={parameter.name}
            required
            onInput={(event: ChangeEvent<HTMLInputElement>) => onChange({ name: event.target.value })}
          ></wa-input>
        </div>
        <div>
          <wa-select
            placeholder="Type"
            value={parameter.type}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange({ type: e.target.value as ParameterType })}
            required
          >
            <wa-option value="numerical">Numerical</wa-option>
            <wa-option value="categorical">Categorical</wa-option>
          </wa-select>
        </div>
      </div>
    </>
  );
}
