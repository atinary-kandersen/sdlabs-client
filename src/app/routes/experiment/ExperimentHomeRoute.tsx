import { Space, Text, Timeline } from '@mantine/core';
import ExperimentContextInput from '../../../lib/experiment/ExperimentContextInput';
import ExperimentMeasurements from '../../../lib/experiment/ExperimentMeasurements';
import generateLoremIpsum from '../../../lib/utils/generateLoremIpsum';

const iterations = Array.from({ length: 5 });

export default function ExperimentHomeRoute() {
  return (
    <div className="wa-flank:end wa-align-items-start wa-gap-3xl">
      <div style={{ flex: 5 }}>
        <Space h="11px"></Space>
        <Timeline bulletSize={30} lineWidth={2} autoContrast>
          {iterations.map((_, index) => {
            const iterationNumber = iterations.length - index;
            return (
              <Timeline.Item title={`Iteration ${iterationNumber}`} bullet={iterationNumber} lineVariant="dashed">
                {index === 0 && (
                  <>
                    <Space h="15px"></Space>
                    <ExperimentMeasurements />
                  </>
                )}
                {index > 0 && (
                  <div className="wa-cluster wa-gap-s">
                    <Text size="sm" c="dimmed">
                      {generateLoremIpsum(12)}
                    </Text>
                  </div>
                )}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
      <div style={{ flex: 2 }} className="wa-stack wa-gap-3xl">
        <ExperimentContextInput />
      </div>
    </div>
  );
}
