const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = [];
  }

  applyDiscount(discount) {
    this.discount = discount; 
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

  addToTrolley(candy) {
    this.candies.push(candy);
  };
}

basket = new ShoppingBasket();
crunchie = new Candy('Crunchie', 3.99);
basket.addToTrolley(crunchie);
basket.applyDiscount(0.95);

console.log(basket.getTotalPrice());