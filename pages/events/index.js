import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/data/dummy-data";

function AllEvents() {
    const allEvents = getAllEvents();
    return ( <>
    <EventsSearch/>
    <h2>Events</h2>
    <EventList eventList={allEvents}/>
    </> );
}

export default AllEvents;