import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import EventCourt from "./eventCourt";

export default function EventLong({data}) {


    return (<><div>
        <div>
            {/* {<img src="{imgCatEvent}" alt="{data.type_de_manifestation}" />} */}
            <h1>{data.type_de_manifestation}</h1>
            <h2>{data.nom_de_la_manifestation}</h2>
        </div>
        <div>
            <p>Horaires: {data.dates_affichage_horaires}</p>
            <br />
            <p>Adresse: {data.lieu_adresse_1}
                <br />
                {data.lieu_adresse_2}</p>
            <br />
            <p>Tarifs : {data.tarif_normal}</p>
        </div>
        <div>
            <p>Reservation e-mail: {data.reservation_email}</p>
            <p>Reservation via le site: {data.reservation_site_internet}</p>
            <p>Reservation par téléphone: {data.reservation_telephone}</p>
            <br />
            <p>Accès: {data.station_metro_tram_a_proximite}</p>
        </div>
        <div>
            <p> {data.descriptif_long}</p>
        </div>
    </div><div>
            <MapContainer className='map row border border-3 border-danger rounded-4 mb-4' center={data.geo_point} zoom={16} scrollWheelZoom={false}>

                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={data.geo_point}>
                    <Popup>
                    {data.nom_de_la_manifestation}<br/>
                    {data.lieu_adresse_1}<br/>
                    {data.lieu_adresse_2}

                    </Popup>
                </Marker>
            </MapContainer></div></>
    )
}
        