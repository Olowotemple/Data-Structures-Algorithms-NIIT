/*
Write an algorithm to generate the first 10 prime numbers. 
In addition, write a program to implement this algorithm.
*/

// Algorithm
/*
INPUT: NONE
OUTPUT: [] [number[]]

1. SET i = 1
2. SET result = []
3. while (result.length <= 10)
  a. if (isPrime(i))
      i. result = [...result, i]
    
  b. INCREMENT i
4. RETURN result
*/

const isPrime = require('./exercise1');

function genFirstTenPrimeNum() {
  let i = 0;
  const result = [];
  while (result.length < 10) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }
  return result;
}

// tests
console.log(genFirstTenPrimeNum());
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
