const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const genrateMessages = (array) => {
  return array.map(name => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
}

console.log(genrateMessages(names));