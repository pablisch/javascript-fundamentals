const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (phone) => {
    if (phone.length <= 10) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumber = (numbers) => {
  return numbers.filter(checkLength);
};

console.log(filterLongNumber(numbers));
console.log(checkLength('123456789'));