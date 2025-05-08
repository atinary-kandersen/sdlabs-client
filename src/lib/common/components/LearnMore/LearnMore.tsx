import { HoverCard, Popover, Text } from '@mantine/core';
import commonStyles from '../../../common/styles/common.module.css';

const LearnMore = ({ text }: { text: string }) => {
  return (
    <HoverCard width={200} position="top" withArrow>
      <HoverCard.Target>
        <span className={commonStyles.hintText} style={{ cursor: 'pointer' }}>
          <u>Learn more</u>
        </span>
      </HoverCard.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">{text}</Text>
      </Popover.Dropdown>
    </HoverCard>
  );
};

export default LearnMore;
