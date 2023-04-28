const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => { 
    return response.json()
  })
  .then((data) => { 
    return {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    types: data.types.map(type => type.type.name)
    };
  });
};

// const fetchPokemon = (pokemon) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//   .then((response) => { 
//     return response.json()
//   })
//   .then((data) => { 
//     console.log( {
//     name: data.name,
//     id: data.id,
//     height: data.height,
//     weight: data.weight,
//     types: data.types.map(type => type.type.name)
//     });
//   });
// };

// console.log(fetchPokemon('pikachu'));

// setTimeout(() => {
//   console.log(fetchPokemon('pikachu'));
// }, 2000),

module.exports = fetchPokemon;