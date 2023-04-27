const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('returns attributes of given pokemon', (done) => {
    fetchPokemon('ditto')
    .then(pokemon => {
      expect(pokemon.name).toEqual('ditto');
      done();
    })
  })

  it('returns attributes of given pokemon', () => {
    return fetchPokemon('ditto')
    .then(pokemon => {
      expect(pokemon.name).toEqual('ditto');
    })
  })

  it('returns attributes of given pokemon', async () => {
    const pokemon = await fetchPokemon('ditto')
      expect(pokemon.name).toEqual('ditto');
    })
  })