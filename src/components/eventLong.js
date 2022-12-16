import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import EventCourt from "./eventCourt";

export default function EventLong(props) {

    //console.log(props.data);

    return /* (<><div>
        <div>
            {<img src="{props.imgCatEvent}" alt="{props.data.type_de_manifestation}" />}
            <h1>{props.data.fields.type_de_manifestation}</h1>
            <h2>{props.data.fields.nom_de_la_manifestation}</h2>
        </div>
        <div>
            <p>Horaires: {props.data.fields.dates_affichage_horaires}</p>
            <br />
            <p>Adresse: {props.data.fields.lieu_adresse_1}
                <br />
                {props.data.fields.lieu_adresse_2}</p>
            <br />
            <p>Tarifs : {props.data.fields.tarif_normal}</p>
        </div>
        <div>
            <p>Reservation e-mail: {props.data.fields.reservation_email}</p>
            <p>Reservation via le site: {props.data.fields.reservation_site_internet}</p>
            <p>Reservation par téléphone: {props.data.fields.reservation_telephone}</p>
            <br />
            <p>Accès: {props.data.fields.station_metro_tram_a_proximite}</p>
        </div>
        <div>
            <p> {props.data.fields.descriptif_long}</p>
        </div>
    </div><div>
            <MapContainer style={{ width: '60vh', height: '60vh' }} center={[43.60306511042458, 1.4367906616822803]} zoom={13} scrollWheelZoom={false}>

                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[43.570032188000845, 1.4021166257656503]}>
                    <Popup>
                        Venez observer la dignité de Stephane !
                    </Popup>
                </Marker>
            </MapContainer></div></>
    ) */
}
        