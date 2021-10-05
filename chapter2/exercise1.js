/*
You are given an incomplete program to sort an integer array 
containing the marks of 10 students.
Complete the program by including the function selectionSortArray() 
that uses selection sort to sort the array. 
The incomplete program in C# and C++ is as follows:

// I have taken the liberty to rewrite the program in JS
*/

function selectionSort(arr) {
  const n = arr.length;
  for (let pass = 0; pass < n - 1; pass++) {
    let minIdx = pass;
    for (let i = minIdx + 1; i < n; i++) {
      if (arr[minIdx] > arr[i]) {
        minIdx = i;
      }
    }
    let temp = arr[pass];
    arr[pass] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

// tests
console.log(selectionSort([])); // []
console.log(selectionSort([7])); // [7]
console.log(selectionSort([3, 1, 4])); // [1, 3, 4]
console.log(selectionSort([9, 110, 36, 2, 49, 5])); // [2, 5, 9, 36, 49, 110]
