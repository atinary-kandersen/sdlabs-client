import commonStyles from '../../styles/common.module.css';

let tooltipCounter = 0;

const LearnMore = ({ text }: { text: string }) => {
  const tooltipId = `learn-more-tooltip-${++tooltipCounter}`;

  return (
    <>
      <span
        id={tooltipId}
        className={commonStyles.hintText}
        style={{ cursor: 'pointer' }}
      >
        <u>Learn more</u>
      </span>
      <wa-tooltip for={tooltipId}>{text}</wa-tooltip>
    </>
  );
};

export default LearnMore;
