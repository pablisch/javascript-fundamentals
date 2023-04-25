const names = ['Danny', 'Pablo', 'Tom'];

console.log(names.length);
console.log(names[1]);

const newNames = names.concat('Q');
console.log(newNames);

const oneToTen = [1,2,3,4,5,6,7,8,9,10]

let total = 0;

oneToTen.forEach(number => {
  total += number;
});

console.log(total);

