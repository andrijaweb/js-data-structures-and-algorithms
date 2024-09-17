// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Constraints:
//      Time Complexity - O(n)
//      Space Complexity - O(1)

function minSubArrayLen(arr, n) {
  let temp = 0;
  let sum = 0;

  while (sum < n && temp < arr.length) {
    sum += arr[temp];
    temp++;
  }

  if (sum < n) return 0;

  let min = temp;
  let i = 0;

  while (i + temp - 1 < arr.length) {
    if (sum >= n) {
      min = Math.min(min, temp);
      sum -= arr[i];
      i++;
      temp--;
    } else {
      sum += arr[i + temp];
      temp++;
    }
  }

  return min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
