import { Textarea } from '@mantine/core';
import classNames from 'classnames';
import LearnMore from '../common/components/LearnMore/LearnMore';
import commonStyles from '../common/styles/common.module.css';

const ExperimentContextInput = () => {
  return (
    <div className={classNames('wa-stack wa-gap-xs')}>
      <div className="wa-flank:end">
        <label>Context</label>

        <LearnMore text="Add any observations or hypotheses you may have, in natural language, to guide the optimization." />
      </div>
      <Textarea rows={4} placeholder={`Ex: "Add more acid to the next batch."`} maxLength={140} resize="none" spellCheck="false"></Textarea>
      <span className={commonStyles.hintText}>Max 140 characters</span>
      <div className={commonStyles.hintText}>
        Note: Only your latest contextual information will be used in the optimization, not subsequent ones.
      </div>
    </div>
  );
};

export default ExperimentContextInput;
