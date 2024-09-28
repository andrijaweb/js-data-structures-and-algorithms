function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }

  return max;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([125, 9999, 12, 1, 4, 2, 951259]));
