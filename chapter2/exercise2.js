/*
Write a program that accepts a list of numbers and then provides a menu 
with the following options:
- Selection Sort
- Bubble Sort
- Insertion Sort

On selecting a particular option, the program should sort the list using the 
selected sorting technique and display the sorted list. The program should also 
display the number of comparisons in each technique and the number of data 
movements happening in each technique. 
You can reuse the selection sort function created in Exervcise 1.

// For simplicity sake, this question just aims to test if one can implement 
the sorting algorithms listed above.
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
    const temp = arr[pass];
    arr[pass] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let pass = 0; pass < n - 1; pass++) {
    for (let i = 0; i < n - 1 - pass; i++) {
      const [a, b] = arr.slice(i, i + 2);
      if (a > b) {
        arr[i] = b;
        arr[i + 1] = a;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  const n = arr.length;
  for (let j = 1; j < n; j++) {
    let temp = arr[j];
    for (let i = j - 1; i >= 0; i--) {
      if (arr[i] > temp) {
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// tests
console.log(selectionSort([9, 129, 110, 4, 7, 4, 1])); // [1, 4, 4, 7, 9, 110, 129]
console.log(bubbleSort([9, 129, 110, 4, 7, 4, 1])); // [1, 4, 4, 7, 9, 110, 129]
console.log(insertionSort([9, 129, 110, 4, 7, 4, 1])); // [1, 4, 4, 7, 9, 110, 129]
