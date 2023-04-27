const fetchPokemon = require('./api');

class Pokedox {
  constructor() {
    this.array = [];
  }

  async catch(pokemon) {
    const data = await fetchPokemon(pokemon);
      this.array.push(data);
  }

  // Alternative method for catch (called CatchIt)
  catchIt(pokemon) {
    return fetchPokemon(pokemon)
      .then((pokemon) => this.array.push(pokemon));
  }

  all() {
    return this.array;
  }

}

pokedox = new Pokedox;
pokedox.catch('ditto').then((pokemon) => console.log(pokemon));


module.exports = Pokedox;