import { useState } from 'react'

function PokemonSearch(props) {
  const [pokemonSearch, setPokemonSearch] = useState('')
  
  function searchForPokemon(event) {
    props.searchForPokemon(pokemonSearch)
  }
  return (
    <div>
      <input type="text" placeholder='pikachu' onChange={(event) => {setPokemonSearch(event.target.value)}} />
      <button onClick={searchForPokemon}>Search for Pokemon</button>
    </div>
  );
}

export default PokemonSearch;
