import { createContext } from 'react';
import { array, GenericSchema, number, object, optional, picklist, string } from 'valibot';
import { Parameter } from '../../../../global';
import steps, { Step } from './steps';

export type CreateExperimentContextType = {
  data: {
    step: Step;
    parameters: Parameter[];
  };
  setParameters: (parameters: Parameter[]) => void;
};

const parameterType = ['numerical', 'categorical'] as const;

export const contextDataSchema = object({
  step: picklist(steps),
  parameters: array(
    object({
      id: string(),
      name: string(),
      type: picklist(parameterType),
      min: optional(number()),
      max: optional(number())
    })
  )
}) satisfies GenericSchema<CreateExperimentContextType['data']>;

const CreateExperimentContext = createContext<CreateExperimentContextType>({
  data: {
    step: 'parameters',
    parameters: []
  },
  setParameters: () => {
    throw new Error('setParameters must be defined by the provider.');
  }
});

export default CreateExperimentContext;
