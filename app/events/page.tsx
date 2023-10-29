import { getAllEvents } from '@/dummy-data';
import Events from '../../components/events/events';

function AllEventsPage() {
  const events = getAllEvents();

  return <Events events={events} />;
}

export default AllEventsPage;
