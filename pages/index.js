import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/data/dummy-data"


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <h1>Welcome to Events Booking Website!</h1>
      <h2>Following are our featured events :</h2>
      <EventList eventList={featuredEvents}/>
    </>
  )
}
