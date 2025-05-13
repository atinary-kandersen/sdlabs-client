import { Collapse, Skeleton, Text, Timeline } from '@mantine/core';
import { useState } from 'react';
import { FakeUser } from '../../../global';
import { EventType, eventTypeColor, eventTypeIcons, eventTypeMessage } from '../../../lib/experiment/history/eventType';
import styles from './ExperimentHistoryTimeline.module.css';

export type ExperimentHistoryItem = {
  id: string;
  eventType: EventType;
  message: string;
  by?: FakeUser;
};

export default function ExperimentHistoryTimeline({ history }: { history: ExperimentHistoryItem[] }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => (prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]));
  };

  return (
    <Timeline bulletSize={24} lineWidth={2}>
      {history.map(item => (
        <Timeline.Item
          key={item.id}
          className={styles.timelineItem}
          onClick={() => toggleExpanded(item.id)}
          lineVariant="dashed"
          // title={
          //   <Badge size="sm" radius="sm" mt={3} color={eventTypeColor[item.eventType]}>
          //     {eventTypeMessage[item.eventType]}
          //   </Badge>
          // }
          title={eventTypeMessage[item.eventType]}
          bullet={
            <wa-icon
              name={eventTypeIcons[item.eventType]}
              variant="solid"
              style={{ fontSize: '0.7rem', color: eventTypeColor[item.eventType] }}
            ></wa-icon>
          }
        >
          <Text size="sm">{item.message}</Text>
          <Text size="xs" mt={4} c="dimmed">
            2 hours ago{item.by && `, by ${item.by.firstName} ${item.by.lastName}`}
          </Text>
          <Collapse in={expandedItems.includes(item.id)}>
            <Skeleton height={200} mt="20" />
          </Collapse>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
