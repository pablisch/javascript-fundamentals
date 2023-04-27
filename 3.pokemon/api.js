const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => ({
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    types: data.types.map(item => item.type.name),
  }));
};

// fetchPokemon('ditto').then((pokemon) => {
//   console.log(pokemon);
// })
// ;

module.exports = fetchPokemon;