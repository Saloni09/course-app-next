import { useRouter } from "next/router";
import { getEventById } from "@/data/dummy-data";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

function EventDetail() {
    const eventIdParam= useRouter();
    const eventDetails = getEventById(eventIdParam?.query?.eventid);
    return ( <>
    <EventSummary title={eventDetails?.title}/>
    <EventLogistics date={eventDetails?.date} address={eventDetails?.location} image={eventDetails?.image} imageAlt={eventDetails?.title}/>
    <EventContent>
        <p>{eventDetails?.description}</p>
    </EventContent>
    </> );
}

export default EventDetail;