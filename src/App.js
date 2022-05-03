import { useState } from 'react';
import './App.css';
import PokemonItem from './components/PokemonItem';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const setMySearch = (event) => {
    console.log(event);
    setSearchOnApp(event)
  }
  const [searchOnApp, setSearchOnApp] = useState('')

  return (
    <div>
      <header>
        <div>
          <PokemonSearch nameToSearch={setMySearch}/>
          <PokemonItem searchOnApp={searchOnApp}/>
        </div>
      </header>
    </div>
  );
}

export default App;
