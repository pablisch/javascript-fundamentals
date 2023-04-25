const User = require('./userClass')
const UserBase = require('./userBase')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userbase = new UserBase(users);

console.log(userbase);
console.log(userbase.count());
console.log(userbase.getNames());
console.log(userbase.getNamesAlt());
console.log(userbase.getIntroductions());

module.exports = UserBase;
