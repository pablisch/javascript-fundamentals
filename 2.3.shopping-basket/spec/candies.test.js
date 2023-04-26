const Candy = require('../candy');

describe('Candy', () => {
  test('should return a name and a price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.name).toEqual('Mars');
    expect(candy.price).toEqual(4.99);
  });
  
  test('should return name when getName called', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
  });

  test('should return price when getPrice called', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99);
  });
});