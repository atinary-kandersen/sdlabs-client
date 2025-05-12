import { faker } from '@faker-js/faker';
import { Button } from '@mantine/core';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Parameter } from '../../../../global';
import RightPanel from '../../../../lib/common/components/RightPanel/RightPanel';
import { Stepper } from '../../../../lib/common/components/Stepper/Stepper';
import { Page } from '../../../components/page/Page';
import CreateExperimentContext, { CreateExperimentContextType } from './CreateExperimentContext';
import { getContextDataFromLocalStorage, setContextDataToLocalStorage } from './localStorage';
import steps, { Step } from './steps';

export default function CreateExperimentRoute() {
  // const { mutateAsync } = useCreateExperiment();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('parameters');
  const contextData = getContextDataFromLocalStorage() ?? {
    step: 'parameters',
    parameters: []
  };

  const [contextValue, setContextValue] = useState<CreateExperimentContextType>(() => {
    return {
      data: contextData,
      setParameters: (parameters: Parameter[]) => updateContextData({ parameters })
    };
  });

  function updateContextData(data: Partial<CreateExperimentContextType['data']>) {
    setContextValue(prev => {
      const newData = {
        ...prev,
        data: {
          ...prev.data,
          ...data
        }
      };
      requestIdleCallback(() => setContextDataToLocalStorage(newData.data));
      return newData;
    });
  }

  // const createExperiment = async () => {
  //   const newId = `${new Date().getTime()}`;
  //   return mutateAsync({
  //     body: {
  //       optimizer_id: 'default',
  //       name: `mutate_test_${newId}`
  //     }
  //   });
  // };

  function navigateToStep(step: Step) {
    navigate(step);
    setCurrentStep(step);
    updateContextData({ step });
  }

  const onContinue = async () => {
    const nextStep = steps.indexOf(currentStep) < steps.length ? steps[steps.indexOf(currentStep) + 1] : null;
    if (nextStep) {
      navigateToStep(nextStep);
    } else {
      alert('This is the last step');
    }
  };

  const onBack = () => {
    const previousStep = steps.indexOf(currentStep) > 0 ? steps[steps.indexOf(currentStep) - 1] : null;
    if (previousStep) {
      navigateToStep(previousStep);
    }
  };

  return (
    <Page>
      <Page.Content center>
        <div className="wa-align-items-stretch wa-stack wa-gap-3xl wa-cluster" style={{ flex: 1, width: 'clamp(600px, 100%, 1400px)' }}>
          <Stepper activeStep={steps.indexOf(currentStep) + 1}>
            <Stepper.Step>Parameters</Stepper.Step>
            <Stepper.Step>Objectives</Stepper.Step>
            <Stepper.Step>Constraints</Stepper.Step>
            <Stepper.Step>Batches</Stepper.Step>
            <Stepper.Step>Summary</Stepper.Step>
          </Stepper>

          <CreateExperimentContext.Provider value={contextValue}>
            <div className="wa-flank:end wa-gap-3xl wa-align-items-stretch" style={{ flex: 1 }}>
              <div style={{ flex: 2 }} className="wa-stack">
                <Outlet />
              </div>
              <div style={{ flex: 1 }}>
                <RightPanel>
                  <div className="wa-cluster wa-gap-xs">
                    {onContinue && (
                      <Button onClick={onContinue} rightSection={<wa-icon name="arrow-right" slot="suffix"></wa-icon>}>
                        Continue
                      </Button>
                    )}
                    {currentStep !== 'parameters' && (
                      <Button variant="subtle" onClick={onBack}>
                        Back
                      </Button>
                    )}
                  </div>

                  {/* {currentStep === 'parameters' && <div>Refine your parameters.</div>} */}

                  {Array.from({ length: 3 }).map((_, index) => (
                    <p key={index}>{faker.lorem.sentence(12)}</p>
                  ))}
                </RightPanel>
              </div>
            </div>
          </CreateExperimentContext.Provider>
        </div>
      </Page.Content>
    </Page>
  );
}

// function RightPanel({
//   children,
//   onBack,
//   onContinue,
//   showBack
// }: {
//   children: ReactNode;
//   onBack?: () => void;
//   onContinue: () => void;
//   showBack: boolean;
// }) {
//   return (
//     <div className="wa-stack wa-gap-2xl" style={{ flex: 2, backgroundColor: 'var(--wa-color-neutral-fill-quiet)', padding: 'var(--wa-space-xl)' }}>
//       <div className="wa-gap-s">
//         {onContinue && (
//           <wa-button variant="brand" onClick={onContinue}>
//             Continue
//             <wa-icon name="arrow-right" slot="suffix"></wa-icon>
//           </wa-button>
//         )}
//         {showBack && (
//           <wa-button variant="neutral" appearance="filled" onClick={onBack}>
//             Go back
//           </wa-button>
//         )}
//       </div>
//       {children}
//     </div>
//   );
// }
