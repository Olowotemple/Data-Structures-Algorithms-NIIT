/*
Write an algorithm to accept two strings and check whether 
the second string exists within the first string. 
For example, if the first string is "concatenation" and 
the second string is "cat", the algorithm should 
display "Substring found at position 4 in the string".
However, if the first string is "concatenation" and 
the second string is "tent", the algorithm should 
display "Substring not found in string".
Write a program to implement this algorithm.
*/

// Algorithm
/*
I. Using the concept of loops
INPUT: text [string], subStr [string]
OUTPUT: string

1. SET subStrLen = subStr.length
2. SET i = 0
3. while (i <= text.length - subStrLen)
      1. SET tempStr = text.slice(i, subStrLen + i)
      2. if (tempStr === subStr)
            a. RETURN `Substring found at position ${i + 1}`
      i++
4. RETURN 'Substring not found in the string'

----------------------------------------------

II. Using the concept of recursion
INPUT: text [string], subStr [String], pos [number]
OUTPUT: string

1. if (pos >=text.length - subStr.length)
      a. RETURN `Substring found at position ${pos +1}`
2. SET tempStr = text.slice(pos, subStr.length + pos)
3. if (tempStr === subStr) {
    RETURN `Substring found at position ${pos + 1}`
  }
  RETURN includes(text, subStr, ++pos);
*/

function includes(text, subStr) {
  const subStrLen = subStr.length;

  let i = 0;
  while (i <= text.length - subStrLen) {
    let tempStr = text.slice(i, subStrLen + i);
    if (tempStr === subStr) {
      return `Substring found at position ${i + 1}`;
    }
    i++;
  }
  return 'Substring not found in the string';
}

function includesRecurse(text, subStr, pos = 0) {
  if (pos >= text.length - subStr.length) {
    return `Substring not found in the string`;
  }

  let tempStr = text.slice(pos, subStr.length + pos);
  if (tempStr === subStr) {
    return `Substring found at position ${pos + 1}`;
  }
  return includes(text, subStr, ++pos);
}

function includesClever(text, subStr) {
  return text
    .split('')
    .map((char, i, arr) => char + arr.slice(i + 1, subStr.length + i).join(''))
    .includes(subStr)
    ? `Substring found at position ${text.indexOf(subStr) + 1}`
    : 'Substring not found in the string';
}
