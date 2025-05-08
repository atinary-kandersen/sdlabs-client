import { Select, TextInput } from '@mantine/core';
import { ChangeEvent } from 'react';
import { Parameter, ParameterType } from '../../../global';

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
          <Select
            required
            placeholder="Type"
            data={[
              { value: 'categorical', label: 'Categorical' },
              { value: 'numerical', label: 'Numerical' }
            ]}
            value={parameter.type}
            onChange={value => onChange({ type: value?.toLowerCase() as ParameterType })}
          ></Select>
        </div>
      </div>
    </>
  );
}
