import EventCourt from "./components/eventCourt"
import Map from "./components/map"
import UserSearch from "./components/userSearch"



export default function Accueil(props) {

    return (
    <>
        <UserSearch />
        <EventCourt data={props.data} handleGetTypes={props.handleGetTypes}/> 
        <Map data={props.data} />
    </>
    )
}