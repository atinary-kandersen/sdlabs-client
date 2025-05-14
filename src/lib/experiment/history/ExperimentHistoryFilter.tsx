import { Button, Checkbox, Menu } from '@mantine/core';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { FakeUser } from '../../../global';
import type { EventType, EventTypes } from './eventType';
import { eventTypeColor, eventTypeIcons, eventTypeMessage } from './eventType';

export default function ExperimentHistoryFilter({
  eventTypes,
  eventTypeFilter,
  filterEventTypes,
  users,
  userFilter,
  filterUsers
}: {
  eventTypes: EventTypes;
  eventTypeFilter: EventTypes;
  filterEventTypes: (eventTypes: EventTypes) => void;
  users: FakeUser[];
  userFilter: string[];
  filterUsers: (userIds: string[]) => void;
}) {
  const [opened, setOpened] = useState(false);

  const toggleUser = (event: ChangeEvent<HTMLInputElement>, userId: string) => {
    event.preventDefault();
    event.stopPropagation();
    const newUserFilter = userFilter.includes(userId) ? userFilter.filter(id => id !== userId) : [...userFilter, userId];
    filterUsers(newUserFilter);
  };

  const toggleEventType = (event: ChangeEvent<HTMLInputElement>, eventType: EventType) => {
    event.preventDefault();
    event.stopPropagation();
    const newEventTypeFilter = eventTypeFilter.includes(eventType)
      ? eventTypeFilter.filter(type => type !== eventType)
      : [...eventTypeFilter, eventType];
    filterEventTypes(newEventTypeFilter);
  };

  const activeFilterCount = userFilter.length + eventTypeFilter.length;

  return (
    <Menu position="bottom-start" shadow="md" width={200} opened={opened} onDismiss={() => setOpened(false)}>
      <Menu.Target>
        <Button
          size="xs"
          variant={activeFilterCount > 0 ? 'filled' : 'default'}
          onClick={() => setOpened(!opened)}
          leftSection={<wa-icon name="filter" variant="light"></wa-icon>}
        >
          Filter
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Event type</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            {eventTypes.map(eventType => (
              <Menu.Item
                key={eventType}
                style={{ textTransform: 'capitalize' }}
                leftSection={
                  <wa-icon
                    name={eventTypeIcons[eventType]}
                    variant="solid"
                    style={{ fontSize: '0.7rem', color: eventTypeColor[eventType] }}
                  ></wa-icon>
                }
              >
                <Checkbox
                  onChange={event => toggleEventType(event, eventType)}
                  label={eventTypeMessage[eventType]}
                  checked={eventTypeFilter.includes(eventType)}
                ></Checkbox>
              </Menu.Item>
            ))}
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Users</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            {users.map(user => (
              <Menu.Item key={user.userId}>
                <Checkbox
                  onChange={event => toggleUser(event, user.userId)}
                  label={`${user.firstName} ${user.lastName}`}
                  checked={userFilter.includes(user.userId)}
                ></Checkbox>
              </Menu.Item>
            ))}
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}
