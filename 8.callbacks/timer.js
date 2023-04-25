// console.log('1. The program starts');

// setTimeout(() => {
//   console.log('4. The timer is lapsed, this callback function is now called');
// }, 2000); // 2000ms = 2 seconds

// console.log('2. The timer has started, and the callback function registered to be called later');

// console.log('3. The rest of the program below (immediate tasks) will keep running immediately');

const printHello = () => {
  console.log('Hello');
}

setTimeout(printHello, 3000);

setTimeout(() => {
  console.log('Hello');
}, 3000);

const executeAfterDeley = (seconds, aFunction) => {
  return setTimeout(aFunction, (seconds * 1000)); 
}

executeAfterDeley(5, printHello);