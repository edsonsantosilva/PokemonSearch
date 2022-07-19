import { useState } from 'react';
import './App.css';
import PokemonItem from './components/PokemonItem';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const searchForPokemon = (event) => setSearchOnApp(event)
  
  const [searchOnApp, setSearchOnApp] = useState('')

  return (
    <div>
      <header>
        <div>
          <PokemonSearch searchForPokemon={searchForPokemon}/>
        </div>
      </header>
      <section>
        <PokemonItem searchOnApp={searchOnApp}/>
      </section>
    </div>
  );
}

export default App;
