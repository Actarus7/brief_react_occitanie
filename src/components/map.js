import {   } from "leaflet";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { } from "../App.css";

export default function Map(props) {
    //console.log(props.data);

    let markerList = [];

    if (props.data.length) {
        markerList = props.data
            ?.filter((elm) => elm.fields.geo_point !== undefined)
            .map((elem, i) => {
                return (
                    <Marker key={elem.recordid} position={elem.fields?.geo_point}>
                        <Popup key={"msg_" + elem.recordid}>
                            {elem.fields?.categorie_de_la_manifestation} <br />
                            {elem.fields?.nom_de_la_manifestation}
                            <br />
                            {elem.fields?.dates_affichage_horaires}
                            <br />
                            <br />
                            {elem.fields?.descriptif_court}
                            <br />
                            {/*Lien de la card*/}
                        </Popup>
                    </Marker>
                );
            });
        console.log(markerList);
    }
    return (
        <MapContainer className='map row border border-3 border-danger rounded-4 mb-4'
            center={[43.60306511042458, 1.4367906616822803]}
            zoom={12}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerList}
        </MapContainer>
    );
}

//{dataEvent.map((elem, i) => <Marker position={elem[i].fields.geo_point}/>)}
