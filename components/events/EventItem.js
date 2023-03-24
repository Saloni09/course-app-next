//import Link from "next/link";
import classes from '@/styles/EventItem.module.css';
import Button from "../ui/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EastIcon from '@mui/icons-material/East';

function EventItem({ev}) {
    const humanReadableDate = new Date(ev.date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formatAddress = ev.location.replace(', ','\n');
    const exploreLink = `/events/${ev.id}`;
    return ( 
    <li className={classes.item}>
        <img src={'/'+ ev.image} alt={ev.title}/>
        <div>
            <div>
                <h2>{ev.title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div style={{paddingBottom:'10px'}}>
                    
                    <address><LocationOnIcon/>{formatAddress}</address>
                </div>
            </div>
            <div>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span ><EastIcon style={{marginTop:'5px'}}/></span>
                </Button>
            </div>
        </div>
    </li>);
}

export default EventItem;