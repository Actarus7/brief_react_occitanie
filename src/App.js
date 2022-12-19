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
  const [userType, setUserType] = useState([])
  const [userDate, setUserDate] = useState([])
  const [userPlace, setUserPlace] = useState([])
  const [userEvent, setUserEvent] = useState([])

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
    const dataEventCopy = [...dataEvent]
    console.log(userTypeChoice)
    const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.type_de_manifestation === userTypeChoice)
    setDataEventFiltered(newDataEventCopy)
  }
  
  const handleUserDateChoice = (userDateChoice) => {
    const dataEventCopy = [...dataEvent];
    const newDataEventCopy = dataEventCopy.filter(elm => userDateChoice >= elm.fields.date_debut && userDateChoice <= elm.fields.date_fin)
    setDataEventFiltered(newDataEventCopy)
    console.log(userDateChoice)
  }
  
  const handleUserPlaceChoice = (userPlaceChoice) => {
    const dataEventCopy = [...dataEvent];
    const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.commune.includes(userPlaceChoice.toUpperCase()))
    setUserPlace(newDataEventCopy)
    console.log(userPlaceChoice);
  }
  
  const handleUserEventChoice = (userEventChoice) => {
    const dataEventCopy = [...dataEvent];
    const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.nom_de_la_manifestation.includes(userEventChoice.toUpperCase()))
    setUserEvent(newDataEventCopy)
    console.log(userEventChoice);
  }



  //console.log(dataEvent);
  return (
    <div className="App">

      <header className=" bg-red shadow">
        <Navbar setPage={setPage}></Navbar>
      </header>

      <main className='container p-3'>

        {page === 'accueil' && <Accueil data={dataEventFiltered} setPage={setPage} handleEventLong={handleEventLong} /* handleSubmitUserChoice={handleSubmitUserChoice} */ typeCategories={typeCategories} handleUserTypeChoice={handleUserTypeChoice} handleUserDateChoice={handleUserDateChoice} handleUserPlaceChoice={handleUserPlaceChoice} handleUserEventChoice={handleUserEventChoice}></Accueil>}
        {page === 'a propos' && <Apropos></Apropos>}
        {page === 'details' && <><UserSearch typeCategories={typeCategories} handleUserTypeChoice={handleUserTypeChoice} handleUserDateChoice={handleUserDateChoice}></UserSearch><EventLong data={dataSingleEvent} ></EventLong ></>}


      </main>
    </div>

  );
}

export default App;




/// A FAIRE 
/// Ajouter photo dans SingleEvent (remonter GetImageType sur App)
/// Revoir la pagination (ne reste pas en place)



/// PARTIE AVEC FORM 
/// ne fonctionne pas - les évènements arrivent avec le submit mais deviennent undefined
/// avec des données écrites ne trouve aucune correspondante

/* const handleUserTypeChoice = (userTypeChoice) => {
  const dataEventCopy = [...dataEvent]
  console.log(userTypeChoice)
  const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.type_de_manifestation === userTypeChoice)
  setUserType(newDataEventCopy)
}

const handleUserDateChoice = (userDateChoice) => {
  const dataEventCopy = [...dataEvent];
  const newDataEventCopy = dataEventCopy.filter(elm => userDateChoice >= elm.fields.date_debut && userDateChoice <= elm.fields.date_fin)
  setUserDate(newDataEventCopy)
  console.log(userDateChoice)
}

const handleUserPlaceChoice = (userPlaceChoice) => {
  const dataEventCopy = [...dataEvent];
  const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.commune.includes(userPlaceChoice.toUpperCase()))
  setUserPlace(newDataEventCopy)
  console.log(userPlaceChoice);
}

const handleUserEventChoice = (userEventChoice) => {
  const dataEventCopy = [...dataEvent];
  const newDataEventCopy = dataEventCopy.filter(elm => elm.fields.nom_de_la_manifestation.includes(userEventChoice.toUpperCase()))
  setUserEvent(newDataEventCopy)
  console.log(userEventChoice);
}

const handleSubmitUserChoice = () => {
  const dataEventCopy = [...dataEvent]
  console.log(userType);
  console.log(userDate);
  console.log(userPlace);
  console.log(userEvent);
  let newUserDate
  let newUserEvent
  let newUserPlace
  let newUserType
  if (userEvent === []) { newUserEvent = [...dataEvent] }
  if (userDate === []) { newUserDate = [...dataEvent] }
  if (userPlace === []) { newUserPlace = [...dataEvent] }
  if (userType === []) { newUserType = [...dataEvent] }
  console.log(newUserDate)
  console.log(newUserEvent);
  console.log(newUserPlace);
  console.log(newUserType);
  console.log(dataEventCopy);
  const newDataEventCopy = dataEventCopy.filter(elm => userDate.includes(elm) && userEvent.includes(elm) && userPlace.includes(elm) && userType.includes(elm))
  setDataEvent(newDataEventCopy)
  console.log(newDataEventCopy);
} */