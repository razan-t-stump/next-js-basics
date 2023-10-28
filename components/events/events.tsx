import EventItem from './event-item';
import styles from './events.module.sass';

function Events(props: any) {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event: any) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default Events;
