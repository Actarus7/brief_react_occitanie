import React, { useEffect, useState, } from "react";

function App() {

  const [dataEvent, setDataEvent] = useState(undefined)

  useEffect(() =>
  {
    async function fetchData()
    {
      const response = await fetch('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation');
      const responseJson = await response.json();
      console.log(responseJson);
      setDataEvent(responseJson)
    }
    fetchData();
    console.log(dataEvent)

  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>J'ai soif</h1>
      </header>
    </div>
  );
}

export default App;
