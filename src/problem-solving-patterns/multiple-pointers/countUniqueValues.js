// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(arr) {
  if (!arr.length) return false;

  let i = 0;

  for (const j of arr) {
    if (arr[i] !== j) {
      i++;
      arr[i] = j;
    }
  }

  return ++i;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
