import { useState } from 'react'

function PokemonSearch(props) {
  const [pokemonSearch, setPokemonSearch] = useState('')
  
  function searchForPokemon(event) {
    props.nameToSearch(pokemonSearch)
  }
  return (
    <div>
      <input type="text" onChange={(event) => {setPokemonSearch(event.target.value)}} />
      <button onClick={searchForPokemon}>Search for Pokemon</button>
      <p>{ pokemonSearch }</p>
    </div>
  );
}

export default PokemonSearch;
