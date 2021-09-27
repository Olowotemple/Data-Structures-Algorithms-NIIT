/*
Write an algorithm to check whether a number is a prime number or not. 
In addition, write a program to implement this algorithm.
*/

// Algorithm
/*
INPUT: n [Number]
OUTPUT: true || false [Boolean]

1. SET i = 1
2. while (i <= n)
    a. if (n % i === 0 && i !== 1 && i !== n)
        i. RETURN false
    b. INCREMENT i
3. RETURN true
 */

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  let i = 1;
  while (i < n) {
    if (n % i === 0 && i !== 1 && i !== n) {
      return false;
    }
    i++;
  }
  return true;
}

// tests
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(49)); // false
console.log(isPrime(23)); // true
