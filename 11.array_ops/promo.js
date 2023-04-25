const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const genrateMessages = (objects) => {
  return objects.map(object => {
    return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`;
  });
}

console.log(genrateMessages(namesAndDiscounts));