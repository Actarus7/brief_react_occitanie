import EventCourt from "./components/eventCourt"
import Map from "./components/map"
import UserSearch from "./components/userSearch"

export default function Accueil(props) {
//console.log(props.typeCategories);
    return (<div className='container'>
    <div id="search">
        <UserSearch typeCategories={props.typeCategories}  handleUserTypeChoice={props.handleUserTypeChoice}/>
    </div>
    <div id="results">
        <EventCourt data={props.data} setPage={props.setPage} handleEventLong={props.handleEventLong}/>
    </div>
    <div id="map">
        <Map data={props.data} />
    </div>
</div>)
}