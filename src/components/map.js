import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import { } from '../App.css'

export default function Map(props) {
    console.log(props.data);

    let fields = [];

    if (props.data.length) {
        fields = props.data?.map((elem, i) => {
            if (elem.fields && elem.fields.geo_point) {
                return <><Marker key={i} position={elem.fields?.geo_point}>
                <Popup>{elem.fields?.categorie_de_la_manifestation} <br/>
                {elem.fields?.nom_de_la_manifestation}<br/>
                {elem.fields?.dates_affichage_horaires}<br/><br/>
                {elem.fields?.descriptif_court}<br/>{/*Lien de la card*/}</Popup> 
                </Marker> </>
                
                            
            }
        })
        

    }
    return (
        <MapContainer style={{ width: '60vh', height: '60vh' }} center={[43.60306511042458, 1.4367906616822803]} zoom={12} scrollWheelZoom={false}>

            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {fields}

        </MapContainer>)
}

//{dataEvent.map((elem, i) => <Marker position={elem[i].fields.geo_point}/>)}