const Pokedex = require('./pokedex');
const fetchPokemon = require('./api');

jest.mock('./api', () => ({
  fetchPokemon: jest.fn(),
}))

describe("Pokedex class", () => {
  let pokedex;

  beforeEach(() => {
    pokedex = new Pokedex();

  });

  it.skip("catch Pikachu adds Pikachu to the pokemon list", () => {
    return pokedex.catch('pikachu')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(25);
    });
  });

  // mocking fetchPokemon
  // it("catch Pikachu adds Pikachu to the pokemon list", () => {
  //   let fakePokemon = { id: () => 25 }
  //   pokedex.catch(fakePokemon)
    
  //       expect(pokemon.id).toEqual(25);
  // });

  it.skip("catch Pikachu adds Pikachu to the pokemon list", async () => {
    const pokemon = pokedex.catch('pikachu')
    console.log(pokemon);
    expect(pokemon.id).toEqual(25);
  });


});


// const Pokedex = require('./pokedex');
// const fetchPokemon = require('./api');

// describe('Pokedex', () => {
//   it('should add a pokemon to the list when caught', async () => {
//     const pokedex = new Pokedex();
//     const pokemon = await fetchPokemon('pikachu'); // fetch actual pokemon data

//     pokedex.catch('pikachu');
    
//     expect(pokedex.list).toHaveLength(1); // ensure pokemon was added to the list
//     expect(pokedex.list[0]).toEqual(pokemon); // ensure the added pokemon matches the actual pokemon data
//   });

//   it('should add multiple pokemon to the list when caught', async () => {
//     const pokedex = new Pokedex();
//     const pokemon1 = await fetchPokemon('pikachu');
//     const pokemon2 = await fetchPokemon('charmander');

//     pokedex.catch('pikachu');
//     pokedex.catch('charmander');
    
//     expect(pokedex.list).toHaveLength(2); // ensure both pokemon were added to the list
//     expect(pokedex.list[0]).toEqual(pokemon1); // ensure the first added pokemon matches the actual pokemon data
//     expect(pokedex.list[1]).toEqual(pokemon2); // ensure the second added pokemon matches the actual pokemon data
//   });
// });
