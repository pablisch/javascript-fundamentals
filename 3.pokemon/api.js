const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => ({
    name: data.name,
  }));
};

fetchPokemon('ditto').then((pokemon) => {
  console.log(pokemon);
})
;

module.exports = fetchPokemon;