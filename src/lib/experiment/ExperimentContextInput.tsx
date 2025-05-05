import classNames from 'classnames';
import LearnMore from '../common/components/LearnMore/LearnMore';
import commonStyles from '../common/styles/common.module.css';

const ExperimentContextInput = () => {
  return (
    <div className={classNames('wa-stack wa-gap-xs')} style={{ width: '100%' }}>
      <div className="wa-flank:end">
        <div>
          <label>Context</label>

          <span className={commonStyles.hintText}>
            <span style={{ marginInline: '0.5rem' }}>·</span>Max 140 characters
          </span>
        </div>
        <LearnMore text="To guide the optimization, add any observations or hypotheses, in natural language." />
      </div>
      <wa-textarea
        hint="Note: Only your latest contextual information will be used in the optimization, not subsequent ones."
        placeholder={`Ex: "Add more acid to the next batch."`}
        maxlength={140}
        resize="none"
        rows={4}
        inputmode="text"
        spellcheck="false"
      ></wa-textarea>
    </div>
  );
};

export default ExperimentContextInput;
