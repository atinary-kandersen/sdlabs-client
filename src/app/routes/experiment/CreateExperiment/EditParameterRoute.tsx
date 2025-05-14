import { Kbd } from '@mantine/core';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { Parameter } from '../../../../global';
import ParameterConfiguration from '../../../../lib/experiment/parameters/ParameterConfiguration';
import CreateExperimentContext from './CreateExperimentContext';

export default function EditParameterRoute() {
  const parameterId = useParams<{ parameterId: string }>().parameterId;
  const context = useContext(CreateExperimentContext);
  const navigate = useNavigate();
  const parameter = context.data.parameters.find(p => p.id === parameterId);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        navigate(-1);
      }
    }
    document.addEventListener('keydown', onKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  if (!parameter) {
    return <h4>Parameter not found</h4>;
  }

  function onChange(newParameter: Partial<Parameter>) {
    context.setParameters(
      context.data.parameters.map(p => {
        if (p.id === parameterId) {
          return { ...p, ...newParameter };
        }
        return p;
      })
    );
  }

  return (
    <div className="wa-stack wa-gap-3xl">
      <div className="wa-cluster wa-gap-s" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <wa-icon name="arrow-left" appearance="regular"></wa-icon>
        <h3 className="wa-heading-m">Parameters</h3>
        <Kbd>Esc</Kbd>
      </div>

      <ParameterConfiguration parameter={parameter} onChange={onChange} />
    </div>
  );
}
