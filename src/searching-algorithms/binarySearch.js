// Write a function called binarySearch which accepts a sorted array and
// a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (val === arr[middle]) return middle;
    if (val > arr[middle]) left++;
    if (val < arr[middle]) right--;
  }

  return -1;
}

console.log(
  binarySearch([4, 16, 22, 23, 24, 999, 1234, 2222, 8951, 15915], 2222)
); // 7

console.log(
  binarySearch([4, 16, 22, 23, 24, 999, 1234, 2222, 8951, 15915], 44)
); // -1
