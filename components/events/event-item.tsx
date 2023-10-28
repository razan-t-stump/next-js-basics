import Link from 'next/link';
import styles from './event-item.module.sass';

function EventItem(props: any) {
  const { event } = props;

  const date = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const address = event.location.replace(', ', '\n');
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + event.image} alt={event.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
        </div>
        <div className={styles.date}>
          <time>{date}</time>
        </div>
        <div className={styles.address}>
          <address>{address}</address>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
