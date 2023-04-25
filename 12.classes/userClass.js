class User {

  // constructor gives initial args
  constructor(name) {

    // Users are instantiated with a name attr
    this.name = name;
  }

  // getName method
  getName() {
    return this.name;
  }

  // get introduction method
  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }

}

const user = new User('Uma');

console.log(user);

user.getName(); 
// 'Uma'

user.getIntroduction();
// 'Hi, my name is Uma'

module.exports = User;
