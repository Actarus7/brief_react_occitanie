

export default function EventLong(props) {

    return (
        <div>
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
        </div>
    )
}