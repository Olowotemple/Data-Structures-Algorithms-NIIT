/*
Write an algorithm to accept a number between 1 and 9 
and display a pattern.
For example, if the number entered is 5, 
the following pattern should be displayed;

1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
*/

// Algorithm
/*
INPUT: n [number]
OUTPUT: string

1. SET result = ''
2. for (let i = 1; i <= n; i++)
      a. for (let j = i; j >= 1; j--)
            i. result += String(j) + ' '
      b. result += '\n'
3. RETURN result
*/

function genLeftSidedRightAngleTri(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      result += `${String(j)} `;
    }
    result += '\n';
  }
  return result;
}

//tests
// console.log(genLeftSidedRightAngleTri(1));
// console.log(genLeftSidedRightAngleTri(2));
// console.log(genLeftSidedRightAngleTri(3));
// console.log(genLeftSidedRightAngleTri(4));
// console.log(genLeftSidedRightAngleTri(5));
console.log(genLeftSidedRightAngleTri(11));
