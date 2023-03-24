import EventList from "@/components/events/EventList";
import { useRouter } from "next/router";
import { getFilteredEvents } from '../../data/dummy-data';

function FilteredEvents() {
    const param = useRouter()?.query?.eventtime;
    const obToSend = {year: +param[0], month: +param[1]}
    const filteredEv = getFilteredEvents(obToSend);

    return ( <>
    <h2>Filtered Events:</h2>
    <EventList eventList = {filteredEv}/>
    </> );
}

export default FilteredEvents;