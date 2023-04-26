const fb = (num) => {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

const fbu = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(fb(i)); 
  }
}

// fbu(25)

// OR in a single function

const fbUntil = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fbUntil(25)

module.exports = fbu;