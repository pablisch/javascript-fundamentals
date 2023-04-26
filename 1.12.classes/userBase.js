const User = require('./userClass')

class UserBase {

  constructor(users) {
    this.users = users
  }

  count() {
    return this.users.length;
  }

  // long syntax - note the parentheses around (user)
  getNames() {
    return this.users.map((user) => {
      return user.getName();
    });
  }

  // alt syntax, one line - single return needed
  getNamesAlt() {
    return this.users.map(user => user.getName())
  }
  
  getIntroductions() {
    return this.users.map(user => user.getIntroduction())
  }

}

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const userbase = new UserBase(users);

// console.log(userbase);
// console.log(userbase.count());
// console.log(userbase.getNames());
// console.log(userbase.getNamesAlt());
// console.log(userbase.getIntroductions());

module.exports = UserBase;
