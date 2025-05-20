import { HoverCard, Popover, Text } from '@mantine/core';

const LearnMore = ({ text }: { text: string }) => {
  return (
    <HoverCard width={350} position="top" withArrow shadow="sm" transitionProps={{ transition: 'fade-up', enterDelay: 200 }}>
      <HoverCard.Target>
        <Text size="sm" c="dimmed" style={{ cursor: 'pointer', textDecoration: 'underline' }} component="span">
          Learn more
        </Text>
      </HoverCard.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">{text}</Text>
      </Popover.Dropdown>
    </HoverCard>
  );
};

export default LearnMore;
