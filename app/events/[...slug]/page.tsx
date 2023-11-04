'use client';
import Events from '@/components/events/events';
import { getFilteredEvents } from '@/dummy-data';
import { useParams } from 'next/navigation';

function FilteredEventsPage() {
  const params = useParams();
  const { slug } = params;
  const year = +slug[0];
  const month = +slug[1];

  if (!year || !month) {
    return <p>No Year or Month</p>;
  }

  const events = getFilteredEvents({ year, month });

  if (!events || events.length === 0) {
    return <p>No event!!</p>;
  }
  return (
    <div>
      <Events events={events} />
    </div>
  );
}

export default FilteredEventsPage;
