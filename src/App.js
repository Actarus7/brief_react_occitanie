
import { } from './App.css'
import Map from './components/map';
import React, { useEffect, useState, } from "react";


function App() {
  const [dataEventM_1, setDataEventM_1] = useState([])
  const [dataEventM_2, setDataEventM_2] = useState([])
  const [dataEvent, setDataEvent] = useState([])

  useEffect(() => {
    async function fetchDataM_1() {
      const date_1 = filtreDefaultM_1()
      console.log(date_1.month);
      const response = await fetch(`https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date_1.year}%2F${date_1.month}`);
      const data = await response.json();
      const events = data.records;
      setDataEventM_1(events)
    }
    async function fetchDataM_2() {
      const date_2 = filtreDefault_2()
      const response = await fetch(`https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date_2.year}%2F${date_2.month}`);
      const data = await response.json();
      const events = data.records;
      setDataEventM_2(events)
    }
    function filtreDefaultM_1() {
      const dateNow = new Date()
      console.log(dateNow);
      console.log(dateNow.getMonth())
      const annee = dateNow.getFullYear()
      const mois = dateNow.getMonth() + 1
      const date = { year: annee, month: mois }
      console.log(date);
      return date
    }
    function filtreDefault_2() {
      const dateNow = new Date()
      let annee
      let mois
      if (dateNow.getMonth() === 11) {
        annee = dateNow.getFullYear() + 1
        mois = 1
      }
      else {
        annee = dateNow.getFullYear()
        mois = dateNow.getMonth() + 2
      }
      const date = { year: annee, month: mois };
      return date
    }
    function concatDataEvents() {
      const dataEventCopy = dataEventM_1.concat(dataEventM_2)
      setDataEvent(dataEventCopy)
    }
    fetchDataM_1()
    fetchDataM_2()
    concatDataEvents()

  }, []);


  console.log(dataEventM_1);
  console.log(dataEventM_2);
  console.log(dataEvent);


    return (
        <div className="App">
            <header className="App-header">
                <h1>Agenda Culturel Toulouse</h1>
                <div className='container'>
                    <div id="map">
                    <Map data={dataEvent}/>
                    </div>
                </div>
            </header>
        </div>
    );
}


export default App;
