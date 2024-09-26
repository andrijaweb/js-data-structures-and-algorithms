function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

// Optimized bubble sort
function bubbleSortOptimized(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([333, 12, 2, 999, 214, 5555, 111]));
console.log(bubbleSortOptimized([333, 12, 2, 999, 214, 5555, 111]));
