
import { } from './App.css'
import Map from './components/map';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h1>J'ai faim</h1>
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
