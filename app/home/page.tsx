import Events from '@/components/events/events';
import { getFeaturedEvents } from '@/dummy-data';
import '../../styles/globals.css';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Events events={featuredEvents} />
    </div>
  );
}
export default HomePage;
