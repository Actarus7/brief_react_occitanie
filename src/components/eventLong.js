import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";


export default function EventLong({ data }) {


    return (
        <>
            <div className="row  border border-danger border-3 rounded-5 flex-wrap mt-5 mb-4">
                <div>
                    {/* {<img src="{imgCatEvent}" alt="{data.type_de_manifestation}" />} */}
                    <h1 className="text-center">{data.type_de_manifestation}</h1>
                    <h2 className="text-center">{data.nom_de_la_manifestation}</h2>
                </div>

                <div className="w-100"></div>

                <div className=" col border border-danger border-2 rounded-5 p-3 m-3">
                    <p> {data.descriptif_long}</p>
                </div>

                <div className="w-100"></div>

                <div className="col border border-danger border-2 rounded-5 p-3 me-5 large ms-5 mb-3">
                    <div className="flex-shrink-1 ">
                        <p>Horaires: {data.dates_affichage_horaires}</p>
                    </div>

                    <div>
                        <p>Adresse: {data.lieu_adresse_1}
                            <br />
                            {data.lieu_adresse_2}</p>
                    </div>

                    <div>
                        <p>Tarifs : {data.tarif_normal}</p>
                    </div>
                </div>


                <div className="col border border-danger border-2 rounded-5 p-3 me-5 large ms-5 mb-3">
                    <p>Reservation e-mail: {data.reservation_email}</p>
                    <p>Reservation via le site: {data.reservation_site_internet}</p>
                    <p>Reservation par téléphone: {data.reservation_telephone}</p>
                    <p>Accès: {data.station_metro_tram_a_proximite}</p>
                </div>
            </div>

            <div>
                <MapContainer className='map row border border-3 border-danger rounded-4 mb-4' center={data.geo_point} zoom={16} scrollWheelZoom={false}>

                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={data.geo_point}>
                        <Popup>
                            {data.nom_de_la_manifestation}<br />
                            {data.lieu_adresse_1}<br />
                            {data.lieu_adresse_2}

                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}
