import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';


export default function LittleMap() {

    return (
        <MapContainer style={{ width: '60vh', height: '60vh' }} center={[43.60306511042458, 1.4367906616822803]} zoom={13} scrollWheelZoom={false}>

            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.570032188000845, 1.4021166257656503]}>
                <Popup>
                    Venez observer la dignité de Stephane !
                </Popup>
            </Marker>
        </MapContainer>)
};