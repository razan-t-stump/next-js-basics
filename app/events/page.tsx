'use client';
import Events from '@/components/events/events';
import EventsSearch from '@/components/events/events-search';
import { getAllEvents } from '@/dummy-data';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: any, month: any) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <Events events={events} />
    </Fragment>
  );
}

export default AllEventsPage;
