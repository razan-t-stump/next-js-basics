import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
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
          <DateIcon />
          <time>{date}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{address}</address>
        </div>
      </div>
      <div className={styles.actions}>
        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={styles.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
