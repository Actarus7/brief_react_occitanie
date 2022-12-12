import React, { useEffect, useState, } from "react";

function App() {

  const [dataEvent, setDataEvent] = useState(undefined)
  


  useEffect(() =>
  {
    async function fetchData()
    {
      const response = await fetch('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation');
      const responseJson = await response.json();
      const filterDefault = new Date(); // date actuelle
      const filterMonthAddOne = filterDefault.setMonth(filterDefault.getMonth() + 1); //date augmenté de 1 mois
      const date = Number(String(filterMonthAddOne.getFullYear()) + String(filterMonthAddOne.getMonth()) + String(filterMonthAddOne.getDate())); // date au format nombre
      const dateEvent = Number(responseJson.records[0].fields.date_fin.replaceAll("-", "")); // replaceAll permet de supprimer tous les tirets et concatenne la date, Number transforme la date en string en number.
      if(date < dateEvent){
        console.log(dateEvent);
      }
      setDataEvent(responseJson)
    }
    fetchData();
    console.log(dataEvent)

  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Agenda Culturel Toulouse</h1>
      </header>
    </div>
  );
}

export default App;
