import { useEffect, useState } from 'react'

function PokemonItem(props) {
  const [pokemon, setPokemon] = useState({})
  const [noPokemon, setNoPokemon] = useState(false)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.searchOnApp}`)
      .then(response => {
        response.json()
      })
      .then(data => {
        console.log(data)
        setPokemon(data)
        setNoPokemon(false)
      })
      .catch(error => {
        console.error(error)
        setNoPokemon(true)
      });
  }, [props.searchOnApp]);

  return (
    <div>
      {!noPokemon && <div>
          <p>Name: {pokemon.name}</p>
          <p>Order: {pokemon.order}</p>
          <p>Weight: {pokemon.weight}</p>
          {pokemon.stats && <p>Stats: {pokemon.stats.map(item => {
            return (<ul key={item.stat.name}>
              <li>{item.stat.name}: {item.base_stat}</li>
            </ul>)
          })}</p>}
          <img src={pokemon?.sprites?.front_default} alt="" />
          <img src={pokemon?.sprites?.back_default} alt="" />
        </div>
      }
  </div>
  );
}

export default PokemonItem;
