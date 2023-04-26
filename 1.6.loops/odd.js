for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// OR

const oddOrEven = (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  } 
}

for (let i = 1; i <= 20; i++) {
  oddOrEven(i)
}