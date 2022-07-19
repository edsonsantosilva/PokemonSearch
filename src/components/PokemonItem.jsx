import { useEffect, useState } from 'react'
import { getPokemon } from '../services/getPokemon.js'

function PokemonItem(props) {
  const [pokemon, setPokemon] = useState({})
  const [noPokemon, setNoPokemon] = useState(false)
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  useEffect(() => {
    const resposta = getPokemon(props.searchOnApp)
    console.log('resposta', resposta);
  }, [props.searchOnApp]);


  return (
    <div>
      {!noPokemon && <div>
          <p>Name: {pokemon.name}</p>
          <p>Order: {pokemon.order}</p>
          <p>Weight: {pokemon.weight}</p>
          {pokemon.stats && <div>Stats: {pokemon.stats.map(item => {
            return (<ul key={item.stat.name}>
              <li>{item.stat.name}: {item.base_stat}</li>
            </ul>)
          })}</div>}
          <img src={pokemon?.sprites?.front_default} alt="" />
          <img src={pokemon?.sprites?.back_default} alt="" />
        </div>
      }
      {loadingPokemon && 'Loading pokemon...'}

    </div>
  );
}

export default PokemonItem;
