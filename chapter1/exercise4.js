/*
Write an algorithm to accept a number between 1 and 9 
and display a pyramid. For example, if the number entered is 5, 
the following pyramid will be displayed.

    1
   121
  12321
 1234321
123454321

Write a program to implement this algorithm
*/

// Algorithm
/*
INPUT: n [number]
OUTPUT: string
1. SET result = ''
2. SET temp = ''
3. for (let i = 1; i <= n; i++)
      a. for (let j = 1; j <= i; j++)
            i. temp = temp + String(j) + ' '
      b. for (let k = i - 1; k >= 1; k--)
            i. temp = temp + String(k) + ' '
      c. result = result + addPadding(i, n, temp) + '\n'
      d. temp = '';
4. RETURN result
*/

/*
addPadding [function]
INPUT: curr [number - i], limit [number - n], val [string - temp]
OUTPUT: string

1. SET total = (limit * 2 - 1) * 2
2. SET result = val.padStart((limit-curr) * 2 + val.length, ' ')
3. result = result.padEnd(total, ' ')
4. RETURN result
*/

function pyramid(n) {
  let result = '',
    temp = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      temp += `${String(j)} `;
    }

    for (let k = i - 1; k >= 1; k--) {
      temp += `${String(k)} `;
    }
    result += `${addPadding(i, n, temp)}\n`;
    temp = '';
  }
  return result;
}

function addPadding(curr, limit, val) {
  const total = (limit * 2 - 1) * 2;
  let result = val.padStart((limit - curr) * 2 + val.length, ' ');
  result = result.padEnd(total, ' ');
  return result;
}

// tests
console.log(pyramid(5));
