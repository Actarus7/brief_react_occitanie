import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";


export default function EventLong({ data }) {

    function getImageType(type) {
        let image = ""
        if (type.includes('Culturelle')) { image = 'culturel' }
        else if (type.includes('Musique')) { image = 'musique' }
        else if (type.includes('Manifestation commerciale')) { image = 'insolite' }
        else if (type.includes('Danse')) { image = 'danse' }
        else if (type.includes('Traditions et folklore')) { image = 'culturel' }
        else if (type.includes('Insolite')) { image = 'insolite' }
        else if (type.includes('Sports')) { image = 'sport' }
        else if (type.includes('Son et lumière')) { image = 'culturel' }
        else { image = 'autre' }
        return image
    }


    return (
    <><div className="row border border-danger border-3 rounded-5 flex-wrap mt-5 mb-4 ">
            <div className="px-0">
                <img className=" card-img-top img-fluid img rounded-5 " src={`/img/${getImageType(data.type_de_manifestation)}.jpg`} alt={data.type_de_manifestation} />
                <h1 className="text-center">{data.type_de_manifestation}</h1>
                <h2 className="text-center">{data.nom_de_la_manifestation}</h2>
            </div>

            <div className="w-100"></div>

            <div className="col border border-danger border-2 rounded-5 p-3 m-3">
                <p> {data.descriptif_long}</p>
            </div>

            <div className="w-100"></div>

            <div className="col border border-danger border-2 rounded-5 flex-column p-3 me-5 large ms-5 mb-3">
                <div className="flex-shrink-1 ">
                    {data.dates_affichage_horaires !== undefined ? <p>Horaires: {data.dates_affichage_horaires}</p> : ""}
                </div>


                <div>
                    {data.lieu_adresse_1 || data.lieu_adresse_2 !== undefined ? <p>Adresse: {data.lieu_adresse_1}
                        <br />
                        {data.lieu_adresse_2}
                        {data.commune}</p> : ""}
                </div>
                <div>
                    {data.tarif_normal !== undefined ? <p>Tarifs : {data.tarif_normal}</p> : ""}
                </div>
            </div>

            <div className="col border border-danger border-2 rounded-5 flex-column p-3 me-5 large ms-5 mb-3">
                {data.reservation_email !== undefined ? <p>Reservation e-mail: {data.reservation_email} </p> : ""}
                {data.reservation_site_internet !== undefined ? <p>Reservation via le site: {data.reservation_site_internet}</p> : ""}
                {data.reservation_telephone !== undefined ? <p>Reservation par téléphone: {data.reservation_telephone}</p> : ""}
                {data.station_metro_tram_a_proximite !== undefined ? <p>Accès: {data.station_metro_tram_a_proximite}</p> : ""}
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
        </div></>

        )
}
