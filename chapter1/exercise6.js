/*
Suppose you have two arrays of size 10 each containing 
elements in ascending order.
Write an algorithm to merge the two arrays in such a way 
that the elements in the resulting array are arranged 
in the ascending order.
In addition, write a program to implement this algorithm.
*/

// Algorithm
/* This was a tricky one as I had to go further ahead in the 
book and then return here to solve it, ha!
*/

/*
1. SET result = arr1 + arr2
2. SET pass = 1
3. Repeat step 4 varying i from 0 to result.length - 1 - pass
4. if arr[i] > arr[i + 1] then swap the values
5. if pass <= result.length - 1, goto step 3
*/

function mergeAndSort() {
  const arr1 = [0, 2, 5, 7, 8, 9, 12, 23, 26, 30];
  const arr2 = [1, 3, 6, 11, 13, 14, 19, 22, 24, 27];
  const result = [...arr1, ...arr2];
  for (let pass = 1; pass <= result.length - 1; pass++) {
    for (let i = 0; i <= result.length - 1 - pass; i++) {
      const [a, b] = result.slice(i, i + 2);
      if (a > b) {
        result[i] = b;
        result[i + 1] = a;
      }
    }
  }
  return result;
}

//tests
console.log(mergeAndSort());
