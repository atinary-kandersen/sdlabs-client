export const eventTypes = ['configurationChange', 'measurementSubmitted', 'insightGenerated'] as const;

export type EventType = (typeof eventTypes)[number];
export type EventTypes = Readonly<EventType[]>;

export const eventTypeMessage: Record<EventType, string> = {
  configurationChange: 'Configuration change',
  measurementSubmitted: 'Measurement submitted',
  insightGenerated: 'Insight generated'
};

export const eventTypeIcons: Record<EventType, string> = {
  configurationChange: 'sliders',
  measurementSubmitted: 'pen',
  insightGenerated: 'chart-simple'
};

export const eventTypeColor: Record<EventType, string> = {
  configurationChange: 'var(--mantine-color-pink-6)',
  measurementSubmitted: 'var(--mantine-color-lime-7)',
  insightGenerated: 'var(--mantine-color-yellow-7)'
};
