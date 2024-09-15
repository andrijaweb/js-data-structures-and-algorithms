// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) maxSum += arr[i];
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 4, 6, 2, 1, 8, 3], 3)); // 11
