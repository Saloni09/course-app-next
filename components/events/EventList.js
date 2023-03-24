import EventItem from "./EventItem";

function EventList(props) {
    return ( <ul>
{props.eventList.map(ev=><EventItem ev={ev} key={ev.id}/>)}
    </ul> );
}

export default EventList;