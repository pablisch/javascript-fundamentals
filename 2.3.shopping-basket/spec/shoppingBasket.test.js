const ShoppingBasket = require('../shoppingBasket');
const Candy = require('../candy');

describe('ShoppingBasket', () => {
  let candy;
  let basket;
  let mockCandy;

  beforeEach(() => {
    candy = new Candy('Mars', 4.99);
    basket = new ShoppingBasket();
    mockCandy = { getName: () => "Crunchie", getPrice: () => 3.99 };
  });

  test('should have a total price of 0 when created', () => {
    expect(basket.trolley).toEqual([]);
  });

  test('should have a total price of 0 when created', () => {
    expect(basket.getTotalPrice()).toEqual(0);
  });
  
  test('should update the trolley when item is added', () => {
    basket.addToTrolley(candy);
    expect(basket.trolley[0].name).toEqual("Mars");
  });
  
  test('should have a total price of 4.99 for one Mars', () => {
    basket.addToTrolley(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });
  
  test('should have a total price of candies in basket', () => {
    basket.addToTrolley(candy);
    basket.addToTrolley(new Candy('Snickers', 3.99));
    expect(basket.getTotalPrice()).toEqual(8.98);
  });
  
  test('should have a total price of candies in basket', () => {
    
    
    basket.addToTrolley(mockCandy);
    expect(basket.getTotalPrice()).toEqual(3.99);
  });
  
  test('should update the trolley when fake candy is added', () => {
    

    basket.addToTrolley(mockCandy);
    expect(basket.trolley[0].getName()).toEqual("Crunchie");
  });
});