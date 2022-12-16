

export default function EventLong(props) {
    console.log(props.data);

    return (
        <div>
            <div>
                <img src="{props.imgCatEvent}" alt="{props.data.type_de_manifestation}" />
                <h1>{props.type_de_manifestation}</h1>
                <h2>{props.nom_de_la_manifestation}</h2>
            </div>
            <div>
                <p>Horaires: {props.dates_affichage_horaires}</p>
                <br />
                <p>Adresse: {props.lieu_adresse_1}
                    <br />
                    {props.lieu_adresse_2}</p>
                <br />
                <p>Tarifs : {props.tarif_normal}</p>
            </div>
            <div>
                <p>Reservation e-mail: {props.reservation_email}</p>
                <p>Reservation via le site: {props.reservation_site_internet}</p>
                <p>Reservation par téléphone: {props.reservation_telephone}</p>
                <br />
                <p>Accès: {props.station_metro_tram_a_proximite}</p>
            </div>
            <div>
                <p> {props.descriptif_long}</p>
            </div>
        </div>
    )
}