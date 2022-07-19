const getPokemon = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('Data 7',data)
      return data
    })
    .catch(error => {
      console.error(error)
      return error
    });
}

export { getPokemon }