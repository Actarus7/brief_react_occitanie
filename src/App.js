import { } from './App.css'
import Map from './components/map';
import React, { useEffect, useState, } from "react";
import { Navbar } from './components/navbar';
import EventCourt from './components/eventCourt';
import UserSearch from './components/userSearch';

function App() {
  const [dataEvent, setDataEvent] = useState([])
  useEffect(() => {
    let urls = []
    urls.push(filtreDefaultM_1())
    urls.push(filtreDefault_2())
    Promise.all(urls.map(async (url) => {
      const response = await fetch(url);
      const responseJson = await response.json();
      const data = responseJson.records
      return data;
    }))
      .then((results) => {
        const newResults = results.flat().filter(elm => elm)/* results[0].concat(results[1] )*/ // Retourne une concaténation des arrays
        setDataEvent(newResults)
      })
  }, [])
  function filtreDefaultM_1() {
    const dateNow = new Date()
    //console.log(dateNow);
    //console.log(dateNow.getMonth())
    const annee = dateNow.getFullYear()
    const mois = dateNow.getMonth() + 1
    const date = { year: annee, month: mois }
    const url = `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date.year}%2F${date.month}`
    //console.log(date);
    return url
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
    const url = `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date.year}%2F${date.month}`
    //console.log(date);
    return url
  }
  console.log(dataEvent);

  return (
    <div className="App">
      <header className=" bg-red shadow">
        <Navbar ></Navbar>
      </header>

      <main className='container '>

        <div className='container'>

          <div id="search">
            <UserSearch />
          </div>




          <div id="results">
            <EventCourt data={dataEvent} />
          </div>




          <div id="map">
            <Map data={dataEvent} />
          </div>
        </div>




      </main>
    </div>

  );
}

export default App;