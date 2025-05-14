import { ActionIcon, Indicator, Menu, Text } from '@mantine/core';
import { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import type { Experiment, ExperimentId } from '../../../global';
import { useExperiments } from '../../queries/experiment';

const indicatorColors = ['green', 'yellow', 'red', 'blue'] as const;
type IndicatorColor = (typeof indicatorColors)[number];

export default function WatchedExperiments({ experimentIds }: { experimentIds: ExperimentId[] }) {
  const experiments = useExperiments();
  const data = experiments.data as unknown as Experiment[]; // TODO: Temp fix
  const [indicator, setIndicator] = useState<null | { color: IndicatorColor; index: number }>(null);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (experimentIds.length > 0 && Math.random() < 0.3) {
        setIndicator({
          color: indicatorColors[Math.floor(Math.random() * indicatorColors.length)],
          index: Math.floor(Math.random() * experimentIds.length)
        });
      } else {
        setIndicator(null);
      }
    }, 3000);
    return () => clearInterval(timeout);
  });

  let TargetButton = (
    <ActionIcon variant="subtle" size="xl" color="gray" aria-label="Watched experiments">
      <wa-icon name="eye" variant="regular" style={{ color: `var(--mantine-color-gray-6)` }}></wa-icon>
    </ActionIcon>
  );

  if (indicator) {
    TargetButton = (
      <Indicator processing color={indicator.color} size={15} withBorder position="top-end" radius="xl" offset={7}>
        {TargetButton}
      </Indicator>
    );
  }

  return (
    <Menu
      trigger="click-hover"
      shadow="md"
      openDelay={200}
      closeDelay={400}
      position="right"
      withArrow
      transitionProps={{ transition: 'fade-right' }}
    >
      <Menu.Target>{TargetButton}</Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Watched experiments</Menu.Label>
        <Suspense>
          {experimentIds.length === 0 && <Menu.Item>You are not watching any experiments yet.</Menu.Item>}
          {experimentIds.length > 0 &&
            data
              .filter(experiment => experimentIds.includes(experiment.id))
              .map((experiment, index) => {
                return (
                  <Menu.Item
                    key={experiment.id}
                    leftSection={<wa-icon name="flask" variant="light" style={{ color: `var(--mantine-color-gray-6)` }}></wa-icon>}
                    rightSection={
                      indicator?.index === index && <Indicator color={indicator.color} size={10} withBorder position="top-end" radius="xl" />
                    }
                    bg={indicator?.index === index ? `${indicator.color}.0` : undefined}
                  >
                    <NavLink to={`experiments/${experiment.id}`}>
                      <Text truncate fw={500} c="var(--mantine-color-gray-7)" style={{ marginRight: '1rem' }}>
                        {experiment.name}
                      </Text>
                    </NavLink>
                  </Menu.Item>
                );
              })}
        </Suspense>
      </Menu.Dropdown>
    </Menu>
  );
}
