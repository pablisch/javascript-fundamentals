const fetchPokemon = require('./api');

describe("fetchPokemon method", () => {
  it("returns details about a pokemon", async () => {
    const pokemon = await fetchPokemon('pikachu')
    expect(pokemon.name).toEqual('pikachu');
  });

  it("returns details about a pokemon", (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(25);
        done();
    });
  });

  it("returns details about a pokemon", () => {
    return fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.types[0]).toEqual('electric');
    });
  });
});