import { SegmentedControl, TextInput } from '@mantine/core';
import type { ChangeEvent } from 'react';
import type { Parameter, ParameterType } from '../../../global';

export default function ParameterConfiguration({ parameter, onChange }: { parameter: Parameter; onChange: (parameter: Partial<Parameter>) => void }) {
  return (
    <>
      <div className="wa-flank:end">
        <div>
          <TextInput
            required
            value={parameter.name}
            placeholder="Parameter name"
            onInput={(event: ChangeEvent<HTMLInputElement>) => onChange({ name: event.target.value })}
          ></TextInput>
        </div>
        <div>
          <SegmentedControl
            data={[
              { value: 'numerical', label: 'Numerical' },
              { value: 'categorical', label: 'Categorical' }
            ]}
            value={parameter.type}
            onChange={value => onChange({ type: value?.toLowerCase() as ParameterType })}
          />
        </div>
      </div>
    </>
  );
}
