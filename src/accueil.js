import EventCourt from "./components/eventCourt"
import Map from "./components/map"
import UserSearch from "./components/userSearch"



export default function Accueil(props) {

    return (<div className='container'>
    <div id="search">
        <UserSearch />
    </div>
    <div id="results">
        <EventCourt data={props.data} />
    </div>
    <div id="map">
        <Map data={props.data} />
    </div>
</div>)
}