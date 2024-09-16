// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of
// the pair equals the target average. There may be more than
// one pair that matches the average target.

// Constraints:
//     Time Complexity: O(N)
//     Space Complexity: O(1)

function averagePair(arr, n) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    const result = (arr[first] + arr[last]) / 2;

    if (result === n) return true;
    if (result > n) last--;
    if (result < n) first++;
  }

  return false;
}

console.log(averagePair([1, 2, 3, 6], 3)); // false
console.log(averagePair([1, 3, 3, 5, 6, 7, 11, 12, 19, 21], 16)); // true
console.log(averagePair([], 1)); // false
