import { useEffect, useState } from 'react'

function PokemonItem(props) {
  const [pokemon, setPokemon] = useState({})
  const [noPokemon, setNoPokemon] = useState(false)
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  useEffect(() => {
    console.log('props on pokemonItem', `https://pokeapi.co/api/v2/pokemon/${props.searchOnApp}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.searchOnApp}`)
      .then(response => {
        setLoadingPokemon(true)
        setNoPokemon(true)
        return response.json()
      })
      .then(data => {
        console.log('data12',data)
        setPokemon(data)
        setLoadingPokemon(false)
        setNoPokemon(false)
      })
      .catch(error => {
        console.error(error)
        setLoadingPokemon(false)
        setNoPokemon(true)
      });
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
