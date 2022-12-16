import EventCourt from "./components/eventCourt"
import Map from "./components/map"
import UserSearch from "./components/userSearch"

export default function Accueil(props) {

    return (<>
        <UserSearch />
        <div id="results">
            <EventCourt data={props.data} handleGetTypes={props.handleGetTypes} setPage={props.setPage} handleEventLong={props.handleEventLong} />
        </div>
        <div id="map">
            <Map data={props.data} />
        </div>
    </>
    )
}