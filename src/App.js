import { } from './App.css'
import React, { useEffect, useState, } from "react";
import { Navbar } from './components/navbar';
import Apropos from './components/aPropos';
import Accueil from './accueil';
import EventLong from './components/eventLong';
import UserSearch from './components/userSearch';

function App() {
  const [dataEventFiltered, setDataEventFiltered] = useState([])
  const [dataEvent, setDataEvent] = useState([]);
  const [page, setPage] = useState('accueil')
  const [dataSingleEvent, setDataSingleEvent] = useState(undefined)
  const [typeCategories, setTypeCategories] = useState([])
  //const [dataUserTypeChoice, setDataUserChoice] = useState([])

  useEffect(() => {
    let urls = [];
    urls.push(filtreDefaultM_1());
    urls.push(filtreDefault_2());
    Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        const responseJson = await response.json();
        const data = responseJson.records;
        return data;
      })
    ).then((results) => {
      const newResults = results
        .flat()
        .filter((elm) => elm); /* results[0].concat(results[1] )*/ // Retourne une concaténation des arrays
      setDataEvent(newResults);
      setDataEventFiltered(newResults);
      handleGetTypes(newResults);
    });
  }, []);

  function filtreDefaultM_1() {
    const dateNow = new Date();
    //console.log(dateNow);
    //console.log(dateNow.getMonth())
    const annee = dateNow.getFullYear();
    const mois = dateNow.getMonth() + 1;
    const date = { year: annee, month: mois };
    const url = `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date.year}%2F${date.month}`;
    //console.log(date);
    return url;
  }

  function filtreDefault_2() {
    const dateNow = new Date();
    let annee;
    let mois;
    if (dateNow.getMonth() === 11) {
      annee = dateNow.getFullYear() + 1;
      mois = 1;
    } else {
      annee = dateNow.getFullYear();
      mois = dateNow.getMonth() + 2;
    }
    const date = { year: annee, month: mois };
    const url = `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=300&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation&refine.date_fin=${date.year}%2F${date.month}`;
    //console.log(date);
    return url;
  }

  const handleGetTypes = (newResults) => {
    const dataEventCopy = [...newResults]
    const newDataEventCopy = [...new Set(dataEventCopy.map((elm) => elm.fields.type_de_manifestation))]
    //console.log(newDataEventCopy);
    setTypeCategories(newDataEventCopy)
  }

  const handleEventLong = (data) => {
    //console.log(data);
    setDataSingleEvent(data);
    setPage('details');
  }

const handleUserTypeChoice = (userTypeChoice) => {
  console.log(userTypeChoice);
  const dataEventCopy = [...dataEvent]
  const newdataEventCopy = dataEventCopy.filter(elm => elm.fields.type_de_manifestation === userTypeChoice)
  console.log(newdataEventCopy)
  setDataEventFiltered(newdataEventCopy.filter(elm => elm.fields.type_de_manifestation === userTypeChoice))
  console.log(dataEventFiltered);
  console.log(dataEvent);
}

  //console.log(dataEvent);
  return (
    <div className="App">

      <header className=" bg-red shadow">
        <Navbar setPage={setPage}></Navbar>
      </header>

      <main className='container p-3'>

        {page === 'accueil' && <Accueil data={dataEventFiltered} setPage={setPage} handleEventLong={handleEventLong} typeCategories={typeCategories} handleUserTypeChoice={handleUserTypeChoice}></Accueil>}
        {page === 'a propos' && <Apropos></Apropos>}
        {page === 'details' && <><UserSearch typeCategories={typeCategories}></UserSearch><EventLong data={dataSingleEvent} ></EventLong ></>}


      </main>
    </div>

  );
}

export default App;