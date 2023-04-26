const ShoppingBasket = require('../shoppingBasket');
const Candy = require('../candy');

jest.mock('../candy');

describe('ShoppingBasket', () => {
  let basket;
  let mockCandy;
  
  beforeEach(() => {
    basket = new ShoppingBasket();
    mockCandy = new Candy();
    Candy.mockClear();
    mockCandy.getName.mockImplementation(() => 'Crunchie');
    mockCandy.getPrice.mockImplementation(() => 3.99);
  });

  it('wins the game', () => {
    basket.addToTrolley(mockCandy)
  
    expect(basket.trolley[0].getName()).toEqual('Crunchie');
  });
});