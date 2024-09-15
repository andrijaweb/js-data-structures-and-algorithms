// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1

// Constraints:
// Time Complexity - Log(n) - Binary Search!

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (max >= min) {
    const middle = Math.floor((min + max) / 2);

    if (arr[middle] > val) max = middle - 1;
    if (arr[middle] < val) min = middle + 1;
    if (arr[middle] === val) return middle;
  }

  return -1;
}

console.log(search([1, 7, 13, 22, 24, 25, 26, 77], 77)); // 7
