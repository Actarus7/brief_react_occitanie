import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { } from '../App.css'

export default function Map(props) {
console.log(props.data);
    return (
        <MapContainer style={{ width: '60vh', height: '60vh' }} center={[43.60306511042458, 1.4367906616822803]} zoom={12} scrollWheelZoom={false}>

            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.data.length && (props.data?.map((elem, i) => 
                <Marker key={i} position={elem.fields?.geo_point}>
                    
                </Marker>
                ))
            }

        </MapContainer>)
}

//{dataEvent.map((elem, i) => <Marker position={elem[i].fields.geo_point}/>)}