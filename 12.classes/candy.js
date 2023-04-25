class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name
  }
  
  getPrice() {
    return this.price
  }
}

class ShoppingBasket {

  constructor() {
    this.trolley = []
  }

  addItem(candy) {
    this.trolley.push(candy)
  }

  getTotalPriceLong() {
    // maps the prices of the candies intoa prices array
    let prices = this.trolley.map(candy => candy.price) 
    // reduce adds the prices together
    return prices.reduce((total, current) => total += current, 0);
  } // reduce works much like the Ruby reduce(insert)
  
  getTotalPrice() {
    // reduce iterates through the trolley items and adds the prices 
    // that are retrieved by the Candy getPrice() function
    return this.trolley.reduce((total, current) => total += current.getPrice(), 0);
  }
  
  getTotalPriceAlt() {
    // reduce iterates through the trolley items and adds the prices 
    // that are taken directly from the candy object
    return this.trolley.reduce((total, current) => total += current.price, 0);
  }
}

module.exports = [Candy, ShoppingBasket];
