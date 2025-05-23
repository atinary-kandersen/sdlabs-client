import { Avatar, Text, Textarea } from '@mantine/core';
import classNames from 'classnames';
import LearnMore from '../../common/components/LearnMore/LearnMore';

const ExperimentContextInput = () => {
  return (
    <div className={classNames('wa-stack wa-gap-xs')}>
      <div className="wa-flank:end">
        <div className="wa-cluster wa-gap-s">
          <Avatar color="grape.9">
            <wa-icon name="sparkles" variant="regular" style={{ color: 'var(--mantine-color-grape-6)' }}></wa-icon>
          </Avatar>
          <label>Prompt - Guide the optimization</label>
        </div>

        <LearnMore text="Add any observations or hypotheses you may have, in natural language, to guide the optimization." />
      </div>
      <div>
        <Textarea rows={4} placeholder={`Ex: "Add more acid to the next batch."`} maxLength={140} resize="none" spellCheck="false"></Textarea>
      </div>
      <Text size="sm" c="dimmed">
        Max 140 characters.
      </Text>
      <Text size="sm" c="dimmed">
        Note: Only your latest contextual information will be used in the optimization, not subsequent ones.
      </Text>
    </div>
  );
};

export default ExperimentContextInput;
