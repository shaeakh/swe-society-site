import {EventCard} from "../eventspage/EventCard";

function EventSection() {
  return (
    <div>
      <h1 className="flex flex-col items-center">Events</h1>
      <EventCard />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default EventSection;
