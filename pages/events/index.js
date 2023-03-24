import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/data/dummy-data";

function AllEvents() {
    const allEvents = getAllEvents();
    const router = useRouter();
    function findEventsHandler(year, month){
        const fullPath = `events/${year}/${month}`;
        router.push(fullPath);
    }
    return ( <>
    <EventsSearch findEventsHandler={findEventsHandler}/>
    <h2>Events</h2>
    <EventList eventList={allEvents}/>
    </> );
}

export default AllEvents;