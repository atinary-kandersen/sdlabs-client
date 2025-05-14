import { useState } from 'react';
import type { FakeUser } from '../../../global';
import type { EventTypes } from '../../../lib/experiment/history/eventType';
import { eventTypes } from '../../../lib/experiment/history/eventType';
import ExperimentHistoryFilter from '../../../lib/experiment/history/ExperimentHistoryFilter';
import ExperimentHistoryTimeline from '../../../lib/experiment/history/ExperimentHistoryTimeline';
import generateLoremIpsum from '../../../lib/utils/generateLoremIpsum';
import { useUsers } from '../../queries/user';

const creteFakeExperimentHistoryItems = (users: FakeUser[]) =>
  Array.from({ length: 30 }).map(() => ({
    id: crypto.randomUUID(),
    eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    message: generateLoremIpsum(15),
    by: users[Math.floor(Math.random() * users.length)]
  }));

export default function ExperimentHistoryRoute() {
  const [userFilter, setUserFilter] = useState<Array<FakeUser['userId']>>([]);
  const [eventTypeFilter, setEventTypeFilter] = useState<EventTypes>([]);
  const usersQuery = useUsers();

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  } else if (usersQuery.isError || !usersQuery.data) {
    return <div>Error: {usersQuery.error}</div>;
  }

  const users = usersQuery.data;
  const items = creteFakeExperimentHistoryItems(users);

  const filteredItems = items
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

      <ExperimentHistoryTimeline history={filteredItems} />
    </div>
  );
}
