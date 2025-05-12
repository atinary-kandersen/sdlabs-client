import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { EventTypes, eventTypes } from '../../../lib/experiment/history/eventType';
import ExperimentHistoryFilter from '../../../lib/experiment/history/ExperimentHistoryFilter';
import ExperimentHistoryTimeline, { ExperimentHistoryItem } from '../../../lib/experiment/history/ExperimentHistoryTimeline';
import { FakeUser, fakeUser } from '../datasets/DatasetListRoute';

const users: FakeUser[] = faker.helpers.multiple(fakeUser, {
  count: 5
});

export const history: ExperimentHistoryItem[] = Array.from({ length: 30 }).map(() => ({
  id: faker.string.uuid(),
  eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
  message: faker.lorem.sentence(15),
  by: Math.random() > 0.5 ? faker.helpers.arrayElement(users) : undefined
}));

export default function ExperimentHistoryRoute() {
  const [userFilter, setUserFilter] = useState<Array<FakeUser['userId']>>([]);
  const [eventTypeFilter, setEventTypeFilter] = useState<EventTypes>([]);

  const filteredHistory = history
    .filter(item => eventTypeFilter.length === 0 || eventTypeFilter.includes(item.eventType))
    .filter(item => userFilter.length === 0 || (item.by && userFilter.includes(item.by.userId)));

  return (
    <div className="wa-stack wa-gap-xl">
      <div className="wa-cluster">
        <ExperimentHistoryFilter
          eventTypes={eventTypes}
          eventTypeFilter={eventTypeFilter}
          filterEventTypes={setEventTypeFilter}
          users={users}
          userFilter={userFilter}
          filterUsers={setUserFilter}
        />
      </div>

      <ExperimentHistoryTimeline history={filteredHistory} />
    </div>
  );
}
