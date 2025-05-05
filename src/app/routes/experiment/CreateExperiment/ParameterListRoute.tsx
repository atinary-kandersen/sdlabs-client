import { useContext } from 'react';
import { Parameter } from '../../../../global';
import MultipleParameterNameInput from '../../../../lib/experiment/parameters/MultipleParameterNameInput';
import ParameterList from '../../../../lib/experiment/parameters/ParameterList';
import CreateExperimentContext from './CreateExperimentContext';

export default function ParameterListRoute() {
  const context = useContext(CreateExperimentContext);

  const onEnterNewParameters = (names: string[]) => {
    /**
     * New parameters are added as as numerical by default.
     * The parameter ids are prefixed with "new" to indicate that they are new and not yet saved.
     */
    const parameters: Parameter[] = names.map((name, index) => ({ id: `new${new Date().getTime() + index}`, name, type: 'numerical' }));
    context.setParameters([...context.data.parameters, ...parameters]);
  };

  const onRemoveParameter = (parameter: Parameter) => {
    context.setParameters(context.data.parameters.filter(p => p.id !== parameter.id));
  };

  return (
    <div className="wa-stack wa-gap-xl">
      <h4>Define your parameters</h4>

      <MultipleParameterNameInput onEnter={onEnterNewParameters} />

      <ParameterList parameters={context.data.parameters} onRemove={onRemoveParameter} />
    </div>
  );
}
