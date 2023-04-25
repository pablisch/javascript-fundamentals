const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// const nums = [1,2,3,4,5,6,7,8]

// console.log(nums.filter());


// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);

console.log(namesShorterThanThreeLetters);
console.log(uppercasedNames);

const newt = uppercasedNames.filter(isShorterThanThree);

console.log(newt);