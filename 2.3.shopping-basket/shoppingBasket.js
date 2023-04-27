const Candy = require('./candies');

class ShoppingBasket {
  constructor() {
    this.trolley = [];
  };

  getTotalPrice() {
    return this.trolley.reduce((total, candy) => total + candy.getPrice(), 0);
  };

  addToTrolley(candy) {
    this.trolley.push(candy);
  };

};


module.exports = ShoppingBasket;