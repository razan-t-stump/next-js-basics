'use client';
import EventContent from '@/components/events/event-detail/event-content';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventSummary from '@/components/events/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';

function EventDetailPage() {
  const params = useParams();
  const { id } = params;

  const event = getEventById(id);
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
