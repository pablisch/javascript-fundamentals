const Pokedox = require('./pokedox');


describe("Pokedox", () => {
  let pokedox;

  beforeEach(() => {
    pokedox = new Pokedox();
  })

  it("adds pikachu to the pokedox", async () => {
    const pokemon = await pokedox.catch('pikachu');
    expect(pokedox.all()[0].name).toEqual('pikachu');
    
  })

  it("adds two pokemon to the pokedox", async () => {
    const pokemon = await pokedox.catch('pikachu');
    // below is using catchIt (alternative version of the catch method)
    const pokemon2 = await pokedox.catchIt('jigglypuff');
    expect(pokedox.all().length).toEqual(2);
    
  })
})