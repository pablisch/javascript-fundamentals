const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.list = []
  }

  catch(pokemon) {
    // console.log(this.pokemons);
    // console.log(fetchPokemon('pikachu'));
    this.list.push(fetchPokemon(pokemon))
    // return this.list
  }
}

module.exports = Pokedex;