
import { } from './App.css'
import Map from './components/map';
import React, { useEffect, useState, } from "react";

function App() {

    const [dataEvent, setDataEvent] = useState([])

    useEffect(() => {
        /* const url = filtreDefault()
        console.log(url); */

        async function fetchData(url) {
            const response = await fetch('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=100&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=2023%2F01');
            const data = await response.json();
            const events = data.records;
            setDataEvent(events)

        }

/* function filtreDefault() {
    const dateNow = new Date()
    console.log(dateNow);
    const datePlus1Mois = dateNow.setMonth(dateNow.getMonth()+1)
    const year = datePlus1Mois/1000
    const month = datePlus1Mois
    const date = datePlus1Mois
    const test = `${year}%2F${month}%2F${date}`
    console.log(datePlus1Mois);
    console.log(test);
    return datePlus1Mois
        } */
    fetchData();

    }, []);

    console.log(dataEvent);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Agenda Culturel Toulouse</h1>
                <div className='container'>
                    <div id="map">
                        <Map ></Map>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
